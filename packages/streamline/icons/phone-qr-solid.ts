import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlinePhoneQrSolidIcon],svg[streamline-phone-qr-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4 1.5a.25.25 0 0 0-.25.25v10.489a.5.5 0 0 0 .123.148a.8.8 0 0 0 .179.113H10.5a.25.25 0 0 0 .25-.25V1.75a.25.25 0 0 0-.25-.25zm-1.75.25C2.25.784 3.034 0 4 0h6.5c.966 0 1.75.784 1.75 1.75v10.5A1.75 1.75 0 0 1 10.5 14H4a1.4 1.4 0 0 1-.602-.15c-.17-.08-.342-.19-.498-.322c-.289-.246-.65-.686-.65-1.278zm2.325 1.606c0-.345.28-.625.625-.625h.82a.625.625 0 1 1 0 1.25h-.195v.605a.625.625 0 0 1-1.25 0zM9.3 6.422c.346 0 .625.28.625.625v.82c0 .345-.28.625-.625.625h-.82a.625.625 0 1 1 0-1.25h.195v-.195c0-.345.28-.625.625-.625m-4.1-.265a.625.625 0 0 0 0 1.25h.46v.46a.625.625 0 1 0 1.25 0V6.782a.625.625 0 0 0-.626-.625zm2.245-2.8c0-.346.28-.626.625-.626H9.3c.346 0 .625.28.625.625v1.76a.625.625 0 1 1-1.25 0V3.981H8.07a.625.625 0 0 1-.625-.625ZM7.206 4.68a.625.625 0 1 0-.559 1.118l.646.323a.625.625 0 1 0 .56-1.118zM6.75 9.75a.75.75 0 0 0 0 1.5h1a.75.75 0 0 0 0-1.5z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlinePhoneQrSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
