import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsFolderCameraIcon],svg[arcticons-folder-camera-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M4.5 11.5a3 3 0 0 1 3-3h8.718a4 4 0 0 1 2.325.745l4.914 3.51a4 4 0 0 0 2.325.745H40.5a3 3 0 0 1 3 3v20a3 3 0 0 1-3 3h-33a3 3 0 0 1-3-3z"></svg:path><svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:circle cx="24" cy="26.5" r="7"></svg:circle><svg:path d="M25.658 23.628h-3.316L20.683 26.5l1.659 2.872h3.316l1.659-2.872zm1.659 2.872l2.747 3.507m-12.123-7.005l2.742 3.498m3.317-7l-1.658 4.128m3.316 5.744L24 33.5m-1.658-4.128l-4.406.626m7.722-6.37l4.406-.626"></svg:path></svg:g>`,
})
export class ArcticonsFolderCameraIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
