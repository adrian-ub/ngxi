import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconamoonStarOffThinIcon],svg[iconamoon-star-off-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="m12 2l.454-.21a.5.5 0 0 0-.908 0zm3.104 6.728l-.454.21a.5.5 0 0 0 .395.287zm7.358.873l.34.367a.5.5 0 0 0-.282-.864zm-3.996 12.298l-.245.436a.5.5 0 0 0 .735-.533zM12 18.28l.244-.436a.5.5 0 0 0-.488 0zM5.534 21.9l-.49-.098a.5.5 0 0 0 .735.534zm1.444-7.268l.49.097a.5.5 0 0 0-.15-.464zM1.538 9.6l-.058-.497a.5.5 0 0 0-.281.864zm7.267-.358a.5.5 0 0 0-.118-.993zm9.3 8.274a.5.5 0 0 0-.981.195zm-7.93-12.754a.5.5 0 1 0 .908.419zm8.205 7.932a.5.5 0 0 0 .678.734zM11.546 2.209l3.104 6.729l.907-.419l-3.103-6.728zm3.499 7.016l7.358.872l.117-.993l-7.358-.872zm3.665 12.238l-6.466-3.62l-.488.873l6.465 3.62zm-6.954-3.62l-6.466 3.62l.489.872l6.465-3.619zm-5.731 4.154l1.444-7.268l-.981-.195l-1.444 7.268zm1.293-7.732l-5.44-5.031l-.68.734l5.441 5.03zm-5.72-4.168l7.207-.854l-.118-.993l-7.207.854zm15.526 7.615l.851 4.285l.981-.195l-.851-4.285zm-6.04-12.53l1.37-2.973l-.908-.418l-1.37 2.972zm11.038 4.052l-3.742 3.46l.678.735l3.743-3.461z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" d="m4 4l16 16"></svg:path></svg:g>`,
})
export class IconamoonStarOffThinIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
