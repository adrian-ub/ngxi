import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineiconsSun1Icon],svg[lineicons-sun-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.023 2.5a.75.75 0 0 1 .75.75v1.5a.75.75 0 1 1-1.5 0v-1.5a.75.75 0 0 1 .75-.75"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M6.523 12.5a5.5 5.5 0 1 1 11 0a5.5 5.5 0 0 1-11 0m5.5-4a4 4 0 1 0 0 8a4 4 0 0 0 0-8" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M19.095 6.491a.75.75 0 1 0-1.06-1.06l-1.061 1.06a.75.75 0 0 0 1.06 1.06zm2.928 6.009a.75.75 0 0 1-.75.75h-1.5a.75.75 0 0 1 0-1.5h1.5a.75.75 0 0 1 .75.75m-3.989 7.07a.75.75 0 0 0 1.06-1.061l-1.06-1.06a.75.75 0 1 0-1.06 1.06zm-6.011-.07a.75.75 0 0 1 .75.75v1.5a.75.75 0 1 1-1.5 0v-1.5a.75.75 0 0 1 .75-.75m-4.95-.985a.75.75 0 0 0-1.06-1.061l-1.061 1.06a.75.75 0 0 0 1.06 1.061zM5.023 12.5a.75.75 0 0 1-.75.75h-1.5a.75.75 0 0 1 0-1.5h1.5a.75.75 0 0 1 .75.75m.99-4.954a.75.75 0 0 0 1.06-1.06l-1.06-1.061a.75.75 0 0 0-1.061 1.06z"></svg:path>`,
})
export class LineiconsSun1Icon {
  readonly viewBox = input("0 0 25 25")
  readonly width = input("1em")
  readonly height = input("1em")
}
