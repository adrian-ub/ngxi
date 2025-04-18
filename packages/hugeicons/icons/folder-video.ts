import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsFolderVideoIcon],svg[hugeicons-folder-video-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7 6.504h9.75c2.107 0 3.16 0 3.917.507c.327.219.608.5.827.828C22 8.597 22 9.891 22 12M12 6.504l-.633-1.268c-.525-1.05-1.005-2.108-2.168-2.545C8.69 2.5 8.108 2.5 6.944 2.5c-1.816 0-2.724 0-3.406.38A3 3 0 0 0 2.38 4.04C2 4.722 2 5.63 2 7.45v3.059c0 4.72 0 7.079 1.464 8.545C4.578 20.169 6.21 20.436 9 20.5m10.5-3.854l.063-.045c1.058-.764 1.587-1.146 2.012-.961s.425.795.425 2.018v.684c0 1.223 0 1.834-.425 2.018c-.425.185-.954-.197-2.012-.96l-.063-.046m-4 2.146h.5c1.65 0 2.475 0 2.987-.448c.513-.449.513-1.17.513-2.614v-.875c0-1.444 0-2.166-.513-2.614C18.475 14.5 17.65 14.5 16 14.5h-.5c-1.65 0-2.475 0-2.987.448c-.513.449-.513 1.17-.513 2.614v.875c0 1.444 0 2.166.513 2.614c.512.449 1.337.449 2.987.449" color="currentColor"></svg:path>`,
})
export class HugeiconsFolderVideoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
