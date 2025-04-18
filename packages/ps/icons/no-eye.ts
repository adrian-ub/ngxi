import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[psNoEyeIcon],svg[ps-no-eye-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m411 113l-21 36q55 32 83 75q-13 20-33 39.5t-64 42t-95 25.5l-26 42h9q162 0 254-138q6-11 0-22q-3-6-12.5-19.5t-36-38.5t-58.5-42m-85 51l19-34l21-38l43-71l-36-21l-49 81q-23-6-54-6h-15Q100 79 10 213q-6 11 0 22q2 3 6.5 10.5t18 23T64 299t41.5 31t53.5 26l-42 71l36 21l49-81l24-38l25-41l26-43zm-94 73l-21 36l-28 45q-81-28-128-94q50-64 113-87q43-20 96-20q26 0 38 2l-4 7z"></svg:path>`,
})
export class PsNoEyeIcon {
  readonly viewBox = input("0 0 528 480")
  readonly width = input("1.11em")
  readonly height = input("1em")
}
