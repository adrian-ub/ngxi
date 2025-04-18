import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsPortariusIcon],svg[arcticons-portarius-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M4.5 34.016h30.822c5.237.031 8.223-5.081 8.178-10.267v-9.765H12.162c-3.865 0-7.662 2.903-7.662 9.765z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.987 13.984c4.333 0 8.212 2.394 8.212 7.731v12.301m5.395-20.032v12.13c-.088 4.629 4.227 7.902 7.25 7.902"></svg:path>`,
})
export class ArcticonsPortariusIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
