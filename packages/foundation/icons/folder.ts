import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[foundationFolderIcon],svg[foundation-folder-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M86.016 24.09H49.314c-1.979-2.369-4.013-4.865-4.541-5.623a3.18 3.18 0 0 0-2.875-1.808H27.367c-.964 0-1.875.436-2.479 1.185l-5.021 6.247h-5.884a5.49 5.49 0 0 0-5.484 5.484V77.86a5.49 5.49 0 0 0 5.484 5.482h72.032a5.49 5.49 0 0 0 5.484-5.482V29.574a5.49 5.49 0 0 0-5.483-5.484"></svg:path>`,
})
export class FoundationFolderIcon {
  readonly viewBox = input("0 0 100 100")
  readonly width = input("1em")
  readonly height = input("1em")
}
