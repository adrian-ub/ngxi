import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentNumberCircle224FilledIcon],svg[fluent-number-circle-2-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10M10.351 8.95l.02-.022q.028-.036.093-.105c.088-.092.22-.217.392-.342c.347-.252.82-.481 1.393-.481c.967 0 1.75.783 1.75 1.75c0 .534-.194.862-.527 1.157c-.32.282-.726.502-1.24.78l-.343.187c-.634.348-1.37.788-1.937 1.478C9.364 14.067 9 14.996 9 16.25c0 .414.336.75.75.75h5a.75.75 0 0 0 0-1.5h-4.185c.099-.52.3-.897.546-1.196c.37-.45.884-.777 1.5-1.116l.286-.154c.515-.277 1.107-.596 1.568-1.003c.604-.534 1.035-1.253 1.034-2.281a3.25 3.25 0 0 0-3.25-3.25c-.987 0-1.764.396-2.276.769a4.5 4.5 0 0 0-.753.696l-.067.083v.002H9.15a.75.75 0 0 0 1.199.903zm-.001.003l.002-.003Z"></svg:path>`,
})
export class FluentNumberCircle224FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
