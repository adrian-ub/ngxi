import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilHourglassCircleFilledIcon],svg[pepicons-pencil-hourglass-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPencilHourglassCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:g fill="#000" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M15.96 6h-5.92c-.3 0-.45.227-.428.42c.114.993.328 2.133.686 2.862c.477.973 1.628 2.066 2.497 2.789a.31.31 0 0 0 .41 0c.87-.723 2.02-1.816 2.497-2.79c.358-.728.572-1.868.687-2.861c.022-.193-.129-.42-.428-.42m-5.92-1c-.844 0-1.519.696-1.422 1.534c.116 1.005.343 2.294.782 3.188c.581 1.184 1.888 2.396 2.756 3.118c.494.41 1.194.41 1.688 0c.868-.722 2.175-1.934 2.756-3.118c.439-.894.666-2.183.782-3.188C17.479 5.696 16.804 5 15.96 5z"></svg:path><svg:path d="M10.04 20h5.92c.3 0 .45-.227.428-.42c-.114-.993-.328-2.133-.686-2.861c-.477-.974-1.628-2.068-2.497-2.79a.31.31 0 0 0-.41 0c-.87.723-2.02 1.816-2.497 2.79c-.358.728-.572 1.868-.687 2.861c-.022.193.129.42.428.42m5.92 1c.844 0 1.519-.696 1.422-1.534c-.116-1.006-.343-2.294-.782-3.188c-.581-1.184-1.888-2.396-2.756-3.118a1.31 1.31 0 0 0-1.688 0c-.868.722-2.175 1.934-2.756 3.118c-.439.894-.666 2.183-.782 3.188c-.097.838.578 1.534 1.421 1.534zM7 5.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5"></svg:path><svg:path d="M7 20.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5"></svg:path></svg:g></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPencilHourglassCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPencilHourglassCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}
