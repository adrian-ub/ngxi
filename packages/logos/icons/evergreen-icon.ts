import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[logosEvergreenIconIcon],svg[logos-evergreen-icon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:circle cx="128" cy="128" r="128" fill="#38A065"></svg:circle><svg:path fill="#FFF" d="M135.97 176.049v31.88h-15.94v-31.88zM128 56.5l55.79 111.579H72.21z"></svg:path></svg:g>`,
})
export class LogosEvergreenIconIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
