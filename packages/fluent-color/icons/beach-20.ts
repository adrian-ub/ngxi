import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorBeach20Icon],svg[fluent-color-beach-20-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#fluentColorBeach200)" d="m13.12 8.062l-.87-.493l-2.68 4.724l.87.493z"></svg:path><svg:path fill="url(#fluentColorBeach201)" d="M4.857 16.42L7 17.5l2.386-.938L12 17.5l2.128-1.009l1.122.708a5.75 5.75 0 0 0-2.912-4.924a5.76 5.76 0 0 0-7.845 2.164a5.63 5.63 0 0 0-.739 3.023l1.103-1.052z"></svg:path><svg:path fill="url(#fluentColorBeach202)" d="M14.204 14.745c-.328 0-.61.21-.712.517v.001c-.559 1.703-2.73 1.676-3.283.085a.75.75 0 0 0-.71-.504a.74.74 0 0 0-.701.504v.001c-.545 1.59-2.716 1.627-3.284-.067a.74.74 0 0 0-.737-.507c-.346.002-.615.264-.7.557l-.002.01c-.154.635-.434.95-.735 1.129c-.32.195-.763.281-1.277.29a.746.746 0 0 0-.742.745c0 .405.34.744.744.744c.658 0 1.4-.112 2.047-.5q.438-.262.772-.681c1.263 1.301 3.4 1.29 4.626-.043c1.252 1.354 3.452 1.325 4.694-.061a3.7 3.7 0 0 0 2.75 1.246a.746.746 0 0 0 .744-.744a.75.75 0 0 0-.745-.745c-.878 0-1.746-.57-2.036-1.459a.75.75 0 0 0-.712-.518"></svg:path><svg:path fill="url(#fluentColorBeach203)" d="M16.504 10.372a.5.5 0 0 0 .68-.186l.178-.31c1.414-2.49.593-5.625-1.908-7.048S9.77 2.274 8.356 4.765l-.175.306a.5.5 0 0 0 .187.684z"></svg:path><svg:path fill="url(#fluentColorBeach204)" d="M15.659 2.958c-1.163.378-3.411 1.965-4.662 4.298l3.374 1.91c1.357-2.272 1.561-5.016 1.288-6.208"></svg:path><svg:defs><svg:lineargradient id="fluentColorBeach200" x1="10.291" x2="13.762" y1="11.467" y2="7.501" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#CD3E1D"></svg:stop><svg:stop offset="1" stop-color="#592A00"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorBeach201" x1="9.5" x2="9.5" y1="16.645" y2="11.526" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#FFC7A3"></svg:stop><svg:stop offset="1" stop-color="#FFA43D"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorBeach202" x1="9.518" x2="9.518" y1="17.5" y2="15" gradientUnits="userSpaceOnUse"><svg:stop offset=".061" stop-color="#0FAFFF"></svg:stop><svg:stop offset="1" stop-color="#0078D4"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorBeach203" x1="17.016" x2="9.602" y1="12.002" y2="2.116" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#AA1D2D"></svg:stop><svg:stop offset="1" stop-color="#FB6F7B"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorBeach204" x1="15.558" x2="11.383" y1="6.732" y2="5.341" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#FECBE6"></svg:stop><svg:stop offset="1" stop-color="#FDAFD9"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class FluentColorBeach20Icon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
