import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[catppuccinFolderDockerOpenIcon],svg[catppuccin-folder-docker-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round"><svg:path stroke="#cad3f5" d="m1.875 8l.686-2.743a1 1 0 0 1 .97-.757h10.938a1 1 0 0 1 .97 1.243l-.315 1.26M6 13.5H2.004A1.5 1.5 0 0 1 .5 12V3.5a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v1"></svg:path><svg:g stroke="#8aadf4"><svg:path d="M8.5 11.5h5l.25-.5c-.151-.555-.465-.945-.25-1.5c.47.297.65.937 1 1c.357-.044 1-1 1 0c0 0 0 1.5-1 1.5c-.5 2-1.75 2.5-3.5 2.5c-2.75 0-2.5-3-2.5-3" transform="matrix(.99904 0 0 1 .008 0)"></svg:path><svg:path d="M9.5 11.5v-2h2v2" transform="matrix(.99904 0 0 1 .008 0)"></svg:path></svg:g></svg:g>`,
})
export class CatppuccinFolderDockerOpenIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
