import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsMusicEditorIcon],svg[arcticons-music-editor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M4.5 13.97v3.362m6.5-7.285v11.207m3.25-15.129v19.052m3.25-15.13v11.207m3.25-9.526v7.845M24 8.366v14.57M7.75 11.728v7.845m19.5-7.845v7.845m3.25-9.526v11.207m3.25-15.129v19.052M37 10.047v11.207m3.25-9.526v7.845m3.25-5.603v3.362m-25.103 8.965l8.405 11.207m-5.604 0l8.405-11.207"></svg:path><svg:circle cx="19.181" cy="39.41" r="2.466" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="28.819" cy="39.41" r="2.466" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle>`,
})
export class ArcticonsMusicEditorIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
