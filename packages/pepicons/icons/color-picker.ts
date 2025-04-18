import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsColorPickerIcon],svg[pepicons-color-picker-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M7.536 15.236c-1.56.617-4.257 2.372-4.728 1.9c-.306-.305.323-1.545.972-2.805h4.66l-.905.905Z" clip-rule="evenodd"></svg:path><svg:path d="M15.803 5.555a1 1 0 1 1 1.415 1.414l-8.975 8.975a1 1 0 0 1-.34.222c-.396.157-.8.355-1.753.846c-.47.242-.679.348-.933.474c-1.748.861-2.405 1.068-3.116.357c-.71-.71-.504-1.367.351-3.105c.127-.257.234-.468.48-.945c.491-.953.689-1.356.845-1.753A1 1 0 0 1 4 11.701l8.975-8.975a1 1 0 1 1 1.414 1.414l-8.832 8.832c-.174.415-.393.857-.847 1.737a52.348 52.348 0 0 0-.535 1.06l.158-.077c.24-.119.441-.221.902-.458c.88-.454 1.321-.673 1.736-.847l8.832-8.832Z"></svg:path><svg:path d="M14.39 4.14a1 1 0 1 1-1.415-1.414a3 3 0 1 1 4.243 4.243a1 1 0 1 1-1.415-1.414A1 1 0 0 0 14.39 4.14Zm-4.953.705a1 1 0 0 1 1.415-1.414l5.656 5.657a1 1 0 0 1-1.414 1.414L9.437 4.845Z"></svg:path></svg:g>`,
})
export class PepiconsColorPickerIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
