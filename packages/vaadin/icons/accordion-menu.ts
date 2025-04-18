import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vaadinAccordionMenuIcon],svg[vaadin-accordion-menu-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 4v8h16V4zm15 7H1V7h14zM0 0h16v3H0zm0 13h16v3H0z"></svg:path>`,
})
export class VaadinAccordionMenuIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
