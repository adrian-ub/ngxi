import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsFilePasteIcon],svg[hugeicons-file-paste-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M12.987 2h.273c3.267 0 4.9 0 6.035.798c.325.228.614.5.857.805c.85 1.066.85 2.6.85 5.67v2.545c0 2.963 0 4.445-.47 5.628c-.756 1.903-2.353 3.403-4.378 4.113c-1.259.441-2.836.441-5.99.441c-1.802 0-2.703 0-3.423-.252c-1.157-.406-2.07-1.263-2.5-2.35c-.27-.676-.27-1.523-.27-3.216V12"></svg:path><svg:path d="M21.001 12a3.333 3.333 0 0 1-3.333 3.333c-.666 0-1.451-.116-2.098.057a1.67 1.67 0 0 0-1.179 1.179c-.173.647-.057 1.432-.057 2.098A3.333 3.333 0 0 1 11.001 22m-.029-11.979c0-2.539.133-3.728-1.513-4.906c-.809-.58-3.496-.789-5.694-.583M5.503 2L3.146 4.11a.5.5 0 0 0-.003.706l2.36 2.231"></svg:path></svg:g>`,
})
export class HugeiconsFilePasteIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
