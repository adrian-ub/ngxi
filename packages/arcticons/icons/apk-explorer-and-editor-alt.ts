import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsApkExplorerAndEditorAltIcon],svg[arcticons-apk-explorer-and-editor-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m21.41 21.365l-.544 2.793a8.5 8.5 0 0 0-2.49 1.429l-2.69-.925l-2.593 4.474l2.155 1.868q-.255 1.411 0 2.86l-2.155 1.867l2.593 4.472l2.687-.923a8.5 8.5 0 0 0 2.493 1.428l.544 2.792h5.18l.533-2.765c.965-.404 1.755-.846 2.501-1.456l2.69.925l2.59-4.473l-2.152-1.87a8 8 0 0 0 0-2.855l2.154-1.872l-2.592-4.472l-2.687.923c-.667-.546-1.546-1.095-2.493-1.427l-.544-2.792zm2.543 7.67c1.905 0 3.45 1.54 3.45 3.441s-1.544 3.442-3.45 3.443h0a3.447 3.447 0 0 1-3.452-3.442v0a3.447 3.447 0 0 1 3.452-3.442"></svg:path><svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M19.556 15.55a1.53 1.53 0 1 1 0-3.06a1.53 1.53 0 0 1 0 3.06m8.905 0a1.53 1.53 0 1 1 1.53-1.53h0a1.53 1.53 0 0 1-1.53 1.53"></svg:path><svg:path d="M24 6.13c6.024 0 10.907 4.883 10.907 10.907v1.556H13.094v-1.556C13.094 11.013 17.977 6.13 24 6.13M14.582 4.5l3.098 3.647M33.418 4.5L30.32 8.147"></svg:path></svg:g>`,
})
export class ArcticonsApkExplorerAndEditorAltIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
