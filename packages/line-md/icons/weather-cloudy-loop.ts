import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineMdWeatherCloudyLoopIcon],svg[line-md-weather-cloudy-loop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="lineMdWeatherCloudyLoop0"><svg:g fill="#fff"><svg:circle cx="12" cy="11" r="6"><svg:animate attributeName="cx" dur="30s" repeatCount="indefinite" values="12;11;12;13;12"></svg:animate></svg:circle><svg:rect width="10" height="7" x="8" y="12"></svg:rect><svg:rect width="16" height="10" x="1" y="9" rx="5"><svg:animate attributeName="x" dur="19s" repeatCount="indefinite" values="1;0;1;2;1"></svg:animate></svg:rect><svg:rect width="17" height="8" x="6" y="11" rx="4"><svg:animate attributeName="x" dur="23s" repeatCount="indefinite" values="6;5;6;7;6"></svg:animate></svg:rect></svg:g><svg:circle cx="12" cy="11" r="4"><svg:animate attributeName="cx" dur="30s" repeatCount="indefinite" values="12;11;12;13;12"></svg:animate></svg:circle><svg:rect width="8" height="6" x="8" y="11"><svg:animate attributeName="x" dur="30s" repeatCount="indefinite" values="8;7;8;9;8"></svg:animate></svg:rect><svg:rect width="12" height="6" x="3" y="11" rx="3"><svg:animate attributeName="x" dur="19s" repeatCount="indefinite" values="3;2;3;4;3"></svg:animate></svg:rect><svg:rect width="13" height="4" x="8" y="13" rx="2"><svg:animate attributeName="x" dur="23s" repeatCount="indefinite" values="8;7;8;9;8"></svg:animate></svg:rect></svg:mask><svg:rect width="24" height="24" fill="currentColor" mask="url(#lineMdWeatherCloudyLoop0)"></svg:rect>`,
})
export class LineMdWeatherCloudyLoopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
