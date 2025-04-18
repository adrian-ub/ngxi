import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsFileBookmarkIcon],svg[hugeicons-file-bookmark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M3 5.748c0-1.767 0-2.65.513-3.2C4.025 2 4.85 2 6.5 2s2.475 0 2.987.549C10 3.098 10 3.98 10 5.748v1.794c0 1.326 0 1.989-.335 2.27a.9.9 0 0 1-.313.168c-.411.118-.907-.28-1.897-1.076c-.413-.33-.619-.496-.853-.526a.8.8 0 0 0-.204 0c-.234.03-.44.195-.853.526c-.99.796-1.486 1.194-1.897 1.076a.9.9 0 0 1-.313-.168C3 9.53 3 8.868 3 7.542z"></svg:path><svg:path d="M13 2h.273c3.26 0 4.892 0 6.024.798c.324.228.612.5.855.805c.848 1.066.848 2.6.848 5.67v2.545c0 2.963 0 4.445-.469 5.628c-.754 1.903-2.348 3.403-4.37 4.113c-1.257.441-2.83.441-5.98.441c-1.798 0-2.698 0-3.416-.252c-1.155-.406-2.066-1.263-2.497-2.35C4 18.722 4 17.875 4 16.182V13"></svg:path><svg:path d="M21 12a3.333 3.333 0 0 1-3.333 3.333c-.666 0-1.451-.116-2.098.057a1.67 1.67 0 0 0-1.179 1.179c-.173.647-.057 1.432-.057 2.098A3.333 3.333 0 0 1 11 22"></svg:path></svg:g>`,
})
export class HugeiconsFileBookmarkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
