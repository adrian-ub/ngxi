import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bubblesPluginLeebrarySolidIcon],svg[bubbles-plugin-leebrary-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5.031 9.25a1.3 1.3 0 0 0-.5.094a1.2 1.2 0 0 0-.406.281a1.3 1.3 0 0 0-.281.406a1.2 1.2 0 0 0-.094.469v10.281c0 .326.116.642.344.875c.228.234.549.367.875.375c2.354.057 4.172.511 5.5 1.25c.48.268.837.568 1.125.844c.16.153.254.24.281.281a.74.74 0 0 0 1.031.219c.24-.16.34-.347.5-.5a5.4 5.4 0 0 1 1.125-.844c1.328-.739 3.146-1.193 5.5-1.25c.327-.008.647-.141.875-.375s.344-.549.344-.875V10.5a1.2 1.2 0 0 0-.094-.469a1.2 1.2 0 0 0-.281-.406a1.2 1.2 0 0 0-.406-.281a1.3 1.3 0 0 0-.5-.094c-2.579.065-4.617.611-6.157 1.469c-.7.39-.966.743-1.312 1.094c-.335-.352-.611-.704-1.312-1.094C9.648 9.86 7.61 9.315 5.03 9.25M12.094.375l-11 7a.74.74 0 0 0-.219 1.031a.74.74 0 0 0 1.031.219L12.5 1.875l10.594 6.75c.35.222.809.13 1.031-.219a.74.74 0 0 0-.219-1.031l-11-7a.76.76 0 0 0-.812 0m5.406.875a.75.75 0 0 0 0 1.5h2.25V4a.75.75 0 0 0 1.5 0V2a.75.75 0 0 0-.75-.75z"></svg:path>`,
})
export class BubblesPluginLeebrarySolidIcon {
  readonly viewBox = input("0 0 25 25")
  readonly width = input("1em")
  readonly height = input("1em")
}
