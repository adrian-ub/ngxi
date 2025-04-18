import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsFolderShared01Icon],svg[hugeicons-folder-shared-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7 6.5h9.75c2.107 0 3.16 0 3.917.506a3 3 0 0 1 .827.827c.441.66.498 1.132.505 2.667M12 6.5l-.633-1.267c-.525-1.05-1.005-2.106-2.168-2.542C8.69 2.5 8.108 2.5 6.944 2.5c-1.816 0-2.724 0-3.406.38A3 3 0 0 0 2.38 4.038C2 4.72 2 5.628 2 7.444V10.5c0 4.714 0 7.071 1.464 8.535c1.358 1.358 2.98 1.458 7.036 1.465h.5m4.59-1.526c-.629.326-2.277.993-1.273 1.827c.49.408 1.037.699 1.723.699h3.92c.686 0 1.233-.291 1.723-.699c1.004-.834-.644-1.5-1.273-1.827c-1.474-.766-3.346-.766-4.82 0M20 14.438c0 1.07-.895 1.938-2 1.938s-2-.868-2-1.938s.895-1.938 2-1.938s2 .868 2 1.938" color="currentColor"></svg:path>`,
})
export class HugeiconsFolderShared01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
