import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsSugarAltNegativeIcon],svg[healthicons-sugar-alt-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsSugarAltNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M0 0h48v48H0zm43.993 17.883a1 1 0 0 1-.876 1.11c-8.512 1.002-14.91 1.974-20.233 8.632c-1.4 1.75-2.465 3.033-3.346 3.958c-.88.924-1.632 1.553-2.422 1.942c-.814.4-1.587.506-2.423.523a27 27 0 0 1-1.313-.019h-.013A51 51 0 0 0 11.795 34c-2.897 0-4.857-1.793-6.034-3.412a13 13 0 0 1-1.704-3.254l-.006-.019l-.002-.006v-.002S4.047 27.305 5 27l-.952.305A1 1 0 0 1 5 26h16.627c5.826-7.017 12.915-8.012 21.256-8.993a1 1 0 0 1 1.11.876M5 22h2v2H5zm10 0h-2v2h2zm-5-.414L11.414 23L10 24.414L8.586 23zM19.414 23L18 21.586L16.586 23L18 24.414zM11 18h2v2h-2zm-1.586 1L8 17.586L6.586 19L8 20.414zM12 13.586L13.414 15L12 16.414L10.586 15zM17.414 19L16 17.586L14.586 19L16 20.414z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsSugarAltNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsSugarAltNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
