import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsMymountsinaiIcon],svg[arcticons-mymountsinai-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m24 15.643l13.929 20.893M32.357 19.82L21.214 36.536m-5.571 0L29.57 15.643m-19.5 20.893l16.715-25.072L43.5 36.536m-39 0l13.929-20.893l13.928 20.893"></svg:path>`,
})
export class ArcticonsMymountsinaiIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
