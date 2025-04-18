import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsEmojiCardFileBoxIcon],svg[arcticons-emoji-card-file-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M18.118 17.359a1.4 1.4 0 0 0-.82-.263h-6.146a1.41 1.41 0 0 0-1.41 1.41v.656m18.289 1.076a1.41 1.41 0 0 0-1.267-.791h-6.146a1.41 1.41 0 0 0-1.41 1.41v.981H9.743m28.33 2.964v-.888c0-.705-.63-1.276-1.41-1.276h-6.146c-.778 0-1.409.571-1.409 1.276v.888H9.743"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m5.52 11.886l.008 15.948H42.5l-.01-15.948m0-.001H5.5m.028 15.949H42.5m-23.992 3.659h11.115v5.278H18.508z"></svg:path><svg:rect width="37" height="37" x="5.5" y="5.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4" ry="4"></svg:rect>`,
})
export class ArcticonsEmojiCardFileBoxIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
