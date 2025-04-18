import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flatUiFlagIcon],svg[flat-ui-flag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="50" cy="50" r="50" fill="#6BC9F2"></svg:circle><svg:clippath id="flatUiFlag0"><svg:circle cx="50" cy="50" r="50"></svg:circle></svg:clippath><svg:path fill="#fff" fill-rule="evenodd" d="M29 99a2.5 2.5 0 1 1-5 0V17.5a2.5 2.5 0 1 1 5 0z" clip-path="url(#flatUiFlag0)" clip-rule="evenodd"></svg:path><svg:path fill="#F29C1F" d="M100 73H60V25h40l-7 24z"></svg:path><svg:path fill="#E57E25" fill-rule="evenodd" d="M60 73V27l9-8v46z" clip-rule="evenodd"></svg:path><svg:path fill="#fff" d="m77.017 43.501l-10.791 3.625L65.933 58l-6.962-8.633L48 52.463l6.488-8.962L48 34.539l10.972 3.096L65.933 29l.293 10.875z" opacity=".6"></svg:path><svg:path fill="#F0C419" d="M29 17h40v48H29z"></svg:path><svg:path fill="#fff" d="m69 30.157l-6.028 7.478L52 34.539l6.488 8.962L52 52.463l10.972-3.097L69 56.843z"></svg:path>`,
})
export class FlatUiFlagIcon {
  readonly viewBox = input("0 0 100 100")
  readonly width = input("1em")
  readonly height = input("1em")
}
