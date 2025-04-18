import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsCoronaScannerIcon],svg[arcticons-corona-scanner-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.5 20.473V9.5h-29v10.973a3.527 3.527 0 0 1 0 7.054V38.5h29V27.527a3.527 3.527 0 0 1 0-7.054"></svg:path><svg:rect width="7.054" height="7.054" x="14.986" y="14.986" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx=".784"></svg:rect><svg:rect width="7.054" height="7.054" x="14.986" y="25.959" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx=".784"></svg:rect><svg:rect width="7.054" height="7.054" x="25.959" y="14.986" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx=".784"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M28.311 28.311h2.351v2.351h-2.351zm2.351-2.352h2.351v2.351h-2.351zm0 4.703h2.351v2.351h-2.351zm-4.703-4.703h2.351v2.351h-2.351zm0 4.703h2.351v2.351h-2.351zM12 5.5H5.5V12m37 0V5.5H36m0 37h6.5V36m-37 0v6.5H12"></svg:path>`,
})
export class ArcticonsCoronaScannerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
