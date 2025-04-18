import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsFolderViewIcon],svg[hugeicons-folder-view-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7 6.504h9.75c2.107 0 3.16 0 3.917.507c.327.219.608.5.827.828C22 8.597 22 9.651 22 11.76c0 .445.002.35 0 .74M12 6.504l-.633-1.268c-.525-1.05-1.005-2.108-2.168-2.545C8.69 2.5 8.108 2.5 6.944 2.5c-1.816 0-2.724 0-3.406.38A3 3 0 0 0 2.38 4.04C2 4.722 2 5.63 2 7.45v3.059c0 4.72 0 7.079 1.464 8.545C4.578 20.169 6.21 20.436 9 20.5m12.46-3.485c.36.416.54.624.54.985s-.18.57-.54.985C20.56 20.02 18.937 21.5 17 21.5s-3.561-1.48-4.46-2.515c-.36-.416-.54-.623-.54-.985c0-.361.18-.57.54-.985c.9-1.035 2.523-2.515 4.46-2.515s3.561 1.48 4.46 2.515M17 18h.009" color="currentColor"></svg:path>`,
})
export class HugeiconsFolderViewIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
