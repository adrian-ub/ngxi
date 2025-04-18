import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixCloudDownloadIcon],svg[ix-cloud-download-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M298.667 42.667c58.91 0 106.667 47.756 106.667 106.667l-.033 2.683c36.814 9.449 64.033 42.87 64.033 82.65c0 45.7-35.925 83.01-81.075 85.229L384 320H277.333v76.486L320 353.83L350.17 384L256 478.17L161.83 384L192 353.83l42.667 42.656V320h-85.333l.008-.477c-59.807-5.385-106.675-55.647-106.675-116.856c0-64.801 52.532-117.333 117.333-117.333c16.653 0 32.496 3.469 46.845 9.724c18.55-31.362 52.73-52.391 91.822-52.391m0 42.667c-21.47 0-41.047 10.625-52.844 27.902l-2.254 3.543l-19.2 32.463l-34.574-15.072C180.5 130.118 170.438 128 160 128c-41.237 0-74.666 33.43-74.666 74.667c0 37.37 27.59 68.689 63.91 73.903l3.924.458l3.526.306l226.26.012l3.21-.065c22.613-1.112 40.503-19.849 40.503-42.614c0-18.434-11.805-34.533-28.74-40.354l-3.233-.969l-32.885-8.44l.858-35.57c0-35.347-28.654-64-64-64"></svg:path>`,
})
export class IxCloudDownloadIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
