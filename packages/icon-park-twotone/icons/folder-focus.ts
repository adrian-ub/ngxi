import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneFolderFocusIcon],svg[icon-park-twotone-folder-focus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTFolderFocus0"><svg:g fill="#555" stroke="#fff" stroke-linejoin="round" stroke-width="4"><svg:path d="M5 8a2 2 0 0 1 2-2h12l5 6h17a2 2 0 0 1 2 2v26a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2z"></svg:path><svg:path stroke-linecap="round" d="m24 20l2.243 4.913l5.366.615l-3.98 3.651l1.073 5.293L24 31.816l-4.702 2.656l1.073-5.293l-3.98-3.651l5.366-.615z"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTFolderFocus0)"></svg:path>`,
})
export class IconParkTwotoneFolderFocusIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
