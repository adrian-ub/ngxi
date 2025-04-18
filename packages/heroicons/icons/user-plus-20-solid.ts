import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[heroiconsUserPlus20SolidIcon],svg[heroicons-user-plus-20-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 5a3 3 0 1 1-6 0a3 3 0 0 1 6 0M1.615 16.428a1.22 1.22 0 0 1-.569-1.175a6.002 6.002 0 0 1 11.908 0c.058.467-.172.92-.57 1.174A9.95 9.95 0 0 1 7 18a9.95 9.95 0 0 1-5.385-1.572M16.25 5.75a.75.75 0 0 0-1.5 0v2h-2a.75.75 0 0 0 0 1.5h2v2a.75.75 0 0 0 1.5 0v-2h2a.75.75 0 0 0 0-1.5h-2z"></svg:path>`,
})
export class HeroiconsUserPlus20SolidIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
