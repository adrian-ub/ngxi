import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsAiChemistry01Icon],svg[hugeicons-ai-chemistry-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M14.496 3.525h-.25v7.25c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-1.25h-6.5v9.25c0 1.79 1.46 3.25 3.25 3.25s3.25-1.46 3.25-3.25c0-.41.34-.75.75-.75s.75.34.75.75c0 2.62-2.13 4.75-4.75 4.75s-4.75-2.13-4.75-4.75V3.525h-.25c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h10c.41 0 .75.34.75.75s-.34.75-.75.75m-8.25 4.5h6.5v-4.5h-6.5zm9.05 10.51c.11.29.39.49.7.49v.01c.31 0 .59-.2.7-.49l.26-.7c.32-.86.46-1.22.67-1.43s.57-.35 1.44-.67l.7-.26c.29-.11.49-.39.49-.7s-.2-.59-.49-.7l-.7-.26c-.86-.32-1.22-.46-1.43-.67s-.35-.57-.67-1.44l-.26-.7a.76.76 0 0 0-.7-.49c-.31 0-.59.2-.7.49l-.26.7c-.32.86-.46 1.22-.67 1.43s-.57.35-1.44.67l-.7.26c-.29.11-.49.39-.49.7s.2.59.49.7l.7.26c.86.32 1.22.46 1.43.67c.21.2.35.56.67 1.43zm.13-3.18c-.24-.24-.5-.41-.85-.57c.34-.16.61-.33.85-.57s.41-.51.57-.85c.16.34.33.61.57.85s.51.41.85.57c-.35.16-.61.33-.85.57s-.41.51-.57.85c-.16-.35-.33-.61-.57-.85" color="currentColor"></svg:path>`,
})
export class HugeiconsAiChemistry01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
