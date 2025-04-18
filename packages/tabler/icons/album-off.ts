import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerAlbumOffIcon],svg[tabler-album-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M8 4h10a2 2 0 0 1 2 2v10m-.581 3.41c-.362.364-.864.59-1.419.59H6a2 2 0 0 1-2-2V6c0-.552.224-1.052.585-1.413"></svg:path><svg:path d="M12 4v4m1.503 1.497L14 9l2 2V4M3 3l18 18"></svg:path></svg:g>`,
})
export class TablerAlbumOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
