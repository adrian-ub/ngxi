import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[heroiconsUsers20SolidIcon],svg[heroicons-users-20-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 8a3 3 0 1 0 0-6a3 3 0 0 0 0 6m7.5 1a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5M1.615 16.428a1.22 1.22 0 0 1-.569-1.175a6.002 6.002 0 0 1 11.908 0c.058.467-.172.92-.57 1.174A9.95 9.95 0 0 1 7 18a9.95 9.95 0 0 1-5.385-1.572M14.5 16h-.106c.07-.297.088-.611.048-.933a7.47 7.47 0 0 0-1.588-3.755a4.5 4.5 0 0 1 5.874 2.636a.82.82 0 0 1-.36.98A7.47 7.47 0 0 1 14.5 16"></svg:path>`,
})
export class HeroiconsUsers20SolidIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
