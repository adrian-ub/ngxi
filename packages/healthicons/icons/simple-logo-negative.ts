import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsSimpleLogoNegativeIcon],svg[healthicons-simple-logo-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsSimpleLogoNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M48 0H0v48h48zM24.544 44c-7.983 0-14.455-6.512-14.455-14.545C10.089 18.545 24.544 4 24.544 4S39 18.546 39 29.455C39 37.488 32.528 44 24.544 44m8.302-10.756a1.755 1.755 0 0 0-2.47.325l-.244.317c-2.821 3.692-8.354 3.692-11.176 0l-.243-.317a1.755 1.755 0 0 0-2.47-.325a1.78 1.78 0 0 0-.324 2.486l.243.317c4.233 5.538 12.532 5.538 16.764 0l.243-.317a1.78 1.78 0 0 0-.323-2.486" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsSimpleLogoNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsSimpleLogoNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
