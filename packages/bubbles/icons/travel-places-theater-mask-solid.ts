import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bubblesTravelPlacesTheaterMaskSolidIcon],svg[bubbles-travel-places-theater-mask-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M24 9.412a1.25 1.25 0 0 0-.411-1.286a19.4 19.4 0 0 0-6.515-3.823V2.709a.88.88 0 0 0-.48-.772a17.62 17.62 0 0 0-16.08 0A.87.87 0 0 0 0 2.71v4.697a11.1 11.1 0 0 0 4.526 8.948a12.5 12.5 0 0 0 4.045 6.343A5.35 5.35 0 0 0 12 24q.59-.006 1.166-.137a12.74 12.74 0 0 0 9.565-9.411zm-3.789 4.405a10.29 10.29 0 0 1-7.645 7.543a2.76 2.76 0 0 1-2.4-.6a10.29 10.29 0 0 1-3.189-10.286l1.012-3.96a.39.39 0 0 1 .342-.308a15.43 15.43 0 0 1 12.72 3.188a.43.43 0 0 1 .155.446z"></svg:path><svg:path d="M12 12.652a1.3 1.3 0 0 1-1.234-.909a.45.45 0 0 0-.343-.326a.46.46 0 0 0-.463.12a1.286 1.286 0 0 1-1.8-1.817a3.051 3.051 0 0 1 5.143 1.269a1.303 1.303 0 0 1-.857 1.611zm6.857 1.714a1.3 1.3 0 0 1-1.234-.909a.48.48 0 0 0-.789-.206a1.286 1.286 0 0 1-1.817 0a1.27 1.27 0 0 1 0-1.817a3.052 3.052 0 0 1 5.143 1.269a1.303 1.303 0 0 1-.857 1.611q-.22.06-.446.052"></svg:path></svg:g>`,
})
export class BubblesTravelPlacesTheaterMaskSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
