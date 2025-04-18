import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[humbleiconsFolderAddIcon],svg[humbleicons-folder-add-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="2"><svg:path stroke-linejoin="round" d="M3 18V6a2 2 0 0 1 2-2h4.539a2 2 0 0 1 1.562.75L12.2 6.126a1 1 0 0 0 .78.375H20a1 1 0 0 1 1 1V18a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1z"></svg:path><svg:path stroke-linecap="round" d="M9.5 12.5h5M12 15v-5"></svg:path></svg:g>`,
})
export class HumbleiconsFolderAddIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
