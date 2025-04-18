import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[deviconSupabaseIcon],svg[devicon-supabase-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:lineargradient id="deviconSupabase0" x1="53.974" x2="94.163" y1="54.974" y2="71.829" gradientTransform="translate(29.387 60.096)scale(1.1436)" gradientUnits="userSpaceOnUse"><svg:stop offset="0" stop-color="#249361"></svg:stop><svg:stop offset="1" stop-color="#3ecf8e"></svg:stop></svg:lineargradient><svg:lineargradient id="deviconSupabase1" x1="36.156" x2="54.484" y1="30.578" y2="65.081" gradientTransform="translate(29.387 60.096)scale(1.1436)" gradientUnits="userSpaceOnUse"><svg:stop offset="0"></svg:stop><svg:stop offset="1" stop-opacity="0"></svg:stop></svg:lineargradient></svg:defs><svg:path fill="url(#deviconSupabase0)" d="M102.24 186.21c-3.267 4.117-9.904 1.862-9.977-3.397l-1.156-76.906h51.715c9.365 0 14.587 10.817 8.763 18.149z" transform="translate(-27.722 -60.338)"></svg:path><svg:path fill="url(#deviconSupabase1)" fill-opacity=".2" d="M102.24 186.21c-3.267 4.117-9.904 1.862-9.977-3.397l-1.156-76.906h51.715c9.365 0 14.587 10.817 8.763 18.149z" transform="translate(-27.722 -60.338)"></svg:path><svg:path fill="#3ecf8e" d="M53.484 2.128c3.267-4.117 9.905-1.862 9.977 3.396l.508 76.907H12.902c-9.365 0-14.587-10.817-8.764-18.149z"></svg:path>`,
})
export class DeviconSupabaseIcon {
  readonly viewBox = input("0 0 128 128")
  readonly width = input("1em")
  readonly height = input("1em")
}
