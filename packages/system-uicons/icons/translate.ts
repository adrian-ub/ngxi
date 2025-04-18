import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[systemUiconsTranslateIcon],svg[system-uicons-translate-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M18.5 10.5v-6a2 2 0 0 0-2-2h-6a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2"></svg:path><svg:path d="M6.5 8.503h-2a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h.003l6-.01a2 2 0 0 0 1.997-2V14.5m-5-1.997h-3"></svg:path><svg:path d="m9 14l-1 1q-.5.5-2.5 1.5"></svg:path><svg:path d="M5.5 12.503q.501 1.75 1.5 2.499C8 15.75 8.5 16 9.5 16.5m4-12l-3 6m3-6l3 6m-1-2h-4"></svg:path></svg:g>`,
})
export class SystemUiconsTranslateIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}
