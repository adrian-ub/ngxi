import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsTextClearIcon],svg[hugeicons-text-clear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M11 20.001H5M12 4L8 20m4-16c1.387 0 3.17.03 4.588.176c.6.062.9.093 1.166.202a2.05 2.05 0 0 1 1.165 1.299C19 5.954 19 6.27 19 6.902M12 4c-1.387 0-3.17.03-4.588.176c-.6.062-.9.093-1.166.202A2.05 2.05 0 0 0 5.08 5.677C5 5.954 5 6.27 5 6.902M14 15l5 5m-5 0l5-5" color="currentColor"></svg:path>`,
})
export class HugeiconsTextClearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
