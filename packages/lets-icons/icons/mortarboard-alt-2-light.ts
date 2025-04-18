import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsMortarboardAlt2LightIcon],svg[lets-icons-mortarboard-alt-2-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:path d="M19.5 8.5h-15a1 1 0 0 1 0-2h15a1 1 0 1 1 0 2Z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.5v8"></svg:path><svg:path stroke-linejoin="round" d="m7.5 8.5l-.98 6.857a.15.15 0 0 0 .122.169l5.331.97a.2.2 0 0 0 .054 0l5.33-.97a.15.15 0 0 0 .123-.169L16.5 8.5"></svg:path><svg:path stroke-linejoin="round" d="m6.5 13.5l5.473.995a.2.2 0 0 0 .054 0L17.5 13.5"></svg:path></svg:g>`,
})
export class LetsIconsMortarboardAlt2LightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
