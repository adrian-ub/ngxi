import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsPathfinderMinusFrontIcon],svg[hugeicons-pathfinder-minus-front-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M9 15h-.5c-2.816 0-4.225 0-5.182-.764a3.5 3.5 0 0 1-.554-.554C2 12.725 2 11.316 2 8.5s0-4.225.764-5.182a3.5 3.5 0 0 1 .554-.554C4.275 2 5.684 2 8.5 2s4.225 0 5.182.764q.309.245.554.554C15 4.275 15 5.684 15 8.5V9"></svg:path><svg:path d="M9 15c.003-2.487.046-3.783.763-4.682a3.5 3.5 0 0 1 .555-.555c.899-.717 2.195-.76 4.682-.763m7 5.5v2M16.5 22h-2M22 12c-.066-.88-.222-1.475-.595-1.942a3 3 0 0 0-.466-.465C20.472 9.222 19.878 9.066 19 9h-.5M22 19c-.066.878-.222 1.472-.593 1.939a3 3 0 0 1-.465.466c-.467.373-1.062.53-1.942.595m-7 0c-.878-.066-1.472-.222-1.938-.593a3 3 0 0 1-.467-.465C9.222 20.475 9.065 19.88 9 19v-.5"></svg:path></svg:g>`,
})
export class HugeiconsPathfinderMinusFrontIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
