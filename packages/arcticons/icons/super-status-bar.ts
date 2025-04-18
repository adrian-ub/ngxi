import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsSuperStatusBarIcon],svg[arcticons-super-status-bar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="m9.365 24.028l.002-.016l-.002-11.039L24.042 4.5l14.593 8.426v10.957m0 5.952V35l-14.723 8.5l-14.547-8.241h0V30.17"></svg:path><svg:path d="m14.107 15.783l9.74-5.624l9.953 5.746v5.197l-9.682-5.59l-4.793 2.768l14.52 8.383l4.746-2.773m.041 5.683L23.85 38.127l-14.462-8.56"></svg:path><svg:path d="m9.435 24.12l14.672 8.47l4.767-2.752l-14.87-8.586v-5.271"></svg:path></svg:g>`,
})
export class ArcticonsSuperStatusBarIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
