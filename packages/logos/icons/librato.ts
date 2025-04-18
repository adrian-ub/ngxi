import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[logosLibratoIcon],svg[logos-librato-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M236.651 193.181c10.686 0 19.349-8.663 19.349-19.349s-8.663-19.349-19.349-19.349s-19.349 8.663-19.349 19.35c0 10.685 8.663 19.348 19.35 19.348zM99.292 124.795c-14.424 0-26.16-11.05-26.16-24.705c0-13.61 11.736-24.655 26.16-24.655c14.477 0 26.187 11.044 26.187 24.655c0 13.655-11.71 24.705-26.187 24.705zM43.186.001C19.436.001 0 17.667 0 40.068v151.625h155.432c23.743 0 41.033-23.335 41.033-45.73V0H43.19l-.003.001z" fill="#0F80AA"></svg:path>`,
})
export class LogosLibratoIcon {
  readonly viewBox = input("0 0 256 194")
  readonly width = input("1.32em")
  readonly height = input("1em")
}
