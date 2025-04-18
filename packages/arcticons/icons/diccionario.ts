import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsDiccionarioIcon],svg[arcticons-diccionario-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M14.562 24.61V4.5h-4.301"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M10.26 24.61h8.458c5.553 0 10.055-4.502 10.055-10.055S24.27 4.5 18.718 4.5"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M19.517 24.578V43.5H15.55m7.716 0h6.408l.263-5.073M27.45 23.782h10.29h-.003c-.777-4.2-4.033-7.352-7.933-7.352c-4.478 0-8.108 4.157-8.108 9.285S25.326 35 29.804 35c2.98 0 5.584-1.84 6.993-4.583"></svg:path>`,
})
export class ArcticonsDiccionarioIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
