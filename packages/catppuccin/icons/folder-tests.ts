import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[catppuccinFolderTestsIcon],svg[catppuccin-folder-tests-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round"><svg:path stroke="#cad3f5" d="M4.5 4.5H12A1.5 1.5 0 0 1 13.5 6v.5m-7.5 7H2A1.5 1.5 0 0 1 .5 12V3.5a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v1"></svg:path><svg:path stroke="#8bd5ca" d="m13.158 9.16l-4.272 4.254c-.558.555-.45 1.31-.064 1.694c.406.403 1.077.64 1.743-.023l4.269-4.25M12.5 8.501l.5.5l1 1l1 1l.5.5m-3.478 2.005H8.96"></svg:path></svg:g>`,
})
export class CatppuccinFolderTestsIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
