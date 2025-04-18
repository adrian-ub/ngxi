import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsMixerIcon],svg[hugeicons-mixer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M6 8.5H4.75c-1.173 0-1.76 0-2.163-.31a1.5 1.5 0 0 1-.277-.277C2 7.51 2 6.923 2 5.75s0-1.76.31-2.163a1.5 1.5 0 0 1 .277-.277C2.99 3 3.577 3 4.75 3H17c1.414 0 2.121 0 2.56.44C20 3.878 20 4.585 20 6v2.372c0 1.056 0 1.584-.254 1.963a1.5 1.5 0 0 1-.41.411c-.38.254-.908.254-1.964.254h-.577c-.424 0-.635 0-.826-.037a2 2 0 0 1-1.294-.876c-.106-.164-.184-.36-.342-.754a2.3 2.3 0 0 0-.17-.376a1 1 0 0 0-.647-.438c-.096-.019-.202-.019-.414-.019H12c-.943 0-1.414 0-1.707.293S10 9.557 10 10.5V17a4 4 0 0 0 4 4M4 8.5V21m-2 0h20"></svg:path><svg:path d="M19.981 15H15.02c-1.273 0-.993 1.663-.993 2.5c0 1.933 1.555 3.5 3.474 3.5s3.474-1.567 3.474-3.5c0-.837.28-2.5-.993-2.5M17.5 11v4m-.492-9h-.009"></svg:path></svg:g>`,
})
export class HugeiconsMixerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
