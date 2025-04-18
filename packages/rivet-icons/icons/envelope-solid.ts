import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[rivetIconsEnvelopeSolidIcon],svg[rivet-icons-envelope-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M0 2h16v.912L8 7.356L0 2.912z"></svg:path><svg:path d="M0 5.2V14h16V5.2L8 9.644L0 5.199Z"></svg:path></svg:g>`,
})
export class RivetIconsEnvelopeSolidIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
