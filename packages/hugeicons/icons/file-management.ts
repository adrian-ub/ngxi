import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsFileManagementIcon],svg[hugeicons-file-management-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M7 9.714V11m0-1.286a3.36 3.36 0 0 1-2.774-1.43M7 9.713a3.36 3.36 0 0 0 2.774-1.43M7 3.285c1.157 0 2.176.568 2.774 1.43M7 3.287a3.36 3.36 0 0 0-2.774 1.43M7 3.287V2m4 1.929l-1.226.788M3 9.07l1.226-.788M3 3.93l1.226.788M11 9.07l-1.226-.788m0-3.566a3.12 3.12 0 0 1 0 3.566M4.226 4.717a3.12 3.12 0 0 0 0 3.566"></svg:path><svg:path d="M13 2h.273c3.26 0 4.892 0 6.024.798c.324.228.612.5.855.805c.848 1.066.848 2.6.848 5.67v2.545c0 2.963 0 4.445-.469 5.628c-.754 1.903-2.348 3.403-4.37 4.113c-1.257.441-2.83.441-5.98.441c-1.798 0-2.698 0-3.416-.252c-1.155-.406-2.066-1.263-2.497-2.35C4 18.722 4 17.875 4 16.182V13"></svg:path><svg:path d="M21 12a3.333 3.333 0 0 1-3.333 3.333c-.666 0-1.451-.116-2.098.057a1.67 1.67 0 0 0-1.179 1.179c-.173.647-.057 1.432-.057 2.098A3.333 3.333 0 0 1 11 22"></svg:path></svg:g>`,
})
export class HugeiconsFileManagementIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
