import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixCloudCancelledIcon],svg[ix-cloud-cancelled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m100.183 69.676l81.6 81.674l.127.024l49.642 49.712l-.021.024l140.074 140.203l.086.018l38.53 38.563l-.045.011l31.59 31.608l-30.17 30.17l-57.655-57.703l-204.608.018l.009-.478c-59.807-5.385-106.675-55.647-106.675-116.855c0-52.549 34.544-97.029 82.162-111.971L70.013 99.846zm198.484 36.989c58.91 0 106.666 47.756 106.666 106.666l-.033 2.684c36.815 9.449 64.033 42.871 64.033 82.65c0 22.198-8.475 42.416-22.367 57.595l-30.24-30.22a42.54 42.54 0 0 0 9.941-27.375c0-18.434-11.805-34.534-28.74-40.354l-3.234-.969l-32.884-8.44l.858-35.571c0-35.346-28.654-64-64-64c-16.009 0-30.965 5.908-42.429 16.075l-30.205-30.183c19.035-17.72 44.569-28.558 72.634-28.558M160 191.998c-41.237 0-74.667 33.429-74.667 74.667c0 37.369 27.592 68.688 63.911 73.903l3.924.458l3.525.305l154.603-.018l-149.132-149.284a74 74 0 0 0-2.164-.031" clip-rule="evenodd"></svg:path>`,
})
export class IxCloudCancelledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
