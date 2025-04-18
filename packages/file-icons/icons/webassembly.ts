import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fileIconsWebassemblyIcon],svg[file-icons-webassembly-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m394.252 320.607l16.984 66.557h-46.052l14.796-66.557zM314.612 0H512v512H0V0h197.388c0 81.883 117.224 81.883 117.224 0M152.667 275.934h-33.92l39.059 181.26h34.348l27.094-123.361l25.191 123.361h33.683l43.198-181.26h-33.255l-26.69 124.931l-25.356-124.931h-31.733l-28.188 123.409zm313.756 181.26l-53.331-181.26H359.57l-43.864 181.26h34.111l8.897-40.344h60.943l11.56 40.344z"></svg:path>`,
})
export class FileIconsWebassemblyIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
