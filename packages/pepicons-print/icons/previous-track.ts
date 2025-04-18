import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPrintPreviousTrackIcon],svg[pepicons-print-previous-track-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:g opacity=".2"><svg:path d="M11.86 10.747a1 1 0 0 0 0 1.505l5.482 4.797c.646.566 1.658.106 1.658-.753V6.704c0-.86-1.012-1.319-1.658-.753z"></svg:path><svg:path fill-rule="evenodd" d="m11.53 12.629l5.482 4.796c.97.849 2.488.16 2.488-1.129V6.704c0-1.289-1.518-1.978-2.488-1.13l-5.481 4.797a1.5 1.5 0 0 0 0 2.258m.33-.377a1 1 0 0 1 0-1.505l5.482-4.796c.646-.566 1.658-.106 1.658.753v9.592c0 .86-1.012 1.319-1.658.753z" clip-rule="evenodd"></svg:path><svg:path d="M4.86 10.747a1 1 0 0 0 0 1.505l5.482 4.797c.646.566 1.658.106 1.658-.753V6.704c0-.86-1.012-1.319-1.658-.753z"></svg:path><svg:path fill-rule="evenodd" d="m4.53 12.629l5.482 4.796c.97.849 2.488.16 2.488-1.129V6.704c0-1.289-1.518-1.978-2.488-1.13l-5.481 4.797a1.5 1.5 0 0 0 0 2.258m.33-.377a1 1 0 0 1 0-1.505l5.482-4.796c.646-.566 1.658-.106 1.658.753v9.592c0 .86-1.012 1.319-1.658.753z" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M4.5 5.5a1 1 0 0 0-1 1v10a1 1 0 1 0 2 0v-10a1 1 0 0 0-1-1" clip-rule="evenodd"></svg:path></svg:g><svg:path fill-rule="evenodd" d="M16.5 14.796L11.019 10L16.5 5.204zm-6.14-4.043a1 1 0 0 1 0-1.506l5.482-4.796c.646-.566 1.658-.106 1.658.753v9.592c0 .86-1.012 1.319-1.658.753z" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M9.5 14.796L4.019 10L9.5 5.204zm-6.14-4.043a1 1 0 0 1 0-1.506l5.482-4.796c.646-.566 1.658-.106 1.658.753v9.592c0 .86-1.012 1.319-1.658.753z" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M3 4.5a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPrintPreviousTrackIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
