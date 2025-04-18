import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsTaskEdit01Icon],svg[hugeicons-task-edit-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6.513 16h4m-4-5h8m-4.5 11h1M7.51 22c-1.15-.025-1.924 0-2.923-.225c-1.05-.275-1.7-.925-1.924-2.225c-.225-.85-.153-4.626-.15-8.225c.002-2.793.02-5.326.25-5.85c.325-1.125 1.074-1.925 3.398-1.95m9.868 0c.8.075 2.89 0 3.298 2.3c.222 1.25.175 3.025.175 5.15M8.184 5.5c1.05.025 4.422 0 5.572 0c1.149 0 1.756-.946 1.749-1.825c-.008-.896-.8-1.595-1.575-1.675H8.16c-.925.05-1.55.8-1.65 1.55c-.1 1.025.65 1.9 1.674 1.95m10.094 8.875c-1.375 1.4-4.023 3.9-4.023 4.075c-.213.297-.4.9-.525 1.75c-.156.788-.344 1.475-.124 1.675s1.047.032 1.923-.15c.7-.075 1.35-.325 1.674-.575c.475-.42 3.698-3.675 4.073-4.1c.274-.375.3-1.075.06-1.5c-.135-.3-.985-1.1-1.26-1.325a1.52 1.52 0 0 0-1.799.15" color="currentColor"></svg:path>`,
})
export class HugeiconsTaskEdit01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
