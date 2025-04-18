import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineProgrammingBrowserAddAppCodeAppsAddProgrammingWindowPlusIcon],svg[streamline-programming-browser-add-app-code-apps-add-programming-window-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:rect width="13" height="13" x=".5" y=".5" rx="1"></svg:rect><svg:path d="M.5 3.5h13m-4 5h-5M7 6v5"></svg:path></svg:g>`,
})
export class StreamlineProgrammingBrowserAddAppCodeAppsAddProgrammingWindowPlusIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
