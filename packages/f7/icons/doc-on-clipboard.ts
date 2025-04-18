import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[f7DocOnClipboardIcon],svg[f7-doc-on-clipboard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.505 56h21.4c4.561 0 6.721-2.314 6.721-6.92v-4.077h4.298c4.54 0 6.81-2.314 6.81-6.92V6.92c0-4.606-2.27-6.92-6.81-6.92h-21.29c-4.54 0-6.831 2.314-6.831 6.92v4.077h-4.298c-4.54 0-6.832 2.314-6.832 6.92V49.08c0 4.628 2.292 6.92 6.832 6.92M27.902 7.78c-.97 0-1.41-.64-1.41-1.3v-.464c0-.683.44-1.3 1.41-1.3h10.755c.947 0 1.41.617 1.41 1.3v.463c0 .662-.463 1.3-1.41 1.3Zm-16.22 44.672c-2.27 0-3.46-1.234-3.46-3.438V17.96c0-2.16 1.19-3.415 3.481-3.415h7.648v12.782c0 2.777 1.41 4.143 4.143 4.143h12.584v17.543c0 2.204-1.19 3.438-3.482 3.438Zm12.23-24.309c-.88 0-1.233-.352-1.233-1.212V15.23l12.716 12.914Z"></svg:path>`,
})
export class F7DocOnClipboardIcon {
  readonly viewBox = input("0 0 56 56")
  readonly width = input("1em")
  readonly height = input("1em")
}
