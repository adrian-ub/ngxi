import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiGreenhouseIcon],svg[mdi-greenhouse-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 3L4 9v12h16V9zm-2 7h4v9h-4zm6 0h2v3h-2zm-.67-2H8.67L12 5.5zM8 10v3H6v-3zm-2 5h2v4H6zm10 4v-4h2v4z"></svg:path>`,
})
export class MdiGreenhouseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
