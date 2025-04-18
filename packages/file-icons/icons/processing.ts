import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fileIconsProcessingIcon],svg[file-icons-processing-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M159.15 76.96v364.333h42.95V330.322h90.047a56.33 56.33 0 0 0 56.49-56.49V133.514c0-31.323-25.167-56.555-56.49-56.555zm162.279 303.568c-18.605 0-33.687 15.082-33.687 33.686s15.082 33.687 33.687 33.687s33.686-15.082 33.686-33.687s-15.082-33.686-33.686-33.686m-9.977 18.527l25.913 15.548l-25.913 14.77zm84.023-18.527c-18.605 0-33.687 15.082-33.687 33.686s15.082 33.687 33.687 33.687s33.686-15.082 33.686-33.687s-15.082-33.686-33.686-33.686m-11.467 22.22h23.71v23.71h-23.71zM74.34.524h363.322C478.717.524 512 33.806 512 74.863v362.274c0 41.057-33.283 74.34-74.34 74.34H74.34c-41.057 0-74.34-33.283-74.34-74.34V74.863C0 33.806 33.283.523 74.34.523M202.1 118.29h91.084c6.96 0 12.567 5.607 12.567 12.568v144.01a12.54 12.54 0 0 1-12.567 12.568H202.1z"></svg:path>`,
})
export class FileIconsProcessingIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
