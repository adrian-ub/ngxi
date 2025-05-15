import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopAirplaneIcon],svg[pepicons-pop-airplane-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m10.755 12.996l1.859-1.704l1.472 5.269a1 1 0 0 0 1.643.464c1.579-1.465 2.44-2.82 2.519-4.13c.056-.941-.382-2.74-1.319-5.56l.23-.211c2.249-2.248 2.899-4.208 1.433-5.674c-1.465-1.465-3.426-.816-5.644 1.4l-.24.262c-2.821-.936-4.62-1.374-5.561-1.318c-1.311.078-2.665.94-4.13 2.519a1 1 0 0 0 .464 1.643l5.27 1.472l-1.704 1.859c-1.72-.236-2.798-.338-3.32-.307c-.937.056-1.859.643-2.834 1.694a1 1 0 0 0 .464 1.643l4.653 1.3l.415.414l1.3 4.654a1 1 0 0 0 1.643.464c1.05-.975 1.638-1.897 1.694-2.834c.03-.522-.072-1.6-.307-3.319m-1.739-1.119a1 1 0 0 0-.314.877c.239 1.687.36 2.816.366 3.304l-.788-2.817a1 1 0 0 0-.256-.438l-.785-.786a1 1 0 0 0-.438-.256l-2.818-.787c.488.005 1.619.127 3.305.366a1 1 0 0 0 .878-.314l3.16-3.447a1 1 0 0 0-.469-1.639L5.734 4.51c.599-.46 1.114-.694 1.532-.719c.642-.038 2.515.439 5.418 1.424a1 1 0 0 0 1.058-.271l.65-.709c1.507-1.505 2.366-1.79 2.786-1.37s.135 1.279-1.402 2.816l-.677.62a1 1 0 0 0-.271 1.058c.985 2.902 1.462 4.776 1.423 5.418c-.024.417-.259.933-.718 1.532l-1.431-5.123a1 1 0 0 0-1.64-.468z" clip-rule="evenodd"></svg:path>`,
})
export class PepiconsPopAirplaneIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopAirplaneCircleIcon],svg[pepicons-pop-airplane-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="m13.755 15.996l1.859-1.704l1.472 5.269a1 1 0 0 0 1.643.464c1.579-1.465 2.44-2.82 2.519-4.13c.056-.941-.382-2.74-1.319-5.56l.23-.211c2.249-2.248 2.899-4.208 1.433-5.674c-1.465-1.465-3.426-.816-5.644 1.4l-.24.262c-2.821-.936-4.62-1.374-5.561-1.318c-1.311.078-2.665.94-4.13 2.519a1 1 0 0 0 .464 1.643l5.27 1.472l-1.704 1.859c-1.72-.236-2.798-.338-3.32-.307c-.937.056-1.859.643-2.834 1.694a1 1 0 0 0 .464 1.643l4.653 1.3l.415.414l1.3 4.654a1 1 0 0 0 1.643.464c1.05-.975 1.638-1.897 1.694-2.834c.03-.522-.072-1.6-.307-3.319m-1.739-1.119a1 1 0 0 0-.314.877c.239 1.687.36 2.816.366 3.304l-.788-2.817a1 1 0 0 0-.256-.438l-.785-.786a1 1 0 0 0-.438-.256l-2.818-.787c.488.005 1.619.127 3.305.366a1 1 0 0 0 .878-.314l3.16-3.447a1 1 0 0 0-.469-1.639L8.734 7.51c.599-.46 1.114-.694 1.532-.719c.642-.038 2.515.439 5.418 1.424a1 1 0 0 0 1.058-.271l.65-.709c1.507-1.505 2.366-1.79 2.786-1.37s.135 1.279-1.402 2.816l-.677.62a1 1 0 0 0-.271 1.058c.985 2.902 1.462 4.776 1.423 5.418c-.024.417-.259.933-.718 1.532l-1.431-5.123a1 1 0 0 0-1.64-.468z"></svg:path><svg:path d="M13 24c6.075 0 11-4.925 11-11S19.075 2 13 2S2 6.925 2 13s4.925 11 11 11m0 2c7.18 0 13-5.82 13-13S20.18 0 13 0S0 5.82 0 13s5.82 13 13 13"></svg:path></svg:g>`,
})
export class PepiconsPopAirplaneCircleIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopAirplaneCircleFilledIcon],svg[pepicons-pop-airplane-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPopAirplaneCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:path fill="#000" fill-rule="evenodd" d="m13.755 15.996l1.859-1.704l1.472 5.269a1 1 0 0 0 1.643.464c1.579-1.465 2.44-2.82 2.519-4.13c.056-.941-.382-2.74-1.319-5.56l.23-.211c2.249-2.248 2.899-4.208 1.433-5.674c-1.465-1.465-3.426-.816-5.644 1.4l-.24.262c-2.821-.936-4.62-1.374-5.561-1.318c-1.311.078-2.665.94-4.13 2.519a1 1 0 0 0 .464 1.643l5.27 1.472l-1.704 1.859c-1.72-.236-2.798-.338-3.32-.307c-.937.056-1.859.643-2.834 1.694a1 1 0 0 0 .464 1.643l4.653 1.3l.415.414l1.3 4.654a1 1 0 0 0 1.643.464c1.05-.975 1.638-1.897 1.694-2.834c.03-.522-.072-1.6-.307-3.319m-1.739-1.119a1 1 0 0 0-.314.877c.239 1.687.36 2.816.366 3.304l-.788-2.817a1 1 0 0 0-.256-.438l-.785-.786a1 1 0 0 0-.438-.256l-2.818-.787c.488.005 1.619.127 3.305.366a1 1 0 0 0 .878-.314l3.16-3.447a1 1 0 0 0-.469-1.639L8.734 7.51c.599-.46 1.114-.694 1.532-.719c.642-.038 2.515.439 5.418 1.424a1 1 0 0 0 1.058-.271l.65-.709c1.507-1.505 2.366-1.79 2.786-1.37s.135 1.279-1.402 2.816l-.677.62a1 1 0 0 0-.271 1.058c.985 2.902 1.462 4.776 1.423 5.418c-.024.417-.259.933-.718 1.532l-1.431-5.123a1 1 0 0 0-1.64-.468z" clip-rule="evenodd"></svg:path></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPopAirplaneCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPopAirplaneCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopAirplaneCircleOffIcon],svg[pepicons-pop-airplane-circle-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="m13.755 15.996l1.859-1.704l1.472 5.269a1 1 0 0 0 1.643.464c1.579-1.465 2.44-2.82 2.519-4.13c.056-.941-.382-2.74-1.319-5.56l.23-.211c2.249-2.248 2.899-4.208 1.433-5.674c-1.465-1.465-3.426-.816-5.644 1.4l-.24.262c-2.821-.936-4.62-1.374-5.561-1.318c-1.311.078-2.665.94-4.13 2.519a1 1 0 0 0 .464 1.643l5.27 1.472l-1.704 1.859c-1.72-.236-2.798-.338-3.32-.307c-.937.056-1.859.643-2.834 1.694a1 1 0 0 0 .464 1.643l4.653 1.3l.415.414l1.3 4.654a1 1 0 0 0 1.643.464c1.05-.975 1.638-1.897 1.694-2.834c.03-.522-.072-1.6-.307-3.319m-1.739-1.119a1 1 0 0 0-.314.877c.239 1.687.36 2.816.366 3.304l-.788-2.817a1 1 0 0 0-.256-.438l-.785-.786a1 1 0 0 0-.438-.256l-2.818-.787c.488.005 1.619.127 3.305.366a1 1 0 0 0 .878-.314l3.16-3.447a1 1 0 0 0-.469-1.639L8.734 7.51c.599-.46 1.114-.694 1.532-.719c.642-.038 2.515.439 5.418 1.424a1 1 0 0 0 1.058-.271l.65-.709c1.507-1.505 2.366-1.79 2.786-1.37s.135 1.279-1.402 2.816l-.677.62a1 1 0 0 0-.271 1.058c.985 2.902 1.462 4.776 1.423 5.418c-.024.417-.259.933-.718 1.532l-1.431-5.123a1 1 0 0 0-1.64-.468z" clip-rule="evenodd"></svg:path><svg:path d="M4.293 5.707a1 1 0 0 1 1.414-1.414l16 16a1 1 0 0 1-1.414 1.414z"></svg:path><svg:path fill-rule="evenodd" d="M13 24c6.075 0 11-4.925 11-11S19.075 2 13 2S2 6.925 2 13s4.925 11 11 11m0 2c7.18 0 13-5.82 13-13S20.18 0 13 0S0 5.82 0 13s5.82 13 13 13" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPopAirplaneCircleOffIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopAlarmIcon],svg[pepicons-pop-alarm-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M10 5.5a5.5 5.5 0 1 0 0 11a5.5 5.5 0 0 0 0-11M2.5 11a7.5 7.5 0 1 1 15 0a7.5 7.5 0 0 1-15 0"></svg:path><svg:path d="M2.793 18.207a1 1 0 0 0 1.414 0l1.5-1.5a1 1 0 1 0-1.414-1.414l-1.5 1.5a1 1 0 0 0 0 1.414m11.5-2.914a1 1 0 0 1 1.414 0l1.5 1.5a1 1 0 0 1-1.414 1.414l-1.5-1.5a1 1 0 0 1 0-1.414M10 7a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0V8a1 1 0 0 1 1-1"></svg:path><svg:path d="M14 11a1 1 0 0 1-1 1h-3a1 1 0 1 1 0-2h3a1 1 0 0 1 1 1M6.332 3.172L2.574 6.76s-.077-.07-.19-.198c-.257-.292-.697-.881-.821-1.601c-.113-.654.035-1.417.818-2.165c.783-.747 1.551-.86 2.2-.717c.713.157 1.281.624 1.561.894c.123.118.19.199.19.199m7.336 0l3.758 3.588s.077-.07.19-.198c.257-.292.697-.881.821-1.601c.113-.654-.035-1.417-.818-2.165c-.783-.747-1.551-.86-2.2-.717c-.713.157-1.281.624-1.561.894c-.123.118-.19.199-.19.199"></svg:path></svg:g>`,
})
export class PepiconsPopAlarmIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopAirplaneOffIcon],svg[pepicons-pop-airplane-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="m10.755 12.996l1.859-1.704l1.472 5.269a1 1 0 0 0 1.643.464c1.579-1.465 2.44-2.82 2.519-4.13c.056-.941-.382-2.74-1.319-5.56l.23-.211c2.249-2.248 2.899-4.208 1.433-5.674c-1.465-1.465-3.426-.816-5.644 1.4l-.24.262c-2.821-.936-4.62-1.374-5.561-1.318c-1.311.078-2.665.94-4.13 2.519a1 1 0 0 0 .464 1.643l5.27 1.472l-1.704 1.859c-1.72-.236-2.798-.338-3.32-.307c-.937.056-1.859.643-2.834 1.694a1 1 0 0 0 .464 1.643l4.653 1.3l.415.414l1.3 4.654a1 1 0 0 0 1.643.464c1.05-.975 1.638-1.897 1.694-2.834c.03-.522-.072-1.6-.307-3.319m-1.739-1.119a1 1 0 0 0-.314.877c.239 1.687.36 2.816.366 3.304l-.788-2.817a1 1 0 0 0-.256-.438l-.785-.786a1 1 0 0 0-.438-.256l-2.818-.787c.488.005 1.619.127 3.305.366a1 1 0 0 0 .878-.314l3.16-3.447a1 1 0 0 0-.469-1.639L5.734 4.51c.599-.46 1.114-.694 1.532-.719c.642-.038 2.515.439 5.418 1.424a1 1 0 0 0 1.058-.271l.65-.709c1.507-1.505 2.366-1.79 2.786-1.37s.135 1.279-1.402 2.816l-.677.62a1 1 0 0 0-.271 1.058c.985 2.902 1.462 4.776 1.423 5.418c-.024.417-.259.933-.718 1.532l-1.431-5.123a1 1 0 0 0-1.64-.468z" clip-rule="evenodd"></svg:path><svg:path d="M1.293 2.707a1 1 0 0 1 1.414-1.414l16 16a1 1 0 0 1-1.414 1.414z"></svg:path></svg:g>`,
})
export class PepiconsPopAirplaneOffIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopAlarmCircleIcon],svg[pepicons-pop-alarm-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M13 8.5a5.5 5.5 0 1 0 0 11a5.5 5.5 0 0 0 0-11M5.5 14a7.5 7.5 0 1 1 15 0a7.5 7.5 0 0 1-15 0"></svg:path><svg:path d="M5.793 21.207a1 1 0 0 0 1.414 0l1.5-1.5a1 1 0 1 0-1.414-1.414l-1.5 1.5a1 1 0 0 0 0 1.414m11.5-2.914a1 1 0 0 1 1.414 0l1.5 1.5a1 1 0 0 1-1.414 1.414l-1.5-1.5a1 1 0 0 1 0-1.414M13 10a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0v-3a1 1 0 0 1 1-1"></svg:path><svg:path d="M17 14a1 1 0 0 1-1 1h-3a1 1 0 1 1 0-2h3a1 1 0 0 1 1 1M9.332 6.172L5.574 9.76s-.077-.07-.19-.198c-.257-.292-.697-.881-.821-1.601c-.113-.654.035-1.417.818-2.165c.783-.747 1.551-.86 2.2-.717c.713.157 1.281.624 1.561.894c.123.118.19.199.19.199m7.336 0l3.758 3.588s.077-.07.19-.198c.257-.292.697-.881.821-1.601c.113-.654-.035-1.417-.818-2.165c-.783-.747-1.551-.86-2.2-.717c-.713.157-1.281.624-1.561.894c-.123.118-.19.199-.19.199"></svg:path><svg:path d="M13 24c6.075 0 11-4.925 11-11S19.075 2 13 2S2 6.925 2 13s4.925 11 11 11m0 2c7.18 0 13-5.82 13-13S20.18 0 13 0S0 5.82 0 13s5.82 13 13 13"></svg:path></svg:g>`,
})
export class PepiconsPopAlarmCircleIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopAlarmCircleFilledIcon],svg[pepicons-pop-alarm-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPopAlarmCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:g fill="#000" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M13 8.5a5.5 5.5 0 1 0 0 11a5.5 5.5 0 0 0 0-11M5.5 14a7.5 7.5 0 1 1 15 0a7.5 7.5 0 0 1-15 0"></svg:path><svg:path d="M5.793 21.207a1 1 0 0 0 1.414 0l1.5-1.5a1 1 0 1 0-1.414-1.414l-1.5 1.5a1 1 0 0 0 0 1.414m11.5-2.914a1 1 0 0 1 1.414 0l1.5 1.5a1 1 0 0 1-1.414 1.414l-1.5-1.5a1 1 0 0 1 0-1.414M13 10a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0v-3a1 1 0 0 1 1-1"></svg:path><svg:path d="M17 14a1 1 0 0 1-1 1h-3a1 1 0 1 1 0-2h3a1 1 0 0 1 1 1M9.332 6.172L5.574 9.76s-.077-.07-.19-.198c-.257-.292-.697-.881-.821-1.601c-.113-.654.035-1.417.818-2.165c.783-.747 1.551-.86 2.2-.717c.713.157 1.281.624 1.561.894c.123.118.19.199.19.199m7.336 0l3.758 3.588s.077-.07.19-.198c.257-.292.697-.881.821-1.601c.113-.654-.035-1.417-.818-2.165c-.783-.747-1.551-.86-2.2-.717c-.713.157-1.281.624-1.561.894c-.123.118-.19.199-.19.199"></svg:path></svg:g></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPopAlarmCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPopAlarmCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopAlarmOffIcon],svg[pepicons-pop-alarm-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M10 5.5a5.5 5.5 0 1 0 0 11a5.5 5.5 0 0 0 0-11M2.5 11a7.5 7.5 0 1 1 15 0a7.5 7.5 0 0 1-15 0" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M2.793 18.207a1 1 0 0 0 1.414 0l1.5-1.5a1 1 0 1 0-1.414-1.414l-1.5 1.5a1 1 0 0 0 0 1.414m11.5-2.914a1 1 0 0 1 1.414 0l1.5 1.5a1 1 0 0 1-1.414 1.414l-1.5-1.5a1 1 0 0 1 0-1.414M10 7a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0V8a1 1 0 0 1 1-1" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M14 11a1 1 0 0 1-1 1h-3a1 1 0 1 1 0-2h3a1 1 0 0 1 1 1M6.332 3.172L2.574 6.76s-.077-.07-.19-.198c-.257-.292-.697-.881-.821-1.601c-.113-.654.035-1.417.818-2.165c.783-.747 1.551-.86 2.2-.717c.713.157 1.281.624 1.561.894c.123.118.19.199.19.199m7.336 0l3.758 3.588s.077-.07.19-.198c.257-.292.697-.881.821-1.601c.113-.654-.035-1.417-.818-2.165c-.783-.747-1.551-.86-2.2-.717c-.713.157-1.281.624-1.561.894c-.123.118-.19.199-.19.199" clip-rule="evenodd"></svg:path><svg:path d="M1.293 2.707a1 1 0 0 1 1.414-1.414l16 16a1 1 0 0 1-1.414 1.414z"></svg:path></svg:g>`,
})
export class PepiconsPopAlarmOffIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopAlarmCircleOffIcon],svg[pepicons-pop-alarm-circle-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M13 8.5a5.5 5.5 0 1 0 0 11a5.5 5.5 0 0 0 0-11M5.5 14a7.5 7.5 0 1 1 15 0a7.5 7.5 0 0 1-15 0" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M5.793 21.207a1 1 0 0 0 1.414 0l1.5-1.5a1 1 0 1 0-1.414-1.414l-1.5 1.5a1 1 0 0 0 0 1.414m11.5-2.914a1 1 0 0 1 1.414 0l1.5 1.5a1 1 0 0 1-1.414 1.414l-1.5-1.5a1 1 0 0 1 0-1.414M13 10a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0v-3a1 1 0 0 1 1-1" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M17 14a1 1 0 0 1-1 1h-3a1 1 0 1 1 0-2h3a1 1 0 0 1 1 1M9.332 6.172L5.574 9.76s-.077-.07-.19-.198c-.257-.292-.697-.881-.821-1.601c-.113-.654.035-1.417.818-2.165c.783-.747 1.551-.86 2.2-.717c.713.157 1.281.624 1.561.894c.123.118.19.199.19.199m7.336 0l3.758 3.588s.077-.07.19-.198c.257-.292.697-.881.821-1.601c.113-.654-.035-1.417-.818-2.165c-.783-.747-1.551-.86-2.2-.717c-.713.157-1.281.624-1.561.894c-.123.118-.19.199-.19.199" clip-rule="evenodd"></svg:path><svg:path d="M4.293 5.707a1 1 0 0 1 1.414-1.414l16 16a1 1 0 0 1-1.414 1.414z"></svg:path><svg:path fill-rule="evenodd" d="M13 24c6.075 0 11-4.925 11-11S19.075 2 13 2S2 6.925 2 13s4.925 11 11 11m0 2c7.18 0 13-5.82 13-13S20.18 0 13 0S0 5.82 0 13s5.82 13 13 13" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPopAlarmCircleOffIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopAngleDownCircleIcon],svg[pepicons-pop-angle-down-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m19.64 11.268l-6 5c-1.024.854-2.304-.683-1.28-1.536l6-5c1.024-.854 2.305.683 1.28 1.536"></svg:path><svg:path d="m7.64 9.732l6 5c1.024.853-.256 2.39-1.28 1.536l-6-5c-1.024-.853.256-2.39 1.28-1.536"></svg:path><svg:path fill-rule="evenodd" d="M13 24c6.075 0 11-4.925 11-11S19.075 2 13 2S2 6.925 2 13s4.925 11 11 11m0 2c7.18 0 13-5.82 13-13S20.18 0 13 0S0 5.82 0 13s5.82 13 13 13" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPopAngleDownCircleIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopAngleDownIcon],svg[pepicons-pop-angle-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m16.64 8.268l-6 5c-1.024.854-2.304-.683-1.28-1.536l6-5c1.024-.854 2.305.683 1.28 1.536"></svg:path><svg:path d="m4.64 6.732l6 5c1.024.853-.256 2.39-1.28 1.536l-6-5c-1.024-.853.256-2.39 1.28-1.536"></svg:path></svg:g>`,
})
export class PepiconsPopAngleDownIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopAngleDownCircleFilledIcon],svg[pepicons-pop-angle-down-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPopAngleDownCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:g fill="#000"><svg:path d="m19.64 11.268l-6 5c-1.024.854-2.304-.683-1.28-1.536l6-5c1.024-.854 2.305.683 1.28 1.536"></svg:path><svg:path d="m7.64 9.732l6 5c1.024.853-.256 2.39-1.28 1.536l-6-5c-1.024-.853.256-2.39 1.28-1.536"></svg:path></svg:g></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPopAngleDownCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPopAngleDownCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopAngleDownCircleOffIcon],svg[pepicons-pop-angle-down-circle-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m19.64 11.268l-6 5c-1.024.854-2.304-.683-1.28-1.536l6-5c1.024-.854 2.305.683 1.28 1.536"></svg:path><svg:path d="m7.64 9.732l6 5c1.024.853-.256 2.39-1.28 1.536l-6-5c-1.024-.853.256-2.39 1.28-1.536"></svg:path><svg:path d="M4.293 5.707a1 1 0 0 1 1.414-1.414l16 16a1 1 0 0 1-1.414 1.414z"></svg:path><svg:path fill-rule="evenodd" d="M13 24c6.075 0 11-4.925 11-11S19.075 2 13 2S2 6.925 2 13s4.925 11 11 11m0 2c7.18 0 13-5.82 13-13S20.18 0 13 0S0 5.82 0 13s5.82 13 13 13" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPopAngleDownCircleOffIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopAngleDownOffIcon],svg[pepicons-pop-angle-down-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m16.64 8.268l-6 5c-1.024.854-2.304-.683-1.28-1.536l6-5c1.024-.854 2.305.683 1.28 1.536"></svg:path><svg:path d="m4.64 6.732l6 5c1.024.853-.256 2.39-1.28 1.536l-6-5c-1.024-.853.256-2.39 1.28-1.536"></svg:path><svg:path d="M1.293 2.707a1 1 0 0 1 1.414-1.414l16 16a1 1 0 0 1-1.414 1.414z"></svg:path></svg:g>`,
})
export class PepiconsPopAngleDownOffIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopAngleLeftIcon],svg[pepicons-pop-angle-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M6.732 10.64a1 1 0 1 1 1.536-1.28l5 6a1 1 0 1 1-1.536 1.28z"></svg:path><svg:path d="M8.268 10.64a1 1 0 1 1-1.536-1.28l5-6a1 1 0 1 1 1.536 1.28z"></svg:path></svg:g>`,
})
export class PepiconsPopAngleLeftIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopAngleLeftCircleIcon],svg[pepicons-pop-angle-left-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M9.732 13.64a1 1 0 1 1 1.536-1.28l5 6a1 1 0 1 1-1.536 1.28z"></svg:path><svg:path d="M11.268 13.64a1 1 0 1 1-1.536-1.28l5-6a1 1 0 1 1 1.536 1.28z"></svg:path><svg:path fill-rule="evenodd" d="M13 24c6.075 0 11-4.925 11-11S19.075 2 13 2S2 6.925 2 13s4.925 11 11 11m0 2c7.18 0 13-5.82 13-13S20.18 0 13 0S0 5.82 0 13s5.82 13 13 13" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPopAngleLeftCircleIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopAngleLeftCircleFilledIcon],svg[pepicons-pop-angle-left-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPopAngleLeftCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:g fill="#000"><svg:path d="M9.732 13.64a1 1 0 1 1 1.536-1.28l5 6a1 1 0 1 1-1.536 1.28z"></svg:path><svg:path d="M11.268 13.64a1 1 0 1 1-1.536-1.28l5-6a1 1 0 1 1 1.536 1.28z"></svg:path></svg:g></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPopAngleLeftCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPopAngleLeftCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopAngleLeftCircleOffIcon],svg[pepicons-pop-angle-left-circle-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M9.732 13.64a1 1 0 1 1 1.536-1.28l5 6a1 1 0 1 1-1.536 1.28z"></svg:path><svg:path d="M11.268 13.64a1 1 0 1 1-1.536-1.28l5-6a1 1 0 1 1 1.536 1.28z"></svg:path><svg:path d="M4.293 5.707a1 1 0 0 1 1.414-1.414l16 16a1 1 0 0 1-1.414 1.414z"></svg:path><svg:path fill-rule="evenodd" d="M13 24c6.075 0 11-4.925 11-11S19.075 2 13 2S2 6.925 2 13s4.925 11 11 11m0 2c7.18 0 13-5.82 13-13S20.18 0 13 0S0 5.82 0 13s5.82 13 13 13" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPopAngleLeftCircleOffIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopAngleLeftOffIcon],svg[pepicons-pop-angle-left-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M6.732 10.64a1 1 0 1 1 1.536-1.28l5 6a1 1 0 1 1-1.536 1.28z"></svg:path><svg:path d="M8.268 10.64a1 1 0 1 1-1.536-1.28l5-6a1 1 0 1 1 1.536 1.28z"></svg:path><svg:path d="M1.293 2.707a1 1 0 0 1 1.414-1.414l16 16a1 1 0 0 1-1.414 1.414z"></svg:path></svg:g>`,
})
export class PepiconsPopAngleLeftOffIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopAngleRightIcon],svg[pepicons-pop-angle-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M11.732 9.36a1 1 0 1 1 1.536 1.28l-5 6a1 1 0 1 1-1.536-1.28z"></svg:path><svg:path d="M6.732 4.64a1 1 0 0 1 1.536-1.28l5 6a1 1 0 1 1-1.536 1.28z"></svg:path></svg:g>`,
})
export class PepiconsPopAngleRightIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopAngleRightCircleIcon],svg[pepicons-pop-angle-right-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M14.732 12.36a1 1 0 1 1 1.536 1.28l-5 6a1 1 0 1 1-1.536-1.28z"></svg:path><svg:path d="M9.732 7.64a1 1 0 0 1 1.536-1.28l5 6a1 1 0 1 1-1.536 1.28z"></svg:path><svg:path fill-rule="evenodd" d="M13 24c6.075 0 11-4.925 11-11S19.075 2 13 2S2 6.925 2 13s4.925 11 11 11m0 2c7.18 0 13-5.82 13-13S20.18 0 13 0S0 5.82 0 13s5.82 13 13 13" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPopAngleRightCircleIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopAngleRightCircleFilledIcon],svg[pepicons-pop-angle-right-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPopAngleRightCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:g fill="#000"><svg:path d="M14.732 12.36a1 1 0 1 1 1.536 1.28l-5 6a1 1 0 1 1-1.536-1.28z"></svg:path><svg:path d="M9.732 7.64a1 1 0 0 1 1.536-1.28l5 6a1 1 0 1 1-1.536 1.28z"></svg:path></svg:g></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPopAngleRightCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPopAngleRightCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopAngleRightCircleOffIcon],svg[pepicons-pop-angle-right-circle-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M14.732 12.36a1 1 0 1 1 1.536 1.28l-5 6a1 1 0 1 1-1.536-1.28z"></svg:path><svg:path d="M9.732 7.64a1 1 0 0 1 1.536-1.28l5 6a1 1 0 1 1-1.536 1.28z"></svg:path><svg:path d="M4.293 5.707a1 1 0 0 1 1.414-1.414l16 16a1 1 0 0 1-1.414 1.414z"></svg:path><svg:path fill-rule="evenodd" d="M13 24c6.075 0 11-4.925 11-11S19.075 2 13 2S2 6.925 2 13s4.925 11 11 11m0 2c7.18 0 13-5.82 13-13S20.18 0 13 0S0 5.82 0 13s5.82 13 13 13" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPopAngleRightCircleOffIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopAngleRightOffIcon],svg[pepicons-pop-angle-right-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M11.732 9.36a1 1 0 1 1 1.536 1.28l-5 6a1 1 0 1 1-1.536-1.28z"></svg:path><svg:path d="M6.732 4.64a1 1 0 0 1 1.536-1.28l5 6a1 1 0 1 1-1.536 1.28z"></svg:path><svg:path d="M1.293 2.707a1 1 0 0 1 1.414-1.414l16 16a1 1 0 0 1-1.414 1.414z"></svg:path></svg:g>`,
})
export class PepiconsPopAngleRightOffIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopAngleUpIcon],svg[pepicons-pop-angle-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m15.36 13.268l-6-5c-1.025-.853.256-2.39 1.28-1.536l6 5c1.024.853-.256 2.39-1.28 1.536"></svg:path><svg:path d="m3.36 11.732l6-5c1.024-.854 2.305.683 1.28 1.536l-6 5c-1.024.854-2.305-.683-1.28-1.536"></svg:path></svg:g>`,
})
export class PepiconsPopAngleUpIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopAngleUpCircleIcon],svg[pepicons-pop-angle-up-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m18.36 16.268l-6-5c-1.025-.853.256-2.39 1.28-1.536l6 5c1.024.853-.256 2.39-1.28 1.536"></svg:path><svg:path d="m6.36 14.732l6-5c1.024-.854 2.305.683 1.28 1.536l-6 5c-1.024.854-2.305-.683-1.28-1.536"></svg:path><svg:path fill-rule="evenodd" d="M13 24c6.075 0 11-4.925 11-11S19.075 2 13 2S2 6.925 2 13s4.925 11 11 11m0 2c7.18 0 13-5.82 13-13S20.18 0 13 0S0 5.82 0 13s5.82 13 13 13" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPopAngleUpCircleIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopAngleUpCircleFilledIcon],svg[pepicons-pop-angle-up-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPopAngleUpCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:g fill="#000"><svg:path d="m18.36 16.268l-6-5c-1.025-.853.256-2.39 1.28-1.536l6 5c1.024.853-.256 2.39-1.28 1.536"></svg:path><svg:path d="m6.36 14.732l6-5c1.024-.854 2.305.683 1.28 1.536l-6 5c-1.024.854-2.305-.683-1.28-1.536"></svg:path></svg:g></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPopAngleUpCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPopAngleUpCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopAngleUpCircleOffIcon],svg[pepicons-pop-angle-up-circle-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m18.36 16.268l-6-5c-1.025-.853.256-2.39 1.28-1.536l6 5c1.024.853-.256 2.39-1.28 1.536"></svg:path><svg:path d="m6.36 14.732l6-5c1.024-.854 2.305.683 1.28 1.536l-6 5c-1.024.854-2.305-.683-1.28-1.536"></svg:path><svg:path d="M4.293 5.707a1 1 0 0 1 1.414-1.414l16 16a1 1 0 0 1-1.414 1.414z"></svg:path><svg:path fill-rule="evenodd" d="M13 24c6.075 0 11-4.925 11-11S19.075 2 13 2S2 6.925 2 13s4.925 11 11 11m0 2c7.18 0 13-5.82 13-13S20.18 0 13 0S0 5.82 0 13s5.82 13 13 13" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPopAngleUpCircleOffIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopAngleUpOffIcon],svg[pepicons-pop-angle-up-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m15.36 13.268l-6-5c-1.025-.853.256-2.39 1.28-1.536l6 5c1.024.853-.256 2.39-1.28 1.536"></svg:path><svg:path d="m3.36 11.732l6-5c1.024-.854 2.305.683 1.28 1.536l-6 5c-1.024.854-2.305-.683-1.28-1.536"></svg:path><svg:path d="M1.293 2.707a1 1 0 0 1 1.414-1.414l16 16a1 1 0 0 1-1.414 1.414z"></svg:path></svg:g>`,
})
export class PepiconsPopAngleUpOffIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopArrowDownIcon],svg[pepicons-pop-arrow-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M14.768 11.027a1 1 0 0 1-.128 1.408l-4 3.333a1 1 0 0 1-1.28-1.536l4-3.334a1 1 0 0 1 1.408.129"></svg:path><svg:path d="M5.232 11.027a1 1 0 0 1 1.408-.129l4 3.334a1 1 0 1 1-1.28 1.536l-4-3.333a1 1 0 0 1-.128-1.408"></svg:path><svg:path d="M10 14a1 1 0 0 1-1-1V5a1 1 0 1 1 2 0v8a1 1 0 0 1-1 1"></svg:path></svg:g>`,
})
export class PepiconsPopArrowDownIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopArrowDownCircleIcon],svg[pepicons-pop-arrow-down-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M17.768 14.027a1 1 0 0 1-.128 1.408l-4 3.333a1 1 0 0 1-1.28-1.536l4-3.334a1 1 0 0 1 1.408.129"></svg:path><svg:path d="M8.232 14.027a1 1 0 0 1 1.408-.129l4 3.334a1 1 0 1 1-1.28 1.536l-4-3.333a1 1 0 0 1-.128-1.408"></svg:path><svg:path d="M13 17a1 1 0 0 1-1-1V8a1 1 0 1 1 2 0v8a1 1 0 0 1-1 1"></svg:path><svg:path d="M13 24c6.075 0 11-4.925 11-11S19.075 2 13 2S2 6.925 2 13s4.925 11 11 11m0 2c7.18 0 13-5.82 13-13S20.18 0 13 0S0 5.82 0 13s5.82 13 13 13"></svg:path></svg:g>`,
})
export class PepiconsPopArrowDownCircleIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopArrowDownCircleFilledIcon],svg[pepicons-pop-arrow-down-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPopArrowDownCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:g fill="#000" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M17.768 14.027a1 1 0 0 1-.128 1.408l-4 3.333a1 1 0 0 1-1.28-1.536l4-3.334a1 1 0 0 1 1.408.129"></svg:path><svg:path d="M8.232 14.027a1 1 0 0 1 1.408-.129l4 3.334a1 1 0 1 1-1.28 1.536l-4-3.333a1 1 0 0 1-.128-1.408"></svg:path><svg:path d="M13 17a1 1 0 0 1-1-1V8a1 1 0 1 1 2 0v8a1 1 0 0 1-1 1"></svg:path></svg:g></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPopArrowDownCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPopArrowDownCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopArrowDownCircleOffIcon],svg[pepicons-pop-arrow-down-circle-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M17.768 14.027a1 1 0 0 1-.128 1.408l-4 3.333a1 1 0 0 1-1.28-1.536l4-3.334a1 1 0 0 1 1.408.129" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M8.232 14.027a1 1 0 0 1 1.408-.129l4 3.334a1 1 0 1 1-1.28 1.536l-4-3.333a1 1 0 0 1-.128-1.408" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M13 17a1 1 0 0 1-1-1V8a1 1 0 1 1 2 0v8a1 1 0 0 1-1 1" clip-rule="evenodd"></svg:path><svg:path d="M4.293 5.707a1 1 0 0 1 1.414-1.414l16 16a1 1 0 0 1-1.414 1.414z"></svg:path><svg:path fill-rule="evenodd" d="M13 24c6.075 0 11-4.925 11-11S19.075 2 13 2S2 6.925 2 13s4.925 11 11 11m0 2c7.18 0 13-5.82 13-13S20.18 0 13 0S0 5.82 0 13s5.82 13 13 13" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPopArrowDownCircleOffIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopArrowDownLeftIcon],svg[pepicons-pop-arrow-down-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M12.646 14.098a1 1 0 0 1-1.087.905l-5.185-.472a1 1 0 1 1 .181-1.991l5.186.471a1 1 0 0 1 .905 1.087"></svg:path><svg:path d="M5.903 7.354a1 1 0 0 1 1.086.906l.471 5.185a1 1 0 1 1-1.991.181l-.472-5.185a1 1 0 0 1 .906-1.087"></svg:path><svg:path d="M7.172 12.829a1 1 0 0 1 0-1.415l5.656-5.656a1 1 0 1 1 1.415 1.414l-5.657 5.657a1 1 0 0 1-1.414 0"></svg:path></svg:g>`,
})
export class PepiconsPopArrowDownLeftIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopArrowDownLeftCircleIcon],svg[pepicons-pop-arrow-down-left-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M15.646 17.098a1 1 0 0 1-1.087.905l-5.185-.472a1 1 0 1 1 .181-1.991l5.186.471a1 1 0 0 1 .905 1.087"></svg:path><svg:path d="M8.903 10.354a1 1 0 0 1 1.086.906l.471 5.185a1 1 0 1 1-1.991.181l-.472-5.185a1 1 0 0 1 .906-1.087"></svg:path><svg:path d="M10.172 15.829a1 1 0 0 1 0-1.415l5.656-5.656a1 1 0 1 1 1.415 1.414l-5.657 5.657a1 1 0 0 1-1.414 0"></svg:path><svg:path d="M13 24c6.075 0 11-4.925 11-11S19.075 2 13 2S2 6.925 2 13s4.925 11 11 11m0 2c7.18 0 13-5.82 13-13S20.18 0 13 0S0 5.82 0 13s5.82 13 13 13"></svg:path></svg:g>`,
})
export class PepiconsPopArrowDownLeftCircleIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopArrowDownLeftCircleFilledIcon],svg[pepicons-pop-arrow-down-left-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPopArrowDownLeftCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:g fill="#000" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M15.646 17.098a1 1 0 0 1-1.087.905l-5.185-.472a1 1 0 1 1 .181-1.991l5.186.471a1 1 0 0 1 .905 1.087"></svg:path><svg:path d="M8.903 10.354a1 1 0 0 1 1.086.906l.471 5.185a1 1 0 1 1-1.991.181l-.472-5.185a1 1 0 0 1 .906-1.087"></svg:path><svg:path d="M10.172 15.829a1 1 0 0 1 0-1.415l5.656-5.656a1 1 0 1 1 1.415 1.414l-5.657 5.657a1 1 0 0 1-1.414 0"></svg:path></svg:g></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPopArrowDownLeftCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPopArrowDownLeftCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopArrowDownLeftCircleOffIcon],svg[pepicons-pop-arrow-down-left-circle-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M15.646 17.098a1 1 0 0 1-1.087.905l-5.185-.472a1 1 0 1 1 .181-1.991l5.186.471a1 1 0 0 1 .905 1.087" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M8.903 10.354a1 1 0 0 1 1.086.906l.471 5.185a1 1 0 1 1-1.991.181l-.472-5.185a1 1 0 0 1 .906-1.087" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M10.172 15.829a1 1 0 0 1 0-1.415l5.656-5.656a1 1 0 1 1 1.415 1.414l-5.657 5.657a1 1 0 0 1-1.414 0" clip-rule="evenodd"></svg:path><svg:path d="M4.293 5.707a1 1 0 0 1 1.414-1.414l16 16a1 1 0 0 1-1.414 1.414z"></svg:path><svg:path fill-rule="evenodd" d="M13 24c6.075 0 11-4.925 11-11S19.075 2 13 2S2 6.925 2 13s4.925 11 11 11m0 2c7.18 0 13-5.82 13-13S20.18 0 13 0S0 5.82 0 13s5.82 13 13 13" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPopArrowDownLeftCircleOffIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopArrowDownLeftOffIcon],svg[pepicons-pop-arrow-down-left-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M12.646 14.098a1 1 0 0 1-1.087.905l-5.185-.472a1 1 0 1 1 .181-1.991l5.186.471a1 1 0 0 1 .905 1.087" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M5.903 7.354a1 1 0 0 1 1.086.906l.471 5.185a1 1 0 1 1-1.991.181l-.472-5.185a1 1 0 0 1 .906-1.087" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M7.172 12.829a1 1 0 0 1 0-1.415l5.656-5.656a1 1 0 1 1 1.415 1.414l-5.657 5.657a1 1 0 0 1-1.414 0" clip-rule="evenodd"></svg:path><svg:path d="M1.293 2.707a1 1 0 0 1 1.414-1.414l16 16a1 1 0 0 1-1.414 1.414z"></svg:path></svg:g>`,
})
export class PepiconsPopArrowDownLeftOffIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopArrowDownOffIcon],svg[pepicons-pop-arrow-down-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M14.768 11.027a1 1 0 0 1-.128 1.408l-4 3.333a1 1 0 0 1-1.28-1.536l4-3.334a1 1 0 0 1 1.408.129" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M5.232 11.027a1 1 0 0 1 1.408-.129l4 3.334a1 1 0 1 1-1.28 1.536l-4-3.333a1 1 0 0 1-.128-1.408" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M10 14a1 1 0 0 1-1-1V5a1 1 0 1 1 2 0v8a1 1 0 0 1-1 1" clip-rule="evenodd"></svg:path><svg:path d="M1.293 2.707a1 1 0 0 1 1.414-1.414l16 16a1 1 0 0 1-1.414 1.414z"></svg:path></svg:g>`,
})
export class PepiconsPopArrowDownOffIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopArrowDownRightIcon],svg[pepicons-pop-arrow-down-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M14.098 7.354a1 1 0 0 1 .905 1.087l-.472 5.185a1 1 0 1 1-1.991-.18l.471-5.186a1 1 0 0 1 1.087-.906"></svg:path><svg:path d="M7.354 14.098a1 1 0 0 1 .906-1.087l5.185-.471a1 1 0 1 1 .181 1.991l-5.185.472a1 1 0 0 1-1.087-.905"></svg:path><svg:path d="M12.828 12.829a1 1 0 0 1-1.414 0L5.757 7.172a1 1 0 1 1 1.415-1.415l5.656 5.657a1 1 0 0 1 0 1.415"></svg:path></svg:g>`,
})
export class PepiconsPopArrowDownRightIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopArrowDownRightCircleIcon],svg[pepicons-pop-arrow-down-right-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M17.098 10.354a1 1 0 0 1 .905 1.087l-.472 5.185a1 1 0 1 1-1.991-.18l.471-5.186a1 1 0 0 1 1.087-.906"></svg:path><svg:path d="M10.354 17.098a1 1 0 0 1 .906-1.087l5.185-.471a1 1 0 1 1 .181 1.991l-5.185.472a1 1 0 0 1-1.087-.905"></svg:path><svg:path d="M15.828 15.829a1 1 0 0 1-1.414 0l-5.657-5.657a1 1 0 1 1 1.415-1.415l5.656 5.657a1 1 0 0 1 0 1.415"></svg:path><svg:path d="M13 24c6.075 0 11-4.925 11-11S19.075 2 13 2S2 6.925 2 13s4.925 11 11 11m0 2c7.18 0 13-5.82 13-13S20.18 0 13 0S0 5.82 0 13s5.82 13 13 13"></svg:path></svg:g>`,
})
export class PepiconsPopArrowDownRightCircleIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopArrowDownRightCircleFilledIcon],svg[pepicons-pop-arrow-down-right-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPopArrowDownRightCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:g fill="#000" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M17.098 10.354a1 1 0 0 1 .905 1.087l-.472 5.185a1 1 0 1 1-1.991-.18l.471-5.186a1 1 0 0 1 1.087-.906"></svg:path><svg:path d="M10.354 17.098a1 1 0 0 1 .906-1.087l5.185-.471a1 1 0 1 1 .181 1.991l-5.185.472a1 1 0 0 1-1.087-.905"></svg:path><svg:path d="M15.828 15.829a1 1 0 0 1-1.414 0l-5.657-5.657a1 1 0 1 1 1.415-1.415l5.656 5.657a1 1 0 0 1 0 1.415"></svg:path></svg:g></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPopArrowDownRightCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPopArrowDownRightCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopArrowDownRightCircleOffIcon],svg[pepicons-pop-arrow-down-right-circle-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M17.098 10.354a1 1 0 0 1 .905 1.087l-.472 5.185a1 1 0 1 1-1.991-.18l.471-5.186a1 1 0 0 1 1.087-.906" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M10.354 17.098a1 1 0 0 1 .906-1.087l5.185-.471a1 1 0 1 1 .181 1.991l-5.185.472a1 1 0 0 1-1.087-.905" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M15.828 15.829a1 1 0 0 1-1.414 0l-5.657-5.657a1 1 0 1 1 1.415-1.415l5.656 5.657a1 1 0 0 1 0 1.415" clip-rule="evenodd"></svg:path><svg:path d="M4.293 5.707a1 1 0 0 1 1.414-1.414l16 16a1 1 0 0 1-1.414 1.414z"></svg:path><svg:path fill-rule="evenodd" d="M13 24c6.075 0 11-4.925 11-11S19.075 2 13 2S2 6.925 2 13s4.925 11 11 11m0 2c7.18 0 13-5.82 13-13S20.18 0 13 0S0 5.82 0 13s5.82 13 13 13" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPopArrowDownRightCircleOffIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopArrowDownRightOffIcon],svg[pepicons-pop-arrow-down-right-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M14.098 7.354a1 1 0 0 1 .905 1.087l-.472 5.185a1 1 0 1 1-1.991-.18l.471-5.186a1 1 0 0 1 1.087-.906" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M7.354 14.098a1 1 0 0 1 .906-1.087l5.185-.471a1 1 0 1 1 .181 1.991l-5.185.472a1 1 0 0 1-1.087-.905" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M12.828 12.829a1 1 0 0 1-1.414 0L5.757 7.172a1 1 0 1 1 1.415-1.415l5.656 5.657a1 1 0 0 1 0 1.415" clip-rule="evenodd"></svg:path><svg:path d="M1.293 2.707a1 1 0 0 1 1.414-1.414l16 16a1 1 0 0 1-1.414 1.414z"></svg:path></svg:g>`,
})
export class PepiconsPopArrowDownRightOffIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopArrowLeftIcon],svg[pepicons-pop-arrow-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M8.974 14.768a1 1 0 0 1-1.409-.128l-3.333-4a1 1 0 1 1 1.536-1.28l3.334 4a1 1 0 0 1-.128 1.408"></svg:path><svg:path d="M8.974 5.232a1 1 0 0 1 .128 1.408l-3.334 4a1 1 0 1 1-1.536-1.28l3.333-4a1 1 0 0 1 1.409-.128"></svg:path><svg:path d="M6 10a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1"></svg:path></svg:g>`,
})
export class PepiconsPopArrowLeftIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopArrowLeftCircleIcon],svg[pepicons-pop-arrow-left-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M11.974 17.768a1 1 0 0 1-1.409-.128l-3.333-4a1 1 0 1 1 1.536-1.28l3.334 4a1 1 0 0 1-.128 1.408"></svg:path><svg:path d="M11.974 8.232a1 1 0 0 1 .128 1.408l-3.334 4a1 1 0 1 1-1.536-1.28l3.333-4a1 1 0 0 1 1.409-.128"></svg:path><svg:path d="M9 13a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2h-8a1 1 0 0 1-1-1"></svg:path><svg:path d="M13 24c6.075 0 11-4.925 11-11S19.075 2 13 2S2 6.925 2 13s4.925 11 11 11m0 2c7.18 0 13-5.82 13-13S20.18 0 13 0S0 5.82 0 13s5.82 13 13 13"></svg:path></svg:g>`,
})
export class PepiconsPopArrowLeftCircleIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopArrowLeftCircleFilledIcon],svg[pepicons-pop-arrow-left-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPopArrowLeftCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:g fill="#000" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M11.974 17.768a1 1 0 0 1-1.409-.128l-3.333-4a1 1 0 1 1 1.536-1.28l3.334 4a1 1 0 0 1-.128 1.408"></svg:path><svg:path d="M11.974 8.232a1 1 0 0 1 .128 1.408l-3.334 4a1 1 0 1 1-1.536-1.28l3.333-4a1 1 0 0 1 1.409-.128"></svg:path><svg:path d="M9 13a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2h-8a1 1 0 0 1-1-1"></svg:path></svg:g></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPopArrowLeftCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPopArrowLeftCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopArrowLeftCircleOffIcon],svg[pepicons-pop-arrow-left-circle-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M11.974 17.768a1 1 0 0 1-1.409-.128l-3.333-4a1 1 0 1 1 1.536-1.28l3.334 4a1 1 0 0 1-.128 1.408" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M11.974 8.232a1 1 0 0 1 .128 1.408l-3.334 4a1 1 0 1 1-1.536-1.28l3.333-4a1 1 0 0 1 1.409-.128" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M9 13a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2h-8a1 1 0 0 1-1-1" clip-rule="evenodd"></svg:path><svg:path d="M4.293 5.707a1 1 0 0 1 1.414-1.414l16 16a1 1 0 0 1-1.414 1.414z"></svg:path><svg:path fill-rule="evenodd" d="M13 24c6.075 0 11-4.925 11-11S19.075 2 13 2S2 6.925 2 13s4.925 11 11 11m0 2c7.18 0 13-5.82 13-13S20.18 0 13 0S0 5.82 0 13s5.82 13 13 13" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPopArrowLeftCircleOffIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopArrowLeftOffIcon],svg[pepicons-pop-arrow-left-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M8.974 14.768a1 1 0 0 1-1.409-.128l-3.333-4a1 1 0 1 1 1.536-1.28l3.334 4a1 1 0 0 1-.128 1.408" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M8.974 5.232a1 1 0 0 1 .128 1.408l-3.334 4a1 1 0 1 1-1.536-1.28l3.333-4a1 1 0 0 1 1.409-.128" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M6 10a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1" clip-rule="evenodd"></svg:path><svg:path d="M1.293 2.707a1 1 0 0 1 1.414-1.414l16 16a1 1 0 0 1-1.414 1.414z"></svg:path></svg:g>`,
})
export class PepiconsPopArrowLeftOffIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopArrowRightIcon],svg[pepicons-pop-arrow-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M11.026 5.232a1 1 0 0 1 1.409.128l3.333 4a1 1 0 0 1-1.536 1.28l-3.334-4a1 1 0 0 1 .128-1.408"></svg:path><svg:path d="M11.026 14.768a1 1 0 0 1-.128-1.408l3.334-4a1 1 0 0 1 1.536 1.28l-3.333 4a1 1 0 0 1-1.409.128"></svg:path><svg:path d="M14 10a1 1 0 0 1-1 1H5a1 1 0 1 1 0-2h8a1 1 0 0 1 1 1"></svg:path></svg:g>`,
})
export class PepiconsPopArrowRightIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopArrowRightCircleIcon],svg[pepicons-pop-arrow-right-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M14.026 8.232a1 1 0 0 1 1.409.128l3.333 4a1 1 0 0 1-1.536 1.28l-3.334-4a1 1 0 0 1 .128-1.408"></svg:path><svg:path d="M14.026 17.768a1 1 0 0 1-.128-1.408l3.334-4a1 1 0 0 1 1.536 1.28l-3.333 4a1 1 0 0 1-1.409.128"></svg:path><svg:path d="M17 13a1 1 0 0 1-1 1H8a1 1 0 1 1 0-2h8a1 1 0 0 1 1 1"></svg:path><svg:path d="M13 24c6.075 0 11-4.925 11-11S19.075 2 13 2S2 6.925 2 13s4.925 11 11 11m0 2c7.18 0 13-5.82 13-13S20.18 0 13 0S0 5.82 0 13s5.82 13 13 13"></svg:path></svg:g>`,
})
export class PepiconsPopArrowRightCircleIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopArrowRightCircleFilledIcon],svg[pepicons-pop-arrow-right-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPopArrowRightCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:g fill="#000" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M14.026 8.232a1 1 0 0 1 1.409.128l3.333 4a1 1 0 0 1-1.536 1.28l-3.334-4a1 1 0 0 1 .128-1.408"></svg:path><svg:path d="M14.026 17.768a1 1 0 0 1-.128-1.408l3.334-4a1 1 0 0 1 1.536 1.28l-3.333 4a1 1 0 0 1-1.409.128"></svg:path><svg:path d="M17 13a1 1 0 0 1-1 1H8a1 1 0 1 1 0-2h8a1 1 0 0 1 1 1"></svg:path></svg:g></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPopArrowRightCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPopArrowRightCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopArrowRightCircleOffIcon],svg[pepicons-pop-arrow-right-circle-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M14.026 8.232a1 1 0 0 1 1.409.128l3.333 4a1 1 0 0 1-1.536 1.28l-3.334-4a1 1 0 0 1 .128-1.408" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M14.026 17.768a1 1 0 0 1-.128-1.408l3.334-4a1 1 0 0 1 1.536 1.28l-3.333 4a1 1 0 0 1-1.409.128" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M17 13a1 1 0 0 1-1 1H8a1 1 0 1 1 0-2h8a1 1 0 0 1 1 1" clip-rule="evenodd"></svg:path><svg:path d="M4.293 5.707a1 1 0 0 1 1.414-1.414l16 16a1 1 0 0 1-1.414 1.414z"></svg:path><svg:path fill-rule="evenodd" d="M13 24c6.075 0 11-4.925 11-11S19.075 2 13 2S2 6.925 2 13s4.925 11 11 11m0 2c7.18 0 13-5.82 13-13S20.18 0 13 0S0 5.82 0 13s5.82 13 13 13" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPopArrowRightCircleOffIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopArrowRightOffIcon],svg[pepicons-pop-arrow-right-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M11.026 5.232a1 1 0 0 1 1.409.128l3.333 4a1 1 0 0 1-1.536 1.28l-3.334-4a1 1 0 0 1 .128-1.408" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M11.026 14.768a1 1 0 0 1-.128-1.408l3.334-4a1 1 0 0 1 1.536 1.28l-3.333 4a1 1 0 0 1-1.409.128" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M14 10a1 1 0 0 1-1 1H5a1 1 0 1 1 0-2h8a1 1 0 0 1 1 1" clip-rule="evenodd"></svg:path><svg:path d="M1.293 2.707a1 1 0 0 1 1.414-1.414l16 16a1 1 0 0 1-1.414 1.414z"></svg:path></svg:g>`,
})
export class PepiconsPopArrowRightOffIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopArrowSpinIcon],svg[pepicons-pop-arrow-spin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M13.937 4.211a1 1 0 0 1-1.126 1.653A5 5 0 1 0 15 10a1 1 0 1 1 2 0a7 7 0 1 1-3.063-5.789"></svg:path><svg:path d="M13.539 12.506a1 1 0 1 1-1.078-1.685l3.482-2.227a1 1 0 0 1 1.077 1.685z"></svg:path><svg:path d="M18.903 12.41a1 1 0 0 1-1.826.815l-1.508-3.38a1 1 0 1 1 1.826-.815z"></svg:path></svg:g>`,
})
export class PepiconsPopArrowSpinIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopArrowSpinCircleIcon],svg[pepicons-pop-arrow-spin-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M16.937 7.211a1 1 0 0 1-1.126 1.653A5 5 0 1 0 18 13a1 1 0 1 1 2 0a7 7 0 1 1-3.063-5.789"></svg:path><svg:path d="M16.539 15.506a1 1 0 1 1-1.078-1.685l3.482-2.227a1 1 0 0 1 1.077 1.685z"></svg:path><svg:path d="M21.903 15.41a1 1 0 0 1-1.826.815l-1.508-3.38a1 1 0 1 1 1.826-.815z"></svg:path><svg:path fill-rule="evenodd" d="M13 24c6.075 0 11-4.925 11-11S19.075 2 13 2S2 6.925 2 13s4.925 11 11 11m0 2c7.18 0 13-5.82 13-13S20.18 0 13 0S0 5.82 0 13s5.82 13 13 13" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPopArrowSpinCircleIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopArrowSpinCircleFilledIcon],svg[pepicons-pop-arrow-spin-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPopArrowSpinCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:g fill="#000"><svg:path d="M16.937 7.211a1 1 0 0 1-1.126 1.653A5 5 0 1 0 18 13a1 1 0 1 1 2 0a7 7 0 1 1-3.063-5.789"></svg:path><svg:path d="M16.539 15.506a1 1 0 1 1-1.078-1.685l3.482-2.227a1 1 0 0 1 1.077 1.685z"></svg:path><svg:path d="M21.903 15.41a1 1 0 0 1-1.826.815l-1.508-3.38a1 1 0 1 1 1.826-.815z"></svg:path></svg:g></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPopArrowSpinCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPopArrowSpinCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopArrowSpinCircleOffIcon],svg[pepicons-pop-arrow-spin-circle-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M16.937 7.211a1 1 0 0 1-1.126 1.653A5 5 0 1 0 18 13a1 1 0 1 1 2 0a7 7 0 1 1-3.063-5.789"></svg:path><svg:path d="M16.539 15.506a1 1 0 1 1-1.078-1.685l3.482-2.227a1 1 0 0 1 1.077 1.685z"></svg:path><svg:path d="M21.903 15.41a1 1 0 0 1-1.826.815l-1.508-3.38a1 1 0 1 1 1.826-.815zM4.293 5.707a1 1 0 0 1 1.414-1.414l16 16a1 1 0 0 1-1.414 1.414z"></svg:path><svg:path fill-rule="evenodd" d="M13 24c6.075 0 11-4.925 11-11S19.075 2 13 2S2 6.925 2 13s4.925 11 11 11m0 2c7.18 0 13-5.82 13-13S20.18 0 13 0S0 5.82 0 13s5.82 13 13 13" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPopArrowSpinCircleOffIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopArrowSpinOffIcon],svg[pepicons-pop-arrow-spin-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M13.937 4.211a1 1 0 0 1-1.126 1.653A5 5 0 1 0 15 10a1 1 0 1 1 2 0a7 7 0 1 1-3.063-5.789"></svg:path><svg:path d="M13.539 12.506a1 1 0 1 1-1.078-1.685l3.482-2.227a1 1 0 0 1 1.077 1.685z"></svg:path><svg:path d="M18.903 12.41a1 1 0 0 1-1.826.815l-1.508-3.38a1 1 0 1 1 1.826-.815zM1.293 2.707a1 1 0 0 1 1.414-1.414l16 16a1 1 0 0 1-1.414 1.414z"></svg:path></svg:g>`,
})
export class PepiconsPopArrowSpinOffIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopArrowUpIcon],svg[pepicons-pop-arrow-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M5.232 8.974a1 1 0 0 1 .128-1.409l4-3.333a1 1 0 1 1 1.28 1.536l-4 3.334a1 1 0 0 1-1.408-.128"></svg:path><svg:path d="M14.768 8.974a1 1 0 0 1-1.408.128l-4-3.334a1 1 0 1 1 1.28-1.536l4 3.333a1 1 0 0 1 .128 1.409"></svg:path><svg:path d="M10 6a1 1 0 0 1 1 1v8a1 1 0 1 1-2 0V7a1 1 0 0 1 1-1"></svg:path></svg:g>`,
})
export class PepiconsPopArrowUpIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopArrowUpCircleIcon],svg[pepicons-pop-arrow-up-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M8.232 11.974a1 1 0 0 1 .128-1.409l4-3.333a1 1 0 1 1 1.28 1.536l-4 3.334a1 1 0 0 1-1.408-.128"></svg:path><svg:path d="M17.768 11.974a1 1 0 0 1-1.408.128l-4-3.334a1 1 0 1 1 1.28-1.536l4 3.333a1 1 0 0 1 .128 1.409"></svg:path><svg:path d="M13 9a1 1 0 0 1 1 1v8a1 1 0 1 1-2 0v-8a1 1 0 0 1 1-1"></svg:path><svg:path d="M13 24c6.075 0 11-4.925 11-11S19.075 2 13 2S2 6.925 2 13s4.925 11 11 11m0 2c7.18 0 13-5.82 13-13S20.18 0 13 0S0 5.82 0 13s5.82 13 13 13"></svg:path></svg:g>`,
})
export class PepiconsPopArrowUpCircleIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopArrowUpCircleFilledIcon],svg[pepicons-pop-arrow-up-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPopArrowUpCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:g fill="#000" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M8.232 11.974a1 1 0 0 1 .128-1.409l4-3.333a1 1 0 1 1 1.28 1.536l-4 3.334a1 1 0 0 1-1.408-.128"></svg:path><svg:path d="M17.768 11.974a1 1 0 0 1-1.408.128l-4-3.334a1 1 0 1 1 1.28-1.536l4 3.333a1 1 0 0 1 .128 1.409"></svg:path><svg:path d="M13 9a1 1 0 0 1 1 1v8a1 1 0 1 1-2 0v-8a1 1 0 0 1 1-1"></svg:path></svg:g></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPopArrowUpCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPopArrowUpCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopArrowUpCircleOffIcon],svg[pepicons-pop-arrow-up-circle-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M8.232 11.974a1 1 0 0 1 .128-1.409l4-3.333a1 1 0 1 1 1.28 1.536l-4 3.334a1 1 0 0 1-1.408-.128" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M17.768 11.974a1 1 0 0 1-1.408.128l-4-3.334a1 1 0 1 1 1.28-1.536l4 3.333a1 1 0 0 1 .128 1.409" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M13 9a1 1 0 0 1 1 1v8a1 1 0 1 1-2 0v-8a1 1 0 0 1 1-1" clip-rule="evenodd"></svg:path><svg:path d="M4.293 5.707a1 1 0 0 1 1.414-1.414l16 16a1 1 0 0 1-1.414 1.414z"></svg:path><svg:path fill-rule="evenodd" d="M13 24c6.075 0 11-4.925 11-11S19.075 2 13 2S2 6.925 2 13s4.925 11 11 11m0 2c7.18 0 13-5.82 13-13S20.18 0 13 0S0 5.82 0 13s5.82 13 13 13" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPopArrowUpCircleOffIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopArrowUpLeftIcon],svg[pepicons-pop-arrow-up-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M5.903 12.646a1 1 0 0 1-.906-1.087l.472-5.185a1 1 0 0 1 1.991.181l-.471 5.186a1 1 0 0 1-1.086.905"></svg:path><svg:path d="M12.646 5.903a1 1 0 0 1-.905 1.086l-5.186.471a1 1 0 0 1-.181-1.991l5.185-.472a1 1 0 0 1 1.087.906"></svg:path><svg:path d="M7.172 7.172a1 1 0 0 1 1.414 0l5.657 5.656a1 1 0 0 1-1.415 1.415L7.172 8.586a1 1 0 0 1 0-1.414"></svg:path></svg:g>`,
})
export class PepiconsPopArrowUpLeftIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopArrowUpLeftCircleIcon],svg[pepicons-pop-arrow-up-left-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M8.903 15.646a1 1 0 0 1-.906-1.087l.472-5.185a1 1 0 0 1 1.991.181l-.471 5.186a1 1 0 0 1-1.086.905"></svg:path><svg:path d="M15.646 8.903a1 1 0 0 1-.905 1.086l-5.186.471a1 1 0 0 1-.181-1.991l5.185-.472a1 1 0 0 1 1.087.906"></svg:path><svg:path d="M10.172 10.172a1 1 0 0 1 1.414 0l5.657 5.656a1 1 0 0 1-1.415 1.415l-5.656-5.657a1 1 0 0 1 0-1.414"></svg:path><svg:path d="M13 24c6.075 0 11-4.925 11-11S19.075 2 13 2S2 6.925 2 13s4.925 11 11 11m0 2c7.18 0 13-5.82 13-13S20.18 0 13 0S0 5.82 0 13s5.82 13 13 13"></svg:path></svg:g>`,
})
export class PepiconsPopArrowUpLeftCircleIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopArrowUpLeftCircleFilledIcon],svg[pepicons-pop-arrow-up-left-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPopArrowUpLeftCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:g fill="#000" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M8.903 15.646a1 1 0 0 1-.906-1.087l.472-5.185a1 1 0 0 1 1.991.181l-.471 5.186a1 1 0 0 1-1.086.905"></svg:path><svg:path d="M15.646 8.903a1 1 0 0 1-.905 1.086l-5.186.471a1 1 0 0 1-.181-1.991l5.185-.472a1 1 0 0 1 1.087.906"></svg:path><svg:path d="M10.172 10.172a1 1 0 0 1 1.414 0l5.657 5.656a1 1 0 0 1-1.415 1.415l-5.656-5.657a1 1 0 0 1 0-1.414"></svg:path></svg:g></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPopArrowUpLeftCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPopArrowUpLeftCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopArrowUpLeftCircleOffIcon],svg[pepicons-pop-arrow-up-left-circle-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M8.903 15.646a1 1 0 0 1-.906-1.087l.472-5.185a1 1 0 0 1 1.991.181l-.471 5.186a1 1 0 0 1-1.086.905" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M15.646 8.903a1 1 0 0 1-.905 1.086l-5.186.471a1 1 0 0 1-.181-1.991l5.185-.472a1 1 0 0 1 1.087.906" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M10.172 10.172a1 1 0 0 1 1.414 0l5.657 5.656a1 1 0 0 1-1.415 1.415l-5.656-5.657a1 1 0 0 1 0-1.414" clip-rule="evenodd"></svg:path><svg:path d="M4.293 5.707a1 1 0 0 1 1.414-1.414l16 16a1 1 0 0 1-1.414 1.414z"></svg:path><svg:path fill-rule="evenodd" d="M13 24c6.075 0 11-4.925 11-11S19.075 2 13 2S2 6.925 2 13s4.925 11 11 11m0 2c7.18 0 13-5.82 13-13S20.18 0 13 0S0 5.82 0 13s5.82 13 13 13" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPopArrowUpLeftCircleOffIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopArrowUpLeftOffIcon],svg[pepicons-pop-arrow-up-left-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M5.903 12.646a1 1 0 0 1-.906-1.087l.472-5.185a1 1 0 0 1 1.991.181l-.471 5.186a1 1 0 0 1-1.086.905" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M12.646 5.903a1 1 0 0 1-.905 1.086l-5.186.471a1 1 0 0 1-.181-1.991l5.185-.472a1 1 0 0 1 1.087.906" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M7.172 7.172a1 1 0 0 1 1.414 0l5.657 5.656a1 1 0 0 1-1.415 1.415L7.172 8.586a1 1 0 0 1 0-1.414" clip-rule="evenodd"></svg:path><svg:path d="M1.293 2.707a1 1 0 0 1 1.414-1.414l16 16a1 1 0 0 1-1.414 1.414z"></svg:path></svg:g>`,
})
export class PepiconsPopArrowUpLeftOffIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopArrowUpOffIcon],svg[pepicons-pop-arrow-up-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M5.232 8.974a1 1 0 0 1 .128-1.409l4-3.333a1 1 0 1 1 1.28 1.536l-4 3.334a1 1 0 0 1-1.408-.128" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M14.768 8.974a1 1 0 0 1-1.408.128l-4-3.334a1 1 0 1 1 1.28-1.536l4 3.333a1 1 0 0 1 .128 1.409" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M10 6a1 1 0 0 1 1 1v8a1 1 0 1 1-2 0V7a1 1 0 0 1 1-1" clip-rule="evenodd"></svg:path><svg:path d="M1.293 2.707a1 1 0 0 1 1.414-1.414l16 16a1 1 0 0 1-1.414 1.414z"></svg:path></svg:g>`,
})
export class PepiconsPopArrowUpOffIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopArrowUpRightIcon],svg[pepicons-pop-arrow-up-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M7.354 5.903a1 1 0 0 1 1.087-.906l5.185.472a1 1 0 1 1-.181 1.991l-5.186-.47a1 1 0 0 1-.905-1.087"></svg:path><svg:path d="M14.097 12.646a1 1 0 0 1-1.086-.905l-.471-5.186a1 1 0 1 1 1.991-.181l.472 5.185a1 1 0 0 1-.906 1.087"></svg:path><svg:path d="M12.828 7.172a1 1 0 0 1 0 1.414l-5.656 5.657a1 1 0 0 1-1.415-1.415l5.657-5.656a1 1 0 0 1 1.414 0"></svg:path></svg:g>`,
})
export class PepiconsPopArrowUpRightIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopArrowUpRightCircleIcon],svg[pepicons-pop-arrow-up-right-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M10.354 8.903a1 1 0 0 1 1.087-.906l5.185.472a1 1 0 1 1-.181 1.991l-5.186-.47a1 1 0 0 1-.905-1.087"></svg:path><svg:path d="M17.097 15.646a1 1 0 0 1-1.086-.905l-.471-5.186a1 1 0 1 1 1.991-.181l.472 5.185a1 1 0 0 1-.906 1.087"></svg:path><svg:path d="M15.828 10.172a1 1 0 0 1 0 1.414l-5.656 5.657a1 1 0 0 1-1.415-1.415l5.657-5.656a1 1 0 0 1 1.414 0"></svg:path><svg:path d="M13 24c6.075 0 11-4.925 11-11S19.075 2 13 2S2 6.925 2 13s4.925 11 11 11m0 2c7.18 0 13-5.82 13-13S20.18 0 13 0S0 5.82 0 13s5.82 13 13 13"></svg:path></svg:g>`,
})
export class PepiconsPopArrowUpRightCircleIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopArrowUpRightCircleFilledIcon],svg[pepicons-pop-arrow-up-right-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPopArrowUpRightCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:g fill="#000" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M10.354 8.903a1 1 0 0 1 1.087-.906l5.185.472a1 1 0 1 1-.181 1.991l-5.186-.47a1 1 0 0 1-.905-1.087"></svg:path><svg:path d="M17.097 15.646a1 1 0 0 1-1.086-.905l-.471-5.186a1 1 0 1 1 1.991-.181l.472 5.185a1 1 0 0 1-.906 1.087"></svg:path><svg:path d="M15.828 10.172a1 1 0 0 1 0 1.414l-5.656 5.657a1 1 0 0 1-1.415-1.415l5.657-5.656a1 1 0 0 1 1.414 0"></svg:path></svg:g></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPopArrowUpRightCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPopArrowUpRightCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopArrowUpRightCircleOffIcon],svg[pepicons-pop-arrow-up-right-circle-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M10.354 8.903a1 1 0 0 1 1.087-.906l5.185.472a1 1 0 1 1-.181 1.991l-5.186-.47a1 1 0 0 1-.905-1.087" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M17.097 15.646a1 1 0 0 1-1.086-.905l-.471-5.186a1 1 0 1 1 1.991-.181l.472 5.185a1 1 0 0 1-.906 1.087" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M15.828 10.172a1 1 0 0 1 0 1.414l-5.656 5.657a1 1 0 0 1-1.415-1.415l5.657-5.656a1 1 0 0 1 1.414 0" clip-rule="evenodd"></svg:path><svg:path d="M4.293 5.707a1 1 0 0 1 1.414-1.414l16 16a1 1 0 0 1-1.414 1.414z"></svg:path><svg:path fill-rule="evenodd" d="M13 24c6.075 0 11-4.925 11-11S19.075 2 13 2S2 6.925 2 13s4.925 11 11 11m0 2c7.18 0 13-5.82 13-13S20.18 0 13 0S0 5.82 0 13s5.82 13 13 13" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPopArrowUpRightCircleOffIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopArrowUpRightOffIcon],svg[pepicons-pop-arrow-up-right-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M7.354 5.903a1 1 0 0 1 1.087-.906l5.185.472a1 1 0 1 1-.181 1.991l-5.186-.47a1 1 0 0 1-.905-1.087" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M14.097 12.646a1 1 0 0 1-1.086-.905l-.471-5.186a1 1 0 1 1 1.991-.181l.472 5.185a1 1 0 0 1-.906 1.087" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M12.828 7.172a1 1 0 0 1 0 1.414l-5.656 5.657a1 1 0 0 1-1.415-1.415l5.657-5.656a1 1 0 0 1 1.414 0" clip-rule="evenodd"></svg:path><svg:path d="M1.293 2.707a1 1 0 0 1 1.414-1.414l16 16a1 1 0 0 1-1.414 1.414z"></svg:path></svg:g>`,
})
export class PepiconsPopArrowUpRightOffIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopArrowsSpinIcon],svg[pepicons-pop-arrows-spin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M5.05 14.95a1 1 0 1 1 1.414-1.414A5 5 0 0 0 15 10a1 1 0 1 1 2 0a7 7 0 0 1-11.95 4.95"></svg:path><svg:path d="M13.559 12.832a1 1 0 1 1-1.11-1.664l3-2a1 1 0 1 1 1.11 1.664z"></svg:path><svg:path d="M18.832 12.445a1 1 0 0 1-1.664 1.11l-2-3a1 1 0 1 1 1.664-1.11zm-3.975-7.594a1 1 0 1 1-1.414 1.414a5 5 0 0 0-8.536 3.536a1 1 0 1 1-2 0a7 7 0 0 1 11.95-4.95"></svg:path><svg:path d="M6.349 6.969a1 1 0 0 1 1.11 1.664l-3.001 2a1 1 0 1 1-1.11-1.664z"></svg:path><svg:path d="M1.075 7.356a1 1 0 1 1 1.664-1.11l2 3a1 1 0 1 1-1.664 1.11z"></svg:path></svg:g>`,
})
export class PepiconsPopArrowsSpinIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopArrowsSpinCircleIcon],svg[pepicons-pop-arrows-spin-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M8.05 17.95a1 1 0 1 1 1.414-1.415A5 5 0 0 0 18 13a1 1 0 1 1 2 0a7 7 0 0 1-11.95 4.95"></svg:path><svg:path d="M16.559 15.832a1 1 0 1 1-1.11-1.664l3-2a1 1 0 1 1 1.11 1.664z"></svg:path><svg:path d="M21.832 15.445a1 1 0 0 1-1.664 1.11l-2-3a1 1 0 1 1 1.664-1.11zm-3.975-7.594a1 1 0 1 1-1.414 1.414a5 5 0 0 0-8.536 3.536a1 1 0 1 1-2 0a7 7 0 0 1 11.95-4.95"></svg:path><svg:path d="M9.349 9.969a1 1 0 0 1 1.11 1.664l-3.001 2a1 1 0 1 1-1.11-1.664z"></svg:path><svg:path d="M4.075 10.356a1 1 0 1 1 1.664-1.11l2 3a1 1 0 1 1-1.664 1.11z"></svg:path><svg:path fill-rule="evenodd" d="M13 24c6.075 0 11-4.925 11-11S19.075 2 13 2S2 6.925 2 13s4.925 11 11 11m0 2c7.18 0 13-5.82 13-13S20.18 0 13 0S0 5.82 0 13s5.82 13 13 13" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPopArrowsSpinCircleIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopArrowsSpinCircleFilledIcon],svg[pepicons-pop-arrows-spin-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPopArrowsSpinCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:g fill="#000"><svg:path d="M8.05 17.95a1 1 0 1 1 1.414-1.415A5 5 0 0 0 18 13a1 1 0 1 1 2 0a7 7 0 0 1-11.95 4.95"></svg:path><svg:path d="M16.559 15.832a1 1 0 1 1-1.11-1.664l3-2a1 1 0 1 1 1.11 1.664z"></svg:path><svg:path d="M21.832 15.445a1 1 0 0 1-1.664 1.11l-2-3a1 1 0 1 1 1.664-1.11zm-3.975-7.594a1 1 0 1 1-1.414 1.414a5 5 0 0 0-8.536 3.536a1 1 0 1 1-2 0a7 7 0 0 1 11.95-4.95"></svg:path><svg:path d="M9.349 9.969a1 1 0 0 1 1.11 1.664l-3.001 2a1 1 0 1 1-1.11-1.664z"></svg:path><svg:path d="M4.075 10.356a1 1 0 1 1 1.664-1.11l2 3a1 1 0 1 1-1.664 1.11z"></svg:path></svg:g></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPopArrowsSpinCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPopArrowsSpinCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopArrowsSpinCircleOffIcon],svg[pepicons-pop-arrows-spin-circle-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M8.05 17.95a1 1 0 1 1 1.414-1.415A5 5 0 0 0 18 13a1 1 0 1 1 2 0a7 7 0 0 1-11.95 4.95"></svg:path><svg:path d="M16.559 15.832a1 1 0 1 1-1.11-1.664l3-2a1 1 0 1 1 1.11 1.664z"></svg:path><svg:path d="M21.832 15.445a1 1 0 0 1-1.664 1.11l-2-3a1 1 0 1 1 1.664-1.11zm-3.975-7.594a1 1 0 1 1-1.414 1.414a5 5 0 0 0-8.536 3.536a1 1 0 1 1-2 0a7 7 0 0 1 11.95-4.95"></svg:path><svg:path d="M9.349 9.969a1 1 0 0 1 1.11 1.664l-3.001 2a1 1 0 1 1-1.11-1.664z"></svg:path><svg:path d="M4.075 10.356a1 1 0 1 1 1.664-1.11l2 3a1 1 0 1 1-1.664 1.11zm.218-4.649a1 1 0 0 1 1.414-1.414l16 16a1 1 0 0 1-1.414 1.414z"></svg:path><svg:path fill-rule="evenodd" d="M13 24c6.075 0 11-4.925 11-11S19.075 2 13 2S2 6.925 2 13s4.925 11 11 11m0 2c7.18 0 13-5.82 13-13S20.18 0 13 0S0 5.82 0 13s5.82 13 13 13" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPopArrowsSpinCircleOffIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopArrowsSpinOffIcon],svg[pepicons-pop-arrows-spin-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M5.05 14.95a1 1 0 1 1 1.414-1.414A5 5 0 0 0 15 10a1 1 0 1 1 2 0a7 7 0 0 1-11.95 4.95"></svg:path><svg:path d="M13.559 12.832a1 1 0 1 1-1.11-1.664l3-2a1 1 0 1 1 1.11 1.664z"></svg:path><svg:path d="M18.832 12.445a1 1 0 0 1-1.664 1.11l-2-3a1 1 0 1 1 1.664-1.11zm-3.975-7.594a1 1 0 1 1-1.414 1.414a5 5 0 0 0-8.536 3.536a1 1 0 1 1-2 0a7 7 0 0 1 11.95-4.95"></svg:path><svg:path d="M6.349 6.969a1 1 0 0 1 1.11 1.664l-3.001 2a1 1 0 1 1-1.11-1.664z"></svg:path><svg:path d="M1.075 7.356a1 1 0 1 1 1.664-1.11l2 3a1 1 0 1 1-1.664 1.11zm.218-4.649a1 1 0 0 1 1.414-1.414l16 16a1 1 0 0 1-1.414 1.414z"></svg:path></svg:g>`,
})
export class PepiconsPopArrowsSpinOffIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopBankIcon],svg[pepicons-pop-bank-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10 3.864L7.402 5.5h5.196zm.267-2.196a.5.5 0 0 0-.533 0L1.939 6.577c-.424.267-.235.923.267.923h15.588c.502 0 .691-.656.267-.923zM1.5 17a1 1 0 0 1 1-1h15a1 1 0 1 1 0 2h-15a1 1 0 0 1-1-1M4 8.5a1 1 0 0 1 1 1v5a1 1 0 1 1-2 0v-5a1 1 0 0 1 1-1m3 0a1 1 0 0 1 1 1v5a1 1 0 1 1-2 0v-5a1 1 0 0 1 1-1m3 0a1 1 0 0 1 1 1v5a1 1 0 1 1-2 0v-5a1 1 0 0 1 1-1m3 0a1 1 0 0 1 1 1v5a1 1 0 1 1-2 0v-5a1 1 0 0 1 1-1m3 0a1 1 0 0 1 1 1v5a1 1 0 1 1-2 0v-5a1 1 0 0 1 1-1" clip-rule="evenodd"></svg:path>`,
})
export class PepiconsPopBankIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopBankCircleIcon],svg[pepicons-pop-bank-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M13 6.864L10.402 8.5h5.196zm.267-2.196a.5.5 0 0 0-.533 0L4.939 9.577c-.424.267-.235.923.267.923h15.588c.502 0 .691-.656.267-.923zM4.5 20a1 1 0 0 1 1-1h15a1 1 0 1 1 0 2h-15a1 1 0 0 1-1-1M7 11.5a1 1 0 0 1 1 1v5a1 1 0 1 1-2 0v-5a1 1 0 0 1 1-1m3 0a1 1 0 0 1 1 1v5a1 1 0 1 1-2 0v-5a1 1 0 0 1 1-1m3 0a1 1 0 0 1 1 1v5a1 1 0 1 1-2 0v-5a1 1 0 0 1 1-1m3 0a1 1 0 0 1 1 1v5a1 1 0 1 1-2 0v-5a1 1 0 0 1 1-1m3 0a1 1 0 0 1 1 1v5a1 1 0 1 1-2 0v-5a1 1 0 0 1 1-1"></svg:path><svg:path d="M13 24c6.075 0 11-4.925 11-11S19.075 2 13 2S2 6.925 2 13s4.925 11 11 11m0 2c7.18 0 13-5.82 13-13S20.18 0 13 0S0 5.82 0 13s5.82 13 13 13"></svg:path></svg:g>`,
})
export class PepiconsPopBankCircleIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopBankCircleFilledIcon],svg[pepicons-pop-bank-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPopBankCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:path fill="#000" fill-rule="evenodd" d="M13 6.864L10.402 8.5h5.196zm.267-2.196a.5.5 0 0 0-.533 0L4.939 9.577c-.424.267-.235.923.267.923h15.588c.502 0 .691-.656.267-.923zM4.5 20a1 1 0 0 1 1-1h15a1 1 0 1 1 0 2h-15a1 1 0 0 1-1-1M7 11.5a1 1 0 0 1 1 1v5a1 1 0 1 1-2 0v-5a1 1 0 0 1 1-1m3 0a1 1 0 0 1 1 1v5a1 1 0 1 1-2 0v-5a1 1 0 0 1 1-1m3 0a1 1 0 0 1 1 1v5a1 1 0 1 1-2 0v-5a1 1 0 0 1 1-1m3 0a1 1 0 0 1 1 1v5a1 1 0 1 1-2 0v-5a1 1 0 0 1 1-1m3 0a1 1 0 0 1 1 1v5a1 1 0 1 1-2 0v-5a1 1 0 0 1 1-1" clip-rule="evenodd"></svg:path></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPopBankCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPopBankCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopBankCircleOffIcon],svg[pepicons-pop-bank-circle-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M13 6.864L10.402 8.5h5.196zm.267-2.196a.5.5 0 0 0-.533 0L4.939 9.577c-.424.267-.235.923.267.923h15.588c.502 0 .691-.656.267-.923zM4.5 20a1 1 0 0 1 1-1h15a1 1 0 1 1 0 2h-15a1 1 0 0 1-1-1M7 11.5a1 1 0 0 1 1 1v5a1 1 0 1 1-2 0v-5a1 1 0 0 1 1-1m3 0a1 1 0 0 1 1 1v5a1 1 0 1 1-2 0v-5a1 1 0 0 1 1-1m3 0a1 1 0 0 1 1 1v5a1 1 0 1 1-2 0v-5a1 1 0 0 1 1-1m3 0a1 1 0 0 1 1 1v5a1 1 0 1 1-2 0v-5a1 1 0 0 1 1-1m3 0a1 1 0 0 1 1 1v5a1 1 0 1 1-2 0v-5a1 1 0 0 1 1-1" clip-rule="evenodd"></svg:path><svg:path d="M4.293 5.707a1 1 0 0 1 1.414-1.414l16 16a1 1 0 0 1-1.414 1.414z"></svg:path><svg:path fill-rule="evenodd" d="M13 24c6.075 0 11-4.925 11-11S19.075 2 13 2S2 6.925 2 13s4.925 11 11 11m0 2c7.18 0 13-5.82 13-13S20.18 0 13 0S0 5.82 0 13s5.82 13 13 13" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPopBankCircleOffIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopBankOffIcon],svg[pepicons-pop-bank-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M10 3.864L7.402 5.5h5.196zm.267-2.196a.5.5 0 0 0-.533 0L1.939 6.577c-.424.267-.235.923.267.923h15.588c.502 0 .691-.656.267-.923zM1.5 17a1 1 0 0 1 1-1h15a1 1 0 1 1 0 2h-15a1 1 0 0 1-1-1M4 8.5a1 1 0 0 1 1 1v5a1 1 0 1 1-2 0v-5a1 1 0 0 1 1-1m3 0a1 1 0 0 1 1 1v5a1 1 0 1 1-2 0v-5a1 1 0 0 1 1-1m3 0a1 1 0 0 1 1 1v5a1 1 0 1 1-2 0v-5a1 1 0 0 1 1-1m3 0a1 1 0 0 1 1 1v5a1 1 0 1 1-2 0v-5a1 1 0 0 1 1-1m3 0a1 1 0 0 1 1 1v5a1 1 0 1 1-2 0v-5a1 1 0 0 1 1-1" clip-rule="evenodd"></svg:path><svg:path d="M1.293 2.707a1 1 0 0 1 1.414-1.414l16 16a1 1 0 0 1-1.414 1.414z"></svg:path></svg:g>`,
})
export class PepiconsPopBankOffIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopBatteryIcon],svg[pepicons-pop-battery-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:rect width="2" height="5" x="17" y="7.5" rx=".5"></svg:rect><svg:path d="M4 7.5h3v5H4zm3.5 0h3v5h-3zm3.5 0h3v5h-3z"></svg:path><svg:path fill-rule="evenodd" d="M14 4.5H4a3 3 0 0 0-3 3v5a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-5a3 3 0 0 0-3-3m-11 3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPopBatteryIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopBatteryCircleIcon],svg[pepicons-pop-battery-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:g transform="translate(3 3)"><svg:rect width="2" height="5" x="17" y="7.5" rx=".5"></svg:rect><svg:path d="M4 7.5h3v5H4zm3.5 0h3v5h-3zm3.5 0h3v5h-3z"></svg:path><svg:path fill-rule="evenodd" d="M14 4.5H4a3 3 0 0 0-3 3v5a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-5a3 3 0 0 0-3-3m-11 3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1z" clip-rule="evenodd"></svg:path></svg:g><svg:path fill-rule="evenodd" d="M13 24c6.075 0 11-4.925 11-11S19.075 2 13 2S2 6.925 2 13s4.925 11 11 11m0 2c7.18 0 13-5.82 13-13S20.18 0 13 0S0 5.82 0 13s5.82 13 13 13" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPopBatteryCircleIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopBatteryCircleFilledIcon],svg[pepicons-pop-battery-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPopBatteryCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:g fill="#000" transform="translate(3 3)"><svg:rect width="2" height="5" x="17" y="7.5" rx=".5"></svg:rect><svg:path d="M4 7.5h3v5H4zm3.5 0h3v5h-3zm3.5 0h3v5h-3z"></svg:path><svg:path fill-rule="evenodd" d="M14 4.5H4a3 3 0 0 0-3 3v5a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-5a3 3 0 0 0-3-3m-11 3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1z" clip-rule="evenodd"></svg:path></svg:g></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPopBatteryCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPopBatteryCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopBatteryCircleOffIcon],svg[pepicons-pop-battery-circle-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:g transform="translate(3 3)"><svg:rect width="2" height="5" x="17" y="7.5" rx=".5"></svg:rect><svg:path d="M4 7.5h3v5H4zm3.5 0h3v5h-3zm3.5 0h3v5h-3z"></svg:path><svg:path fill-rule="evenodd" d="M14 4.5H4a3 3 0 0 0-3 3v5a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-5a3 3 0 0 0-3-3m-11 3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1z" clip-rule="evenodd"></svg:path><svg:path d="M1.293 2.707a1 1 0 0 1 1.414-1.414l16 16a1 1 0 0 1-1.414 1.414z"></svg:path></svg:g><svg:path fill-rule="evenodd" d="M13 24c6.075 0 11-4.925 11-11S19.075 2 13 2S2 6.925 2 13s4.925 11 11 11m0 2c7.18 0 13-5.82 13-13S20.18 0 13 0S0 5.82 0 13s5.82 13 13 13" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPopBatteryCircleOffIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopBatteryOffIcon],svg[pepicons-pop-battery-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:rect width="2" height="5" x="17" y="7.5" rx=".5"></svg:rect><svg:path d="M4 7.5h3v5H4zm3.5 0h3v5h-3zm3.5 0h3v5h-3z"></svg:path><svg:path fill-rule="evenodd" d="M14 4.5H4a3 3 0 0 0-3 3v5a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-5a3 3 0 0 0-3-3m-11 3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1z" clip-rule="evenodd"></svg:path><svg:path d="M1.293 2.707a1 1 0 0 1 1.414-1.414l16 16a1 1 0 0 1-1.414 1.414z"></svg:path></svg:g>`,
})
export class PepiconsPopBatteryOffIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopBellIcon],svg[pepicons-pop-bell-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M7.5 17a1 1 0 1 1 2 0a.5.5 0 0 0 1 0a1 1 0 1 1 2 0a2.5 2.5 0 0 1-5 0"></svg:path><svg:path fill-rule="evenodd" d="M18 14.5a3.46 3.46 0 0 0-1.5-2.851V9a6 6 0 0 0-6-6h-1a6 6 0 0 0-6 6v2.649A3.46 3.46 0 0 0 2 14.5A2.5 2.5 0 0 0 4.5 17h11a2.5 2.5 0 0 0 2.5-2.5m-3.5-1.618l.59.265l.053.024c.522.237.857.756.857 1.329a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5c0-.573.335-1.092.857-1.33l.053-.023l.59-.265V9a4 4 0 0 1 4-4h1a4 4 0 0 1 4 4z" clip-rule="evenodd"></svg:path><svg:path d="M9 1.5a1 1 0 0 1 2 0V4a1 1 0 1 1-2 0z"></svg:path></svg:g>`,
})
export class PepiconsPopBellIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopBellCircleIcon],svg[pepicons-pop-bell-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M10.5 20a1 1 0 1 1 2 0a.5.5 0 0 0 1 0a1 1 0 1 1 2 0a2.5 2.5 0 0 1-5 0"></svg:path><svg:path fill-rule="evenodd" d="M21 17.5a3.46 3.46 0 0 0-1.5-2.851V12a6 6 0 0 0-6-6h-1a6 6 0 0 0-6 6v2.649A3.46 3.46 0 0 0 5 17.5A2.5 2.5 0 0 0 7.5 20h11a2.5 2.5 0 0 0 2.5-2.5m-3.5-1.618l.59.265l.053.024c.522.236.857.756.857 1.329a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5c0-.573.335-1.093.857-1.33l.053-.023l.59-.265V12a4 4 0 0 1 4-4h1a4 4 0 0 1 4 4z" clip-rule="evenodd"></svg:path><svg:path d="M12 4.5a1 1 0 0 1 2 0V7a1 1 0 1 1-2 0z"></svg:path><svg:path fill-rule="evenodd" d="M13 24c6.075 0 11-4.925 11-11S19.075 2 13 2S2 6.925 2 13s4.925 11 11 11m0 2c7.18 0 13-5.82 13-13S20.18 0 13 0S0 5.82 0 13s5.82 13 13 13" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPopBellCircleIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopBellCircleFilledIcon],svg[pepicons-pop-bell-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPopBellCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:g fill="#000"><svg:path d="M10.5 20a1 1 0 1 1 2 0a.5.5 0 0 0 1 0a1 1 0 1 1 2 0a2.5 2.5 0 0 1-5 0"></svg:path><svg:path fill-rule="evenodd" d="M21 17.5a3.46 3.46 0 0 0-1.5-2.851V12a6 6 0 0 0-6-6h-1a6 6 0 0 0-6 6v2.649A3.46 3.46 0 0 0 5 17.5A2.5 2.5 0 0 0 7.5 20h11a2.5 2.5 0 0 0 2.5-2.5m-3.5-1.618l.59.265l.053.024c.522.236.857.756.857 1.329a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5c0-.573.335-1.093.857-1.33l.053-.023l.59-.265V12a4 4 0 0 1 4-4h1a4 4 0 0 1 4 4z" clip-rule="evenodd"></svg:path><svg:path d="M12 4.5a1 1 0 0 1 2 0V7a1 1 0 1 1-2 0z"></svg:path></svg:g></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPopBellCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPopBellCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopBellCircleOffIcon],svg[pepicons-pop-bell-circle-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M10.5 20a1 1 0 1 1 2 0a.5.5 0 0 0 1 0a1 1 0 1 1 2 0a2.5 2.5 0 0 1-5 0"></svg:path><svg:path fill-rule="evenodd" d="M21 17.5a3.46 3.46 0 0 0-1.5-2.851V12a6 6 0 0 0-6-6h-1a6 6 0 0 0-6 6v2.649A3.46 3.46 0 0 0 5 17.5A2.5 2.5 0 0 0 7.5 20h11a2.5 2.5 0 0 0 2.5-2.5m-3.5-1.618l.59.265l.053.024c.522.236.857.756.857 1.329a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5c0-.573.335-1.093.857-1.33l.053-.023l.59-.265V12a4 4 0 0 1 4-4h1a4 4 0 0 1 4 4z" clip-rule="evenodd"></svg:path><svg:path d="M12 4.5a1 1 0 0 1 2 0V7a1 1 0 1 1-2 0zM4.293 5.707a1 1 0 0 1 1.414-1.414l16 16a1 1 0 0 1-1.414 1.414z"></svg:path><svg:path fill-rule="evenodd" d="M13 24c6.075 0 11-4.925 11-11S19.075 2 13 2S2 6.925 2 13s4.925 11 11 11m0 2c7.18 0 13-5.82 13-13S20.18 0 13 0S0 5.82 0 13s5.82 13 13 13" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPopBellCircleOffIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopBellOffIcon],svg[pepicons-pop-bell-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M7.5 17a1 1 0 1 1 2 0a.5.5 0 0 0 1 0a1 1 0 1 1 2 0a2.5 2.5 0 0 1-5 0"></svg:path><svg:path fill-rule="evenodd" d="M18 14.5a3.46 3.46 0 0 0-1.5-2.851V9a6 6 0 0 0-6-6h-1a6 6 0 0 0-6 6v2.649A3.46 3.46 0 0 0 2 14.5A2.5 2.5 0 0 0 4.5 17h11a2.5 2.5 0 0 0 2.5-2.5m-3.5-1.618l.59.265l.053.024c.522.237.857.756.857 1.329a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5c0-.573.335-1.092.857-1.33l.053-.023l.59-.265V9a4 4 0 0 1 4-4h1a4 4 0 0 1 4 4z" clip-rule="evenodd"></svg:path><svg:path d="M9 1.5a1 1 0 0 1 2 0V4a1 1 0 1 1-2 0zM1.293 2.707a1 1 0 0 1 1.414-1.414l16 16a1 1 0 0 1-1.414 1.414z"></svg:path></svg:g>`,
})
export class PepiconsPopBellOffIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopBicycleIcon],svg[pepicons-pop-bicycle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M13.062 3.936a1 1 0 1 1-.124-1.996C16.828 1.7 19 2.46 19 4.44c0 1.574-.978 2.274-2.855 2.55a1 1 0 1 1-.29-1.98C16.87 4.862 17 4.77 17 4.44c0-.296-1.094-.68-3.938-.504"></svg:path><svg:path fill-rule="evenodd" d="M15.5 20a4.5 4.5 0 1 0 0-9a4.5 4.5 0 0 0 0 9m0-7a2.5 2.5 0 1 1 0 5a2.5 2.5 0 0 1 0-5m-11 7a4.5 4.5 0 1 0 0-9a4.5 4.5 0 0 0 0 9m0-7a2.5 2.5 0 1 1 0 5a2.5 2.5 0 0 1 0-5" clip-rule="evenodd"></svg:path><svg:path d="M5 6.5a1 1 0 0 1 0-2h4a1 1 0 0 1 0 2z"></svg:path><svg:path fill-rule="evenodd" d="M4.5 16.5H10a1 1 0 0 0 .983-1.185l3.864-6.165A1 1 0 0 0 14 7.619H8.45l-.802-2.432a1 1 0 0 0-1.9.627L6.755 8.86l-3.146 6.186A1 1 0 0 0 4.5 16.5m3.138-4.964L6.13 14.5h2.487zm2.536 1.303l2.019-3.22H9.111z" clip-rule="evenodd"></svg:path><svg:path d="m13.98 2.743l2.5 12.562c.261 1.308-1.7 1.698-1.96.39l-2.5-12.562c-.261-1.307 1.7-1.698 1.96-.39"></svg:path></svg:g>`,
})
export class PepiconsPopBicycleIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopBicycleCircleIcon],svg[pepicons-pop-bicycle-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M16.062 6.936a1 1 0 1 1-.124-1.996C19.828 4.7 22 5.46 22 7.44c0 1.574-.978 2.274-2.855 2.55a1 1 0 1 1-.29-1.98C19.87 7.862 20 7.77 20 7.44c0-.296-1.094-.68-3.938-.504"></svg:path><svg:path fill-rule="evenodd" d="M18.5 23a4.5 4.5 0 1 0 0-9a4.5 4.5 0 0 0 0 9m0-7a2.5 2.5 0 1 1 0 5a2.5 2.5 0 0 1 0-5m-11 7a4.5 4.5 0 1 0 0-9a4.5 4.5 0 0 0 0 9m0-7a2.5 2.5 0 1 1 0 5a2.5 2.5 0 0 1 0-5" clip-rule="evenodd"></svg:path><svg:path d="M8 9.5a1 1 0 0 1 0-2h4a1 1 0 0 1 0 2z"></svg:path><svg:path fill-rule="evenodd" d="M7.5 19.5H13a1 1 0 0 0 .983-1.185l3.864-6.165A1 1 0 0 0 17 10.619h-5.55l-.802-2.432a1 1 0 0 0-1.9.627l1.007 3.047l-3.146 6.186A1 1 0 0 0 7.5 19.5m3.138-4.964L9.13 17.5h2.487zm2.536 1.303l2.019-3.22h-3.082z" clip-rule="evenodd"></svg:path><svg:path d="m16.98 5.743l2.5 12.562c.261 1.308-1.7 1.698-1.96.39l-2.5-12.562c-.261-1.307 1.7-1.698 1.96-.39"></svg:path><svg:path fill-rule="evenodd" d="M13 24c6.075 0 11-4.925 11-11S19.075 2 13 2S2 6.925 2 13s4.925 11 11 11m0 2c7.18 0 13-5.82 13-13S20.18 0 13 0S0 5.82 0 13s5.82 13 13 13" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPopBicycleCircleIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopBicycleCircleFilledIcon],svg[pepicons-pop-bicycle-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPopBicycleCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:g fill="#000"><svg:path d="M16.062 6.936a1 1 0 1 1-.124-1.996C19.828 4.7 22 5.46 22 7.44c0 1.574-.978 2.274-2.855 2.55a1 1 0 1 1-.29-1.98C19.87 7.862 20 7.77 20 7.44c0-.296-1.094-.68-3.938-.504"></svg:path><svg:path fill-rule="evenodd" d="M18.5 23a4.5 4.5 0 1 0 0-9a4.5 4.5 0 0 0 0 9m0-7a2.5 2.5 0 1 1 0 5a2.5 2.5 0 0 1 0-5m-11 7a4.5 4.5 0 1 0 0-9a4.5 4.5 0 0 0 0 9m0-7a2.5 2.5 0 1 1 0 5a2.5 2.5 0 0 1 0-5" clip-rule="evenodd"></svg:path><svg:path d="M8 9.5a1 1 0 0 1 0-2h4a1 1 0 0 1 0 2z"></svg:path><svg:path fill-rule="evenodd" d="M7.5 19.5H13a1 1 0 0 0 .983-1.185l3.864-6.165A1 1 0 0 0 17 10.619h-5.55l-.802-2.432a1 1 0 0 0-1.9.627l1.007 3.047l-3.146 6.186A1 1 0 0 0 7.5 19.5m3.138-4.964L9.13 17.5h2.487zm2.536 1.303l2.019-3.22h-3.082z" clip-rule="evenodd"></svg:path><svg:path d="m16.98 5.743l2.5 12.562c.261 1.308-1.7 1.698-1.96.39l-2.5-12.562c-.261-1.307 1.7-1.698 1.96-.39"></svg:path></svg:g></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPopBicycleCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPopBicycleCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopBicycleCircleOffIcon],svg[pepicons-pop-bicycle-circle-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M16.062 6.936a1 1 0 1 1-.124-1.996C19.828 4.7 22 5.46 22 7.44c0 1.574-.978 2.274-2.855 2.55a1 1 0 1 1-.29-1.98C19.87 7.862 20 7.77 20 7.44c0-.296-1.094-.68-3.938-.504"></svg:path><svg:path fill-rule="evenodd" d="M18.5 23a4.5 4.5 0 1 0 0-9a4.5 4.5 0 0 0 0 9m0-7a2.5 2.5 0 1 1 0 5a2.5 2.5 0 0 1 0-5m-11 7a4.5 4.5 0 1 0 0-9a4.5 4.5 0 0 0 0 9m0-7a2.5 2.5 0 1 1 0 5a2.5 2.5 0 0 1 0-5" clip-rule="evenodd"></svg:path><svg:path d="M8 9.5a1 1 0 0 1 0-2h4a1 1 0 0 1 0 2z"></svg:path><svg:path fill-rule="evenodd" d="M7.5 19.5H13a1 1 0 0 0 .983-1.185l3.864-6.165A1 1 0 0 0 17 10.619h-5.55l-.802-2.432a1 1 0 0 0-1.9.627l1.007 3.047l-3.146 6.186A1 1 0 0 0 7.5 19.5m3.138-4.964L9.13 17.5h2.487zm2.536 1.303l2.019-3.22h-3.082z" clip-rule="evenodd"></svg:path><svg:path d="m16.98 5.743l2.5 12.562c.261 1.308-1.7 1.698-1.96.39l-2.5-12.562c-.261-1.307 1.7-1.698 1.96-.39"></svg:path><svg:path d="M4.293 5.707a1 1 0 0 1 1.414-1.414l16 16a1 1 0 0 1-1.414 1.414z"></svg:path><svg:path fill-rule="evenodd" d="M13 24c6.075 0 11-4.925 11-11S19.075 2 13 2S2 6.925 2 13s4.925 11 11 11m0 2c7.18 0 13-5.82 13-13S20.18 0 13 0S0 5.82 0 13s5.82 13 13 13" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPopBicycleCircleOffIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopBicycleOffIcon],svg[pepicons-pop-bicycle-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M13.062 3.936a1 1 0 1 1-.124-1.996C16.828 1.7 19 2.46 19 4.44c0 1.574-.978 2.274-2.855 2.55a1 1 0 1 1-.29-1.98C16.87 4.862 17 4.77 17 4.44c0-.296-1.094-.68-3.938-.504"></svg:path><svg:path fill-rule="evenodd" d="M15.5 20a4.5 4.5 0 1 0 0-9a4.5 4.5 0 0 0 0 9m0-7a2.5 2.5 0 1 1 0 5a2.5 2.5 0 0 1 0-5m-11 7a4.5 4.5 0 1 0 0-9a4.5 4.5 0 0 0 0 9m0-7a2.5 2.5 0 1 1 0 5a2.5 2.5 0 0 1 0-5" clip-rule="evenodd"></svg:path><svg:path d="M5 6.5a1 1 0 0 1 0-2h4a1 1 0 0 1 0 2z"></svg:path><svg:path fill-rule="evenodd" d="M4.5 16.5H10a1 1 0 0 0 .983-1.185l3.864-6.165A1 1 0 0 0 14 7.619H8.45l-.802-2.432a1 1 0 0 0-1.9.627L6.755 8.86l-3.146 6.186A1 1 0 0 0 4.5 16.5m3.138-4.964L6.13 14.5h2.487zm2.536 1.303l2.019-3.22H9.111z" clip-rule="evenodd"></svg:path><svg:path d="m13.98 2.743l2.5 12.562c.261 1.308-1.7 1.698-1.96.39l-2.5-12.562c-.261-1.307 1.7-1.698 1.96-.39"></svg:path><svg:path d="M1.293 2.707a1 1 0 0 1 1.414-1.414l16 16a1 1 0 0 1-1.414 1.414z"></svg:path></svg:g>`,
})
export class PepiconsPopBicycleOffIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopBluetoothIcon],svg[pepicons-pop-bluetooth-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="m11.535 10.795l5.572-4.25a1 1 0 0 0 0-1.59L11.535.705A1 1 0 0 0 9.93 1.5V10a1 1 0 0 0 1.606.795m.394-7.274l2.92 2.229l-2.92 2.23z" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="m11.535 19.295l5.572-4.25a1 1 0 0 0 0-1.59l-5.572-4.25A1 1 0 0 0 9.93 10v8.5a1 1 0 0 0 1.606.795m.394-7.274l2.922 2.229l-2.922 2.23z" clip-rule="evenodd"></svg:path><svg:path d="M11.526 9.198a1 1 0 1 1-1.195 1.604L3.366 5.607a1 1 0 1 1 1.196-1.603z"></svg:path><svg:path d="M11.526 10.802a1 1 0 1 0-1.195-1.604l-6.965 5.195a1 1 0 0 0 1.196 1.603z"></svg:path></svg:g>`,
})
export class PepiconsPopBluetoothIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopBluetoothCircleIcon],svg[pepicons-pop-bluetooth-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="m14.535 13.795l5.572-4.25a1 1 0 0 0 0-1.59l-5.572-4.25a1 1 0 0 0-1.606.795V13a1 1 0 0 0 1.606.795m.394-7.274L17.85 8.75l-2.922 2.23z" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="m14.535 22.295l5.572-4.25a1 1 0 0 0 0-1.59l-5.572-4.25A1 1 0 0 0 12.93 13v8.5a1 1 0 0 0 1.606.795m.394-7.274l2.922 2.229l-2.922 2.23z" clip-rule="evenodd"></svg:path><svg:path d="M14.526 12.198a1 1 0 1 1-1.195 1.604L6.366 8.607a1 1 0 1 1 1.196-1.603z"></svg:path><svg:path d="M14.526 13.802a1 1 0 1 0-1.195-1.604l-6.965 5.195a1 1 0 0 0 1.196 1.603z"></svg:path><svg:path fill-rule="evenodd" d="M13 24c6.075 0 11-4.925 11-11S19.075 2 13 2S2 6.925 2 13s4.925 11 11 11m0 2c7.18 0 13-5.82 13-13S20.18 0 13 0S0 5.82 0 13s5.82 13 13 13" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPopBluetoothCircleIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopBluetoothCircleFilledIcon],svg[pepicons-pop-bluetooth-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPopBluetoothCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:g fill="#000"><svg:path fill-rule="evenodd" d="m14.535 13.795l5.572-4.25a1 1 0 0 0 0-1.59l-5.572-4.25a1 1 0 0 0-1.606.795V13a1 1 0 0 0 1.606.795m.394-7.274L17.85 8.75l-2.922 2.23z" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="m14.535 22.295l5.572-4.25a1 1 0 0 0 0-1.59l-5.572-4.25A1 1 0 0 0 12.93 13v8.5a1 1 0 0 0 1.606.795m.394-7.274l2.922 2.229l-2.922 2.23z" clip-rule="evenodd"></svg:path><svg:path d="M14.526 12.198a1 1 0 1 1-1.195 1.604L6.366 8.607a1 1 0 1 1 1.196-1.603z"></svg:path><svg:path d="M14.526 13.802a1 1 0 1 0-1.195-1.604l-6.965 5.195a1 1 0 0 0 1.196 1.603z"></svg:path></svg:g></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPopBluetoothCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPopBluetoothCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopBluetoothCircleOffIcon],svg[pepicons-pop-bluetooth-circle-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="m14.535 13.795l5.572-4.25a1 1 0 0 0 0-1.59l-5.572-4.25a1 1 0 0 0-1.606.795V13a1 1 0 0 0 1.606.795m.394-7.274L17.85 8.75l-2.922 2.23z" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="m14.535 22.295l5.572-4.25a1 1 0 0 0 0-1.59l-5.572-4.25A1 1 0 0 0 12.93 13v8.5a1 1 0 0 0 1.606.795m.394-7.274l2.922 2.229l-2.922 2.23z" clip-rule="evenodd"></svg:path><svg:path d="M14.526 12.198a1 1 0 1 1-1.195 1.604L6.366 8.607a1 1 0 1 1 1.196-1.603z"></svg:path><svg:path d="M14.526 13.802a1 1 0 1 0-1.195-1.604l-6.965 5.195a1 1 0 0 0 1.196 1.603z"></svg:path><svg:path d="M4.293 5.707a1 1 0 0 1 1.414-1.414l16 16a1 1 0 0 1-1.414 1.414z"></svg:path><svg:path fill-rule="evenodd" d="M13 24c6.075 0 11-4.925 11-11S19.075 2 13 2S2 6.925 2 13s4.925 11 11 11m0 2c7.18 0 13-5.82 13-13S20.18 0 13 0S0 5.82 0 13s5.82 13 13 13" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPopBluetoothCircleOffIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopBluetoothOffIcon],svg[pepicons-pop-bluetooth-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="m11.535 10.795l5.572-4.25a1 1 0 0 0 0-1.59L11.535.705A1 1 0 0 0 9.93 1.5V10a1 1 0 0 0 1.606.795m.394-7.274l2.92 2.229l-2.92 2.23z" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="m11.535 19.295l5.572-4.25a1 1 0 0 0 0-1.59l-5.572-4.25A1 1 0 0 0 9.93 10v8.5a1 1 0 0 0 1.606.795m.394-7.274l2.922 2.229l-2.922 2.23z" clip-rule="evenodd"></svg:path><svg:path d="M11.526 9.198a1 1 0 1 1-1.195 1.604L3.366 5.607a1 1 0 1 1 1.196-1.603z"></svg:path><svg:path d="M11.526 10.802a1 1 0 1 0-1.195-1.604l-6.965 5.195a1 1 0 0 0 1.196 1.603z"></svg:path><svg:path d="M1.293 2.707a1 1 0 0 1 1.414-1.414l16 16a1 1 0 0 1-1.414 1.414z"></svg:path></svg:g>`,
})
export class PepiconsPopBluetoothOffIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopBookIcon],svg[pepicons-pop-book-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M11 5.297a1 1 0 0 0-.838-.987L2.323 3.026A2 2 0 0 0 0 5v9.737a2 2 0 0 0 1.69 1.975l8.155 1.276A1 1 0 0 0 11 17zm-9 9.44V5l7 1.147v9.684z"></svg:path><svg:path d="M20 5a2 2 0 0 0-2.323-1.974L9.838 4.31A1 1 0 0 0 9 5.297V17a1 1 0 0 0 1.155.988l8.154-1.276A2 2 0 0 0 20 14.737zm-2 9.737l-7 1.094V6.147L18 5z"></svg:path></svg:g>`,
})
export class PepiconsPopBookIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopBookCircleIcon],svg[pepicons-pop-book-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M14 8.297a1 1 0 0 0-.838-.987L5.323 6.026A2 2 0 0 0 3 8v9.737a2 2 0 0 0 1.69 1.976l8.155 1.275A1 1 0 0 0 14 20zm-9 9.44V8l7 1.147v9.684z"></svg:path><svg:path d="M23 8a2 2 0 0 0-2.323-1.974L12.838 7.31a1 1 0 0 0-.838.987V20a1 1 0 0 0 1.155.988l8.154-1.276A2 2 0 0 0 23 17.737zm-2 9.737l-7 1.094V9.147L21 8z"></svg:path><svg:path d="M13 24c6.075 0 11-4.925 11-11S19.075 2 13 2S2 6.925 2 13s4.925 11 11 11m0 2c7.18 0 13-5.82 13-13S20.18 0 13 0S0 5.82 0 13s5.82 13 13 13"></svg:path></svg:g>`,
})
export class PepiconsPopBookCircleIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopBookCircleFilledIcon],svg[pepicons-pop-book-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPopBookCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:g fill="#000" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M14 8.297a1 1 0 0 0-.838-.987L5.323 6.026A2 2 0 0 0 3 8v9.737a2 2 0 0 0 1.69 1.976l8.155 1.275A1 1 0 0 0 14 20zm-9 9.44V8l7 1.147v9.684z"></svg:path><svg:path d="M23 8a2 2 0 0 0-2.323-1.974L12.838 7.31a1 1 0 0 0-.838.987V20a1 1 0 0 0 1.155.988l8.154-1.276A2 2 0 0 0 23 17.737zm-2 9.737l-7 1.094V9.147L21 8z"></svg:path></svg:g></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPopBookCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPopBookCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopBookCircleOffIcon],svg[pepicons-pop-book-circle-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M14 8.297a1 1 0 0 0-.838-.987L5.323 6.026A2 2 0 0 0 3 8v9.737a2 2 0 0 0 1.69 1.976l8.155 1.275A1 1 0 0 0 14 20zm-9 9.44V8l7 1.147v9.684z" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M23 8a2 2 0 0 0-2.323-1.974L12.838 7.31a1 1 0 0 0-.838.987V20a1 1 0 0 0 1.155.988l8.154-1.276A2 2 0 0 0 23 17.737zm-2 9.737l-7 1.094V9.147L21 8z" clip-rule="evenodd"></svg:path><svg:path d="M4.293 5.707a1 1 0 0 1 1.414-1.414l16 16a1 1 0 0 1-1.414 1.414z"></svg:path><svg:path fill-rule="evenodd" d="M13 24c6.075 0 11-4.925 11-11S19.075 2 13 2S2 6.925 2 13s4.925 11 11 11m0 2c7.18 0 13-5.82 13-13S20.18 0 13 0S0 5.82 0 13s5.82 13 13 13" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPopBookCircleOffIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopBookOffIcon],svg[pepicons-pop-book-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M11 5.297a1 1 0 0 0-.838-.987L2.323 3.026A2 2 0 0 0 0 5v9.737a2 2 0 0 0 1.69 1.975l8.155 1.276A1 1 0 0 0 11 17zm-9 9.44V5l7 1.147v9.684z" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M20 5a2 2 0 0 0-2.323-1.974L9.838 4.31A1 1 0 0 0 9 5.297V17a1 1 0 0 0 1.155.988l8.154-1.276A2 2 0 0 0 20 14.737zm-2 9.737l-7 1.094V6.147L18 5z" clip-rule="evenodd"></svg:path><svg:path d="M1.293 2.707a1 1 0 0 1 1.414-1.414l16 16a1 1 0 0 1-1.414 1.414z"></svg:path></svg:g>`,
})
export class PepiconsPopBookOffIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopBookmarkIcon],svg[pepicons-pop-bookmark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m6.245 17.667l3.755-4.2l3.755 4.2c.611.684 1.745.251 1.745-.667V3a1 1 0 0 0-1-1h-9a1 1 0 0 0-1 1v14c0 .918 1.134 1.35 1.745.666M6.5 14.38V4h7v10.381l-2.754-3.08a1 1 0 0 0-1.491 0z" clip-rule="evenodd"></svg:path>`,
})
export class PepiconsPopBookmarkIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopBookmarkCircleIcon],svg[pepicons-pop-bookmark-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="m9.245 20.667l3.755-4.2l3.755 4.2c.612.684 1.745.251 1.745-.667V6a1 1 0 0 0-1-1h-9a1 1 0 0 0-1 1v14c0 .918 1.134 1.35 1.745.666M9.5 17.38V7h7v10.381l-2.754-3.08a1 1 0 0 0-1.491 0z"></svg:path><svg:path d="M13 24c6.075 0 11-4.925 11-11S19.075 2 13 2S2 6.925 2 13s4.925 11 11 11m0 2c7.18 0 13-5.82 13-13S20.18 0 13 0S0 5.82 0 13s5.82 13 13 13"></svg:path></svg:g>`,
})
export class PepiconsPopBookmarkCircleIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopBookmarkCircleFilledIcon],svg[pepicons-pop-bookmark-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPopBookmarkCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:path fill="#000" fill-rule="evenodd" d="m9.245 20.667l3.755-4.2l3.755 4.2c.612.684 1.745.251 1.745-.667V6a1 1 0 0 0-1-1h-9a1 1 0 0 0-1 1v14c0 .918 1.134 1.35 1.745.666M9.5 17.38V7h7v10.381l-2.754-3.08a1 1 0 0 0-1.491 0z" clip-rule="evenodd"></svg:path></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPopBookmarkCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPopBookmarkCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopBookmarkCircleOffIcon],svg[pepicons-pop-bookmark-circle-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="m9.245 20.667l3.755-4.2l3.755 4.2c.612.684 1.745.251 1.745-.667V6a1 1 0 0 0-1-1h-9a1 1 0 0 0-1 1v14c0 .918 1.134 1.35 1.745.666M9.5 17.38V7h7v10.381l-2.754-3.08a1 1 0 0 0-1.491 0z" clip-rule="evenodd"></svg:path><svg:path d="M4.293 5.707a1 1 0 0 1 1.414-1.414l16 16a1 1 0 0 1-1.414 1.414z"></svg:path><svg:path fill-rule="evenodd" d="M13 24c6.075 0 11-4.925 11-11S19.075 2 13 2S2 6.925 2 13s4.925 11 11 11m0 2c7.18 0 13-5.82 13-13S20.18 0 13 0S0 5.82 0 13s5.82 13 13 13" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPopBookmarkCircleOffIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopBookmarkFilledIcon],svg[pepicons-pop-bookmark-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m10 13.467l-3.755 4.2C5.634 18.35 4.5 17.918 4.5 17V3a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v14c0 .918-1.133 1.35-1.745.666z"></svg:path>`,
})
export class PepiconsPopBookmarkFilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopBookmarkFilledCircleIcon],svg[pepicons-pop-bookmark-filled-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m13 16.467l-3.755 4.2C8.634 21.35 7.5 20.918 7.5 20V6a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v14c0 .918-1.133 1.35-1.745.666z"></svg:path><svg:path fill-rule="evenodd" d="M13 24c6.075 0 11-4.925 11-11S19.075 2 13 2S2 6.925 2 13s4.925 11 11 11m0 2c7.18 0 13-5.82 13-13S20.18 0 13 0S0 5.82 0 13s5.82 13 13 13" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPopBookmarkFilledCircleIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopBookmarkFilledCircleFilledIcon],svg[pepicons-pop-bookmark-filled-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPopBookmarkFilledCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:path fill="#000" d="m13 16.467l-3.755 4.2C8.634 21.35 7.5 20.918 7.5 20V6a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v14c0 .918-1.133 1.35-1.745.666z"></svg:path></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPopBookmarkFilledCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPopBookmarkFilledCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopBookmarkFilledCircleOffIcon],svg[pepicons-pop-bookmark-filled-circle-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m13 16.467l-3.755 4.2C8.634 21.35 7.5 20.918 7.5 20V6a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v14c0 .918-1.133 1.35-1.745.666z"></svg:path><svg:path d="M4.293 5.707a1 1 0 0 1 1.414-1.414l16 16a1 1 0 0 1-1.414 1.414z"></svg:path><svg:path fill-rule="evenodd" d="M13 24c6.075 0 11-4.925 11-11S19.075 2 13 2S2 6.925 2 13s4.925 11 11 11m0 2c7.18 0 13-5.82 13-13S20.18 0 13 0S0 5.82 0 13s5.82 13 13 13" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPopBookmarkFilledCircleOffIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopBookmarkFilledOffIcon],svg[pepicons-pop-bookmark-filled-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m10 13.467l-3.755 4.2C5.634 18.35 4.5 17.918 4.5 17V3a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v14c0 .918-1.133 1.35-1.745.666z"></svg:path><svg:path d="M1.293 2.707a1 1 0 0 1 1.414-1.414l16 16a1 1 0 0 1-1.414 1.414z"></svg:path></svg:g>`,
})
export class PepiconsPopBookmarkFilledOffIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopBookmarkOffIcon],svg[pepicons-pop-bookmark-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="m6.245 17.667l3.755-4.2l3.755 4.2c.611.684 1.745.251 1.745-.667V3a1 1 0 0 0-1-1h-9a1 1 0 0 0-1 1v14c0 .918 1.134 1.35 1.745.666M6.5 14.38V4h7v10.381l-2.754-3.08a1 1 0 0 0-1.491 0z" clip-rule="evenodd"></svg:path><svg:path d="M1.293 2.707a1 1 0 0 1 1.414-1.414l16 16a1 1 0 0 1-1.414 1.414z"></svg:path></svg:g>`,
})
export class PepiconsPopBookmarkOffIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopBriefcaseIcon],svg[pepicons-pop-briefcase-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M3.5 11v4a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-4h2v4a3 3 0 0 1-3 3h-11a3 3 0 0 1-3-3v-4z" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M1 7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v3a3 3 0 0 1-3 3H4a3 3 0 0 1-3-3zm16 0H3v3a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1z" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M7 4.746V6.5H5V4.746a3 3 0 0 1 .09-.727l.061-.247A3 3 0 0 1 8.061 1.5h3.877a3 3 0 0 1 2.91 2.272l.062.247a3 3 0 0 1 .09.727V6.5h-2V4.746a1 1 0 0 0-.03-.242l-.061-.247a1 1 0 0 0-.97-.757H8.061a1 1 0 0 0-.97.757l-.062.247a1 1 0 0 0-.03.242" clip-rule="evenodd"></svg:path><svg:path d="M7.866 11.5a1 1 0 0 1-1.732 0L5.268 10a1 1 0 0 1 .866-1.5h1.732a1 1 0 0 1 .866 1.5z"></svg:path><svg:path fill-rule="evenodd" d="M7 10.75a1 1 0 0 1 1 1v1.75a1 1 0 1 1-2 0v-1.75a1 1 0 0 1 1-1" clip-rule="evenodd"></svg:path><svg:path d="M13.866 11.5a1 1 0 0 1-1.732 0l-.866-1.5a1 1 0 0 1 .866-1.5h1.732a1 1 0 0 1 .866 1.5z"></svg:path><svg:path fill-rule="evenodd" d="M13 10.75a1 1 0 0 1 1 1v1.75a1 1 0 1 1-2 0v-1.75a1 1 0 0 1 1-1" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPopBriefcaseIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopBriefcaseCircleIcon],svg[pepicons-pop-briefcase-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M6.5 14v4a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-4h2v4a3 3 0 0 1-3 3h-11a3 3 0 0 1-3-3v-4z" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M4 10a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v3a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3zm16 0H6v3a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1z" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M10 7.746V9.5H8V7.746a3 3 0 0 1 .09-.727l.061-.247a3 3 0 0 1 2.91-2.272h3.877a3 3 0 0 1 2.91 2.272l.062.247a3 3 0 0 1 .09.727V9.5h-2V7.746a1 1 0 0 0-.03-.242l-.061-.247a1 1 0 0 0-.97-.757h-3.877a1 1 0 0 0-.97.757l-.062.247a1 1 0 0 0-.03.242" clip-rule="evenodd"></svg:path><svg:path d="M10.866 14.5a1 1 0 0 1-1.732 0L8.268 13a1 1 0 0 1 .866-1.5h1.732a1 1 0 0 1 .866 1.5z"></svg:path><svg:path fill-rule="evenodd" d="M10 13.75a1 1 0 0 1 1 1v1.75a1 1 0 1 1-2 0v-1.75a1 1 0 0 1 1-1" clip-rule="evenodd"></svg:path><svg:path d="M16.866 14.5a1 1 0 0 1-1.732 0l-.866-1.5a1 1 0 0 1 .866-1.5h1.732a1 1 0 0 1 .866 1.5z"></svg:path><svg:path fill-rule="evenodd" d="M16 13.75a1 1 0 0 1 1 1v1.75a1 1 0 1 1-2 0v-1.75a1 1 0 0 1 1-1" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M13 24c6.075 0 11-4.925 11-11S19.075 2 13 2S2 6.925 2 13s4.925 11 11 11m0 2c7.18 0 13-5.82 13-13S20.18 0 13 0S0 5.82 0 13s5.82 13 13 13" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPopBriefcaseCircleIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopBriefcaseCircleFilledIcon],svg[pepicons-pop-briefcase-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPopBriefcaseCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:g fill="#000"><svg:path fill-rule="evenodd" d="M6.5 14v4a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-4h2v4a3 3 0 0 1-3 3h-11a3 3 0 0 1-3-3v-4z" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M4 10a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v3a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3zm16 0H6v3a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1z" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M10 7.746V9.5H8V7.746a3 3 0 0 1 .09-.727l.061-.247a3 3 0 0 1 2.91-2.272h3.877a3 3 0 0 1 2.91 2.272l.062.247a3 3 0 0 1 .09.727V9.5h-2V7.746a1 1 0 0 0-.03-.242l-.061-.247a1 1 0 0 0-.97-.757h-3.877a1 1 0 0 0-.97.757l-.062.247a1 1 0 0 0-.03.242" clip-rule="evenodd"></svg:path><svg:path d="M10.866 14.5a1 1 0 0 1-1.732 0L8.268 13a1 1 0 0 1 .866-1.5h1.732a1 1 0 0 1 .866 1.5z"></svg:path><svg:path fill-rule="evenodd" d="M10 13.75a1 1 0 0 1 1 1v1.75a1 1 0 1 1-2 0v-1.75a1 1 0 0 1 1-1" clip-rule="evenodd"></svg:path><svg:path d="M16.866 14.5a1 1 0 0 1-1.732 0l-.866-1.5a1 1 0 0 1 .866-1.5h1.732a1 1 0 0 1 .866 1.5z"></svg:path><svg:path fill-rule="evenodd" d="M16 13.75a1 1 0 0 1 1 1v1.75a1 1 0 1 1-2 0v-1.75a1 1 0 0 1 1-1" clip-rule="evenodd"></svg:path></svg:g></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPopBriefcaseCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPopBriefcaseCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopBriefcaseCircleOffIcon],svg[pepicons-pop-briefcase-circle-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M6.5 14v4a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-4h2v4a3 3 0 0 1-3 3h-11a3 3 0 0 1-3-3v-4z" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M4 10a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v3a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3zm16 0H6v3a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1z" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M10 7.746V9.5H8V7.746a3 3 0 0 1 .09-.727l.061-.247a3 3 0 0 1 2.91-2.272h3.877a3 3 0 0 1 2.91 2.272l.062.247a3 3 0 0 1 .09.727V9.5h-2V7.746a1 1 0 0 0-.03-.242l-.061-.247a1 1 0 0 0-.97-.757h-3.877a1 1 0 0 0-.97.757l-.062.247a1 1 0 0 0-.03.242" clip-rule="evenodd"></svg:path><svg:path d="M10.866 14.5a1 1 0 0 1-1.732 0L8.268 13a1 1 0 0 1 .866-1.5h1.732a1 1 0 0 1 .866 1.5z"></svg:path><svg:path fill-rule="evenodd" d="M10 13.75a1 1 0 0 1 1 1v1.75a1 1 0 1 1-2 0v-1.75a1 1 0 0 1 1-1" clip-rule="evenodd"></svg:path><svg:path d="M16.866 14.5a1 1 0 0 1-1.732 0l-.866-1.5a1 1 0 0 1 .866-1.5h1.732a1 1 0 0 1 .866 1.5z"></svg:path><svg:path fill-rule="evenodd" d="M16 13.75a1 1 0 0 1 1 1v1.75a1 1 0 1 1-2 0v-1.75a1 1 0 0 1 1-1" clip-rule="evenodd"></svg:path><svg:path d="M4.293 5.707a1 1 0 0 1 1.414-1.414l16 16a1 1 0 0 1-1.414 1.414z"></svg:path><svg:path fill-rule="evenodd" d="M13 24c6.075 0 11-4.925 11-11S19.075 2 13 2S2 6.925 2 13s4.925 11 11 11m0 2c7.18 0 13-5.82 13-13S20.18 0 13 0S0 5.82 0 13s5.82 13 13 13" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPopBriefcaseCircleOffIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopBriefcaseOffIcon],svg[pepicons-pop-briefcase-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M3.5 11v4a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-4h2v4a3 3 0 0 1-3 3h-11a3 3 0 0 1-3-3v-4z" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M1 7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v3a3 3 0 0 1-3 3H4a3 3 0 0 1-3-3zm16 0H3v3a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1z" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M7 4.746V6.5H5V4.746a3 3 0 0 1 .09-.727l.061-.247A3 3 0 0 1 8.061 1.5h3.877a3 3 0 0 1 2.91 2.272l.062.247a3 3 0 0 1 .09.727V6.5h-2V4.746a1 1 0 0 0-.03-.242l-.061-.247a1 1 0 0 0-.97-.757H8.061a1 1 0 0 0-.97.757l-.062.247a1 1 0 0 0-.03.242" clip-rule="evenodd"></svg:path><svg:path d="M7.866 11.5a1 1 0 0 1-1.732 0L5.268 10a1 1 0 0 1 .866-1.5h1.732a1 1 0 0 1 .866 1.5z"></svg:path><svg:path fill-rule="evenodd" d="M7 10.75a1 1 0 0 1 1 1v1.75a1 1 0 1 1-2 0v-1.75a1 1 0 0 1 1-1" clip-rule="evenodd"></svg:path><svg:path d="M13.866 11.5a1 1 0 0 1-1.732 0l-.866-1.5a1 1 0 0 1 .866-1.5h1.732a1 1 0 0 1 .866 1.5z"></svg:path><svg:path fill-rule="evenodd" d="M13 10.75a1 1 0 0 1 1 1v1.75a1 1 0 1 1-2 0v-1.75a1 1 0 0 1 1-1" clip-rule="evenodd"></svg:path><svg:path d="M1.293 2.707a1 1 0 0 1 1.414-1.414l16 16a1 1 0 0 1-1.414 1.414z"></svg:path></svg:g>`,
})
export class PepiconsPopBriefcaseOffIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopBuildingIcon],svg[pepicons-pop-building-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M2 18.5a1 1 0 1 1 0-2h16a1 1 0 1 1 0 2z"></svg:path><svg:path d="M6.5 17a1 1 0 1 1-2 0V4.308C4.5 2.51 5.809 1 7.5 1h5c1.691 0 3 1.51 3 3.308V17a1 1 0 1 1-2 0V4.308c0-.752-.482-1.308-1-1.308h-5c-.518 0-1 .556-1 1.308z"></svg:path><svg:path d="M8 4h1a.5.5 0 0 1 .5.5v1A.5.5 0 0 1 9 6H8a.5.5 0 0 1-.5-.5v-1A.5.5 0 0 1 8 4m3 0h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1A.5.5 0 0 1 11 4m0 3h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1A.5.5 0 0 1 11 7m0 3h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5m0 3h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5M8 7h1a.5.5 0 0 1 .5.5v1A.5.5 0 0 1 9 9H8a.5.5 0 0 1-.5-.5v-1A.5.5 0 0 1 8 7m0 6h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H8a.5.5 0 0 1-.5-.5v-1A.5.5 0 0 1 8 13m0-3h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H8a.5.5 0 0 1-.5-.5v-1A.5.5 0 0 1 8 10"></svg:path></svg:g>`,
})
export class PepiconsPopBuildingIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopBuildingCircleIcon],svg[pepicons-pop-building-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M5 21.5a1 1 0 1 1 0-2h16a1 1 0 1 1 0 2z"></svg:path><svg:path d="M9.5 20a1 1 0 1 1-2 0V7.308C7.5 5.51 8.809 4 10.5 4h5c1.691 0 3 1.51 3 3.308V20a1 1 0 1 1-2 0V7.308c0-.752-.482-1.308-1-1.308h-5c-.518 0-1 .556-1 1.308z"></svg:path><svg:path d="M11 7h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1A.5.5 0 0 1 11 7m3 0h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1A.5.5 0 0 1 14 7m0 3h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5m0 3h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5m0 3h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5m-3-6h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5m0 6h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5m0-3h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5"></svg:path><svg:path fill-rule="evenodd" d="M13 24c6.075 0 11-4.925 11-11S19.075 2 13 2S2 6.925 2 13s4.925 11 11 11m0 2c7.18 0 13-5.82 13-13S20.18 0 13 0S0 5.82 0 13s5.82 13 13 13" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPopBuildingCircleIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopBuildingCircleFilledIcon],svg[pepicons-pop-building-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPopBuildingCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:g fill="#000"><svg:path d="M5 21.5a1 1 0 1 1 0-2h16a1 1 0 1 1 0 2z"></svg:path><svg:path d="M9.5 20a1 1 0 1 1-2 0V7.308C7.5 5.51 8.809 4 10.5 4h5c1.691 0 3 1.51 3 3.308V20a1 1 0 1 1-2 0V7.308c0-.752-.482-1.308-1-1.308h-5c-.518 0-1 .556-1 1.308z"></svg:path><svg:path d="M11 7h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1A.5.5 0 0 1 11 7m3 0h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1A.5.5 0 0 1 14 7m0 3h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5m0 3h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5m0 3h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5m-3-6h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5m0 6h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5m0-3h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5"></svg:path></svg:g></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPopBuildingCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPopBuildingCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopBuildingCircleOffIcon],svg[pepicons-pop-building-circle-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M5 21.5a1 1 0 1 1 0-2h16a1 1 0 1 1 0 2z"></svg:path><svg:path d="M9.5 20a1 1 0 1 1-2 0V7.308C7.5 5.51 8.809 4 10.5 4h5c1.691 0 3 1.51 3 3.308V20a1 1 0 1 1-2 0V7.308c0-.752-.482-1.308-1-1.308h-5c-.518 0-1 .556-1 1.308z"></svg:path><svg:path d="M11 7h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1A.5.5 0 0 1 11 7m3 0h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1A.5.5 0 0 1 14 7m0 3h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5m0 3h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5m0 3h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5m-3-6h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5m0 6h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5m0-3h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5"></svg:path><svg:path d="M4.293 5.707a1 1 0 0 1 1.414-1.414l16 16a1 1 0 0 1-1.414 1.414z"></svg:path><svg:path fill-rule="evenodd" d="M13 24c6.075 0 11-4.925 11-11S19.075 2 13 2S2 6.925 2 13s4.925 11 11 11m0 2c7.18 0 13-5.82 13-13S20.18 0 13 0S0 5.82 0 13s5.82 13 13 13" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPopBuildingCircleOffIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopBuildingOffIcon],svg[pepicons-pop-building-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M2 18.5a1 1 0 1 1 0-2h16a1 1 0 1 1 0 2z"></svg:path><svg:path d="M6.5 17a1 1 0 1 1-2 0V4.308C4.5 2.51 5.809 1 7.5 1h5c1.691 0 3 1.51 3 3.308V17a1 1 0 1 1-2 0V4.308c0-.752-.482-1.308-1-1.308h-5c-.518 0-1 .556-1 1.308z"></svg:path><svg:path d="M8 4h1a.5.5 0 0 1 .5.5v1A.5.5 0 0 1 9 6H8a.5.5 0 0 1-.5-.5v-1A.5.5 0 0 1 8 4m3 0h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1A.5.5 0 0 1 11 4m0 3h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1A.5.5 0 0 1 11 7m0 3h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5m0 3h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5M8 7h1a.5.5 0 0 1 .5.5v1A.5.5 0 0 1 9 9H8a.5.5 0 0 1-.5-.5v-1A.5.5 0 0 1 8 7m0 6h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H8a.5.5 0 0 1-.5-.5v-1A.5.5 0 0 1 8 13m0-3h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H8a.5.5 0 0 1-.5-.5v-1A.5.5 0 0 1 8 10"></svg:path><svg:path d="M1.293 2.707a1 1 0 0 1 1.414-1.414l16 16a1 1 0 0 1-1.414 1.414z"></svg:path></svg:g>`,
})
export class PepiconsPopBuildingOffIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopBulletinNoticeIcon],svg[pepicons-pop-bulletin-notice-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M0 7a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm18 0H2v11h16z"></svg:path><svg:path d="M5.75 9.5a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 0 1.5h-7a.75.75 0 0 1-.75-.75m-1 3a.75.75 0 0 1 .75-.75h9a.75.75 0 0 1 0 1.5h-9a.75.75 0 0 1-.75-.75m1 3a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 0 1.5h-7a.75.75 0 0 1-.75-.75m5.664-12.672a2 2 0 0 0-2.828 0l-3.879 3.88a1 1 0 1 1-1.414-1.415l3.879-3.879a4 4 0 0 1 5.656 0l3.88 3.879a1 1 0 0 1-1.415 1.414z"></svg:path></svg:g>`,
})
export class PepiconsPopBulletinNoticeIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopBulletinNoticeCircleIcon],svg[pepicons-pop-bulletin-notice-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M3 10a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zm18 0H5v11h16z"></svg:path><svg:path d="M8.75 12.5a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 0 1.5h-7a.75.75 0 0 1-.75-.75m-1 3a.75.75 0 0 1 .75-.75h9a.75.75 0 0 1 0 1.5h-9a.75.75 0 0 1-.75-.75m1 3a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 0 1.5h-7a.75.75 0 0 1-.75-.75m5.664-12.672a2 2 0 0 0-2.828 0l-3.879 3.88a1 1 0 1 1-1.414-1.415l3.879-3.879a4 4 0 0 1 5.656 0l3.88 3.879a1 1 0 0 1-1.415 1.414z"></svg:path><svg:path d="M13 24c6.075 0 11-4.925 11-11S19.075 2 13 2S2 6.925 2 13s4.925 11 11 11m0 2c7.18 0 13-5.82 13-13S20.18 0 13 0S0 5.82 0 13s5.82 13 13 13"></svg:path></svg:g>`,
})
export class PepiconsPopBulletinNoticeCircleIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopBulletinNoticeCircleFilledIcon],svg[pepicons-pop-bulletin-notice-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPopBulletinNoticeCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:g fill="#000" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M3 10a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zm18 0H5v11h16z"></svg:path><svg:path d="M8.75 12.5a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 0 1.5h-7a.75.75 0 0 1-.75-.75m-1 3a.75.75 0 0 1 .75-.75h9a.75.75 0 0 1 0 1.5h-9a.75.75 0 0 1-.75-.75m1 3a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 0 1.5h-7a.75.75 0 0 1-.75-.75m5.664-12.672a2 2 0 0 0-2.828 0l-3.879 3.88a1 1 0 1 1-1.414-1.415l3.879-3.879a4 4 0 0 1 5.656 0l3.88 3.879a1 1 0 0 1-1.415 1.414z"></svg:path></svg:g></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPopBulletinNoticeCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPopBulletinNoticeCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopBulletinNoticeCircleOffIcon],svg[pepicons-pop-bulletin-notice-circle-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:g fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M3 10a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zm18 0H5v11h16z"></svg:path><svg:path d="M8.75 12.5a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 0 1.5h-7a.75.75 0 0 1-.75-.75m-1 3a.75.75 0 0 1 .75-.75h9a.75.75 0 0 1 0 1.5h-9a.75.75 0 0 1-.75-.75m1 3a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 0 1.5h-7a.75.75 0 0 1-.75-.75m5.664-12.672a2 2 0 0 0-2.828 0l-3.879 3.88a1 1 0 1 1-1.414-1.415l3.879-3.879a4 4 0 0 1 5.656 0l3.88 3.879a1 1 0 0 1-1.415 1.414z"></svg:path></svg:g><svg:path d="M4.293 5.707a1 1 0 0 1 1.414-1.414l16 16a1 1 0 0 1-1.414 1.414z"></svg:path><svg:path fill-rule="evenodd" d="M13 24c6.075 0 11-4.925 11-11S19.075 2 13 2S2 6.925 2 13s4.925 11 11 11m0 2c7.18 0 13-5.82 13-13S20.18 0 13 0S0 5.82 0 13s5.82 13 13 13" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPopBulletinNoticeCircleOffIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopBulletinNoticeOffIcon],svg[pepicons-pop-bulletin-notice-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:g fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M0 7a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm18 0H2v11h16z"></svg:path><svg:path d="M5.75 9.5a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 0 1.5h-7a.75.75 0 0 1-.75-.75m-1 3a.75.75 0 0 1 .75-.75h9a.75.75 0 0 1 0 1.5h-9a.75.75 0 0 1-.75-.75m1 3a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 0 1.5h-7a.75.75 0 0 1-.75-.75m5.664-12.672a2 2 0 0 0-2.828 0l-3.879 3.88a1 1 0 1 1-1.414-1.415l3.879-3.879a4 4 0 0 1 5.656 0l3.88 3.879a1 1 0 0 1-1.415 1.414z"></svg:path></svg:g><svg:path d="M1.293 2.707a1 1 0 0 1 1.414-1.414l16 16a1 1 0 0 1-1.414 1.414z"></svg:path></svg:g>`,
})
export class PepiconsPopBulletinNoticeOffIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopCalculatorIcon],svg[pepicons-pop-calculator-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M2 3v14a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3H5a3 3 0 0 0-3 3m3 15a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1z" clip-rule="evenodd"></svg:path><svg:path d="M5 7.5v-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5m7 8.2v-4.9a.8.8 0 0 1 .8-.8h1.4a.8.8 0 0 1 .8.8v4.9a.8.8 0 0 1-.8.8h-1.4a.8.8 0 0 1-.8-.8M5 12v-1.5a.5.5 0 0 1 .5-.5H7a.5.5 0 0 1 .5.5V12a.5.5 0 0 1-.5.5H5.5A.5.5 0 0 1 5 12m3.5 0v-1.5A.5.5 0 0 1 9 10h1.5a.5.5 0 0 1 .5.5V12a.5.5 0 0 1-.5.5H9a.5.5 0 0 1-.5-.5M5 16v-1.5a.5.5 0 0 1 .5-.5H7a.5.5 0 0 1 .5.5V16a.5.5 0 0 1-.5.5H5.5A.5.5 0 0 1 5 16m3.5 0v-1.5A.5.5 0 0 1 9 14h1.5a.5.5 0 0 1 .5.5V16a.5.5 0 0 1-.5.5H9a.5.5 0 0 1-.5-.5"></svg:path></svg:g>`,
})
export class PepiconsPopCalculatorIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopCalculatorCircleIcon],svg[pepicons-pop-calculator-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M5 6v14a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3H8a3 3 0 0 0-3 3m3 15a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1z" clip-rule="evenodd"></svg:path><svg:path d="M8 10.5v-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5m7 8.2v-4.9a.8.8 0 0 1 .8-.8h1.4a.8.8 0 0 1 .8.8v4.9a.8.8 0 0 1-.8.8h-1.4a.8.8 0 0 1-.8-.8M8 15v-1.5a.5.5 0 0 1 .5-.5H10a.5.5 0 0 1 .5.5V15a.5.5 0 0 1-.5.5H8.5A.5.5 0 0 1 8 15m3.5 0v-1.5a.5.5 0 0 1 .5-.5h1.5a.5.5 0 0 1 .5.5V15a.5.5 0 0 1-.5.5H12a.5.5 0 0 1-.5-.5M8 19v-1.5a.5.5 0 0 1 .5-.5H10a.5.5 0 0 1 .5.5V19a.5.5 0 0 1-.5.5H8.5A.5.5 0 0 1 8 19m3.5 0v-1.5a.5.5 0 0 1 .5-.5h1.5a.5.5 0 0 1 .5.5V19a.5.5 0 0 1-.5.5H12a.5.5 0 0 1-.5-.5"></svg:path><svg:path fill-rule="evenodd" d="M13 24c6.075 0 11-4.925 11-11S19.075 2 13 2S2 6.925 2 13s4.925 11 11 11m0 2c7.18 0 13-5.82 13-13S20.18 0 13 0S0 5.82 0 13s5.82 13 13 13" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPopCalculatorCircleIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopCalculatorCircleFilledIcon],svg[pepicons-pop-calculator-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPopCalculatorCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:g fill="#000"><svg:path fill-rule="evenodd" d="M5 6v14a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3H8a3 3 0 0 0-3 3m3 15a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1z" clip-rule="evenodd"></svg:path><svg:path d="M8 10.5v-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5m7 8.2v-4.9a.8.8 0 0 1 .8-.8h1.4a.8.8 0 0 1 .8.8v4.9a.8.8 0 0 1-.8.8h-1.4a.8.8 0 0 1-.8-.8M8 15v-1.5a.5.5 0 0 1 .5-.5H10a.5.5 0 0 1 .5.5V15a.5.5 0 0 1-.5.5H8.5A.5.5 0 0 1 8 15m3.5 0v-1.5a.5.5 0 0 1 .5-.5h1.5a.5.5 0 0 1 .5.5V15a.5.5 0 0 1-.5.5H12a.5.5 0 0 1-.5-.5M8 19v-1.5a.5.5 0 0 1 .5-.5H10a.5.5 0 0 1 .5.5V19a.5.5 0 0 1-.5.5H8.5A.5.5 0 0 1 8 19m3.5 0v-1.5a.5.5 0 0 1 .5-.5h1.5a.5.5 0 0 1 .5.5V19a.5.5 0 0 1-.5.5H12a.5.5 0 0 1-.5-.5"></svg:path></svg:g></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPopCalculatorCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPopCalculatorCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopCalculatorCircleOffIcon],svg[pepicons-pop-calculator-circle-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M5 6v14a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3H8a3 3 0 0 0-3 3m3 15a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1z" clip-rule="evenodd"></svg:path><svg:path d="M8 10.5v-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5m7 8.2v-4.9a.8.8 0 0 1 .8-.8h1.4a.8.8 0 0 1 .8.8v4.9a.8.8 0 0 1-.8.8h-1.4a.8.8 0 0 1-.8-.8M8 15v-1.5a.5.5 0 0 1 .5-.5H10a.5.5 0 0 1 .5.5V15a.5.5 0 0 1-.5.5H8.5A.5.5 0 0 1 8 15m3.5 0v-1.5a.5.5 0 0 1 .5-.5h1.5a.5.5 0 0 1 .5.5V15a.5.5 0 0 1-.5.5H12a.5.5 0 0 1-.5-.5M8 19v-1.5a.5.5 0 0 1 .5-.5H10a.5.5 0 0 1 .5.5V19a.5.5 0 0 1-.5.5H8.5A.5.5 0 0 1 8 19m3.5 0v-1.5a.5.5 0 0 1 .5-.5h1.5a.5.5 0 0 1 .5.5V19a.5.5 0 0 1-.5.5H12a.5.5 0 0 1-.5-.5"></svg:path><svg:path d="M4.293 5.707a1 1 0 0 1 1.414-1.414l16 16a1 1 0 0 1-1.414 1.414z"></svg:path><svg:path fill-rule="evenodd" d="M13 24c6.075 0 11-4.925 11-11S19.075 2 13 2S2 6.925 2 13s4.925 11 11 11m0 2c7.18 0 13-5.82 13-13S20.18 0 13 0S0 5.82 0 13s5.82 13 13 13" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPopCalculatorCircleOffIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopCalculatorOffIcon],svg[pepicons-pop-calculator-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M2 3v14a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3H5a3 3 0 0 0-3 3m3 15a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1z" clip-rule="evenodd"></svg:path><svg:path d="M5 7.5v-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5m7 8.2v-4.9a.8.8 0 0 1 .8-.8h1.4a.8.8 0 0 1 .8.8v4.9a.8.8 0 0 1-.8.8h-1.4a.8.8 0 0 1-.8-.8M5 12v-1.5a.5.5 0 0 1 .5-.5H7a.5.5 0 0 1 .5.5V12a.5.5 0 0 1-.5.5H5.5A.5.5 0 0 1 5 12m3.5 0v-1.5A.5.5 0 0 1 9 10h1.5a.5.5 0 0 1 .5.5V12a.5.5 0 0 1-.5.5H9a.5.5 0 0 1-.5-.5M5 16v-1.5a.5.5 0 0 1 .5-.5H7a.5.5 0 0 1 .5.5V16a.5.5 0 0 1-.5.5H5.5A.5.5 0 0 1 5 16m3.5 0v-1.5A.5.5 0 0 1 9 14h1.5a.5.5 0 0 1 .5.5V16a.5.5 0 0 1-.5.5H9a.5.5 0 0 1-.5-.5"></svg:path><svg:path d="M1.293 2.707a1 1 0 0 1 1.414-1.414l16 16a1 1 0 0 1-1.414 1.414z"></svg:path></svg:g>`,
})
export class PepiconsPopCalculatorOffIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopCalendarIcon],svg[pepicons-pop-calendar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M3 4h14a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1m1 4v8h12V8z" clip-rule="evenodd"></svg:path><svg:circle cx="6.5" cy="10.5" r="1.5"></svg:circle><svg:circle cx="5.5" cy="4.5" r="1.5"></svg:circle><svg:circle cx="14.5" cy="4.5" r="1.5"></svg:circle></svg:g>`,
})
export class PepiconsPopCalendarIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopCalendarCircleIcon],svg[pepicons-pop-calendar-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:g transform="translate(3 3)"><svg:path fill-rule="evenodd" d="M3 4h14a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1m1 4v8h12V8z" clip-rule="evenodd"></svg:path><svg:circle cx="6.5" cy="10.5" r="1.5"></svg:circle><svg:circle cx="5.5" cy="4.5" r="1.5"></svg:circle><svg:circle cx="14.5" cy="4.5" r="1.5"></svg:circle></svg:g><svg:path fill-rule="evenodd" d="M13 24c6.075 0 11-4.925 11-11S19.075 2 13 2S2 6.925 2 13s4.925 11 11 11m0 2c7.18 0 13-5.82 13-13S20.18 0 13 0S0 5.82 0 13s5.82 13 13 13" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPopCalendarCircleIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopCalendarCircleFilledIcon],svg[pepicons-pop-calendar-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPopCalendarCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:g fill="#000" transform="translate(3 3)"><svg:path fill-rule="evenodd" d="M3 4h14a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1m1 4v8h12V8z" clip-rule="evenodd"></svg:path><svg:circle cx="6.5" cy="10.5" r="1.5"></svg:circle><svg:circle cx="5.5" cy="4.5" r="1.5"></svg:circle><svg:circle cx="14.5" cy="4.5" r="1.5"></svg:circle></svg:g></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPopCalendarCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPopCalendarCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopCalendarCircleOffIcon],svg[pepicons-pop-calendar-circle-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:g transform="translate(3 3)"><svg:path fill-rule="evenodd" d="M3 4h14a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1m1 4v8h12V8z" clip-rule="evenodd"></svg:path><svg:circle cx="6.5" cy="10.5" r="1.5"></svg:circle><svg:circle cx="5.5" cy="4.5" r="1.5"></svg:circle><svg:circle cx="14.5" cy="4.5" r="1.5"></svg:circle><svg:path d="M1.293 2.707a1 1 0 0 1 1.414-1.414l16 16a1 1 0 0 1-1.414 1.414z"></svg:path></svg:g><svg:path fill-rule="evenodd" d="M13 24c6.075 0 11-4.925 11-11S19.075 2 13 2S2 6.925 2 13s4.925 11 11 11m0 2c7.18 0 13-5.82 13-13S20.18 0 13 0S0 5.82 0 13s5.82 13 13 13" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPopCalendarCircleOffIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopCalendarOffIcon],svg[pepicons-pop-calendar-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M3 4h14a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1m1 4v8h12V8z" clip-rule="evenodd"></svg:path><svg:circle cx="6.5" cy="10.5" r="1.5"></svg:circle><svg:circle cx="5.5" cy="4.5" r="1.5"></svg:circle><svg:circle cx="14.5" cy="4.5" r="1.5"></svg:circle><svg:path d="M1.293 2.707a1 1 0 0 1 1.414-1.414l16 16a1 1 0 0 1-1.414 1.414z"></svg:path></svg:g>`,
})
export class PepiconsPopCalendarOffIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopCameraIcon],svg[pepicons-pop-camera-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M11.5 4h-7a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3h7a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3m-8 3a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-7a1 1 0 0 1-1-1z"></svg:path><svg:path d="m16.934 5.176l-3.468 2.381a1 1 0 0 0-.434.815L13 11.587a1 1 0 0 0 .434.834l3.5 2.403A1 1 0 0 0 18.5 14V6a1 1 0 0 0-1.566-.824M16.5 12.1l-1.495-1.026l.022-2.163L16.5 7.9z"></svg:path></svg:g>`,
})
export class PepiconsPopCameraIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopCameraCircleIcon],svg[pepicons-pop-camera-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M14.5 7h-7a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3h7a3 3 0 0 0 3-3v-6a3 3 0 0 0-3-3m-8 3a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-7a1 1 0 0 1-1-1z"></svg:path><svg:path d="m19.934 8.176l-3.468 2.381a1 1 0 0 0-.434.815L16 14.587a1 1 0 0 0 .434.834l3.5 2.403A1 1 0 0 0 21.5 17V9a1 1 0 0 0-1.566-.824M19.5 15.1l-1.495-1.026l.022-2.163L19.5 10.9z"></svg:path><svg:path d="M13 24c6.075 0 11-4.925 11-11S19.075 2 13 2S2 6.925 2 13s4.925 11 11 11m0 2c7.18 0 13-5.82 13-13S20.18 0 13 0S0 5.82 0 13s5.82 13 13 13"></svg:path></svg:g>`,
})
export class PepiconsPopCameraCircleIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopCameraCircleFilledIcon],svg[pepicons-pop-camera-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPopCameraCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:g fill="#000" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M14.5 7h-7a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3h7a3 3 0 0 0 3-3v-6a3 3 0 0 0-3-3m-8 3a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-7a1 1 0 0 1-1-1z"></svg:path><svg:path d="m19.934 8.176l-3.468 2.381a1 1 0 0 0-.434.815L16 14.587a1 1 0 0 0 .434.834l3.5 2.403A1 1 0 0 0 21.5 17V9a1 1 0 0 0-1.566-.824M19.5 15.1l-1.495-1.026l.022-2.163L19.5 10.9z"></svg:path></svg:g></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPopCameraCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPopCameraCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopCameraCircleOffIcon],svg[pepicons-pop-camera-circle-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M14.5 7h-7a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3h7a3 3 0 0 0 3-3v-6a3 3 0 0 0-3-3m-8 3a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-7a1 1 0 0 1-1-1z" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="m19.934 8.176l-3.468 2.381a1 1 0 0 0-.434.815L16 14.587a1 1 0 0 0 .434.834l3.5 2.403A1 1 0 0 0 21.5 17V9a1 1 0 0 0-1.566-.824M19.5 15.1l-1.495-1.026l.022-2.163L19.5 10.9z" clip-rule="evenodd"></svg:path><svg:path d="M4.293 5.707a1 1 0 0 1 1.414-1.414l16 16a1 1 0 0 1-1.414 1.414z"></svg:path><svg:path fill-rule="evenodd" d="M13 24c6.075 0 11-4.925 11-11S19.075 2 13 2S2 6.925 2 13s4.925 11 11 11m0 2c7.18 0 13-5.82 13-13S20.18 0 13 0S0 5.82 0 13s5.82 13 13 13" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPopCameraCircleOffIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopCameraOffIcon],svg[pepicons-pop-camera-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M11.5 4h-7a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3h7a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3m-8 3a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-7a1 1 0 0 1-1-1z" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="m16.934 5.176l-3.468 2.381a1 1 0 0 0-.434.815L13 11.587a1 1 0 0 0 .434.834l3.5 2.403A1 1 0 0 0 18.5 14V6a1 1 0 0 0-1.566-.824M16.5 12.1l-1.495-1.026l.022-2.163L16.5 7.9z" clip-rule="evenodd"></svg:path><svg:path d="M1.293 2.707a1 1 0 0 1 1.414-1.414l16 16a1 1 0 0 1-1.414 1.414z"></svg:path></svg:g>`,
})
export class PepiconsPopCameraOffIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopCanIcon],svg[pepicons-pop-can-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M12.5 2h-5Q5 3 4.5 5v10a3 3 0 0 0 3 3h5a3 3 0 0 0 3-3V5q-.5-2-3-3m-6 13V5.294c.19-.502.624-.926 1.411-1.294h4.178c.787.368 1.221.792 1.411 1.294V15a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1"></svg:path><svg:path d="M7 9.5a4 4 0 1 0 8 0a4 4 0 0 0-8 0m2.805 1.406q-.37.09-1.221.372l-.061-.085c1.258-.378 2.272-.955 3.032-1.734q1.025-1.047 1.382-2.25q.224.19.407.419c.124.835.03 1.457-.258 1.884c-.356.526-.95.855-1.505 1c-.072.019-.202.048-.403.092l-.398.085l-.213.045l-.113.024c-.274.06-.483.107-.65.148"></svg:path></svg:g>`,
})
export class PepiconsPopCanIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopCanCircleIcon],svg[pepicons-pop-can-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M15.5 5h-5Q8 6 7.5 8v10a3 3 0 0 0 3 3h5a3 3 0 0 0 3-3V8q-.5-2-3-3m-6 13V8.294c.19-.502.624-.926 1.411-1.294h4.178c.787.368 1.221.792 1.411 1.294V18a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1"></svg:path><svg:path d="M10 12.5a4 4 0 1 0 8 0a4 4 0 0 0-8 0m2.805 1.406q-.37.09-1.221.372l-.061-.085c1.258-.378 2.272-.955 3.032-1.734q1.025-1.047 1.382-2.25q.224.19.407.419c.124.835.03 1.457-.259 1.884c-.355.526-.95.855-1.505 1c-.071.019-.2.048-.402.092l-.398.085l-.213.045l-.113.024c-.274.06-.483.107-.65.148"></svg:path><svg:path d="M13 24c6.075 0 11-4.925 11-11S19.075 2 13 2S2 6.925 2 13s4.925 11 11 11m0 2c7.18 0 13-5.82 13-13S20.18 0 13 0S0 5.82 0 13s5.82 13 13 13"></svg:path></svg:g>`,
})
export class PepiconsPopCanCircleIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopCanCircleFilledIcon],svg[pepicons-pop-can-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPopCanCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:g fill="#000" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M15.5 5h-5Q8 6 7.5 8v10a3 3 0 0 0 3 3h5a3 3 0 0 0 3-3V8q-.5-2-3-3m-6 13V8.294c.19-.502.624-.926 1.411-1.294h4.178c.787.368 1.221.792 1.411 1.294V18a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1"></svg:path><svg:path d="M10 12.5a4 4 0 1 0 8 0a4 4 0 0 0-8 0m2.805 1.406q-.37.09-1.221.372l-.061-.085c1.258-.378 2.272-.955 3.032-1.734q1.025-1.047 1.382-2.25q.224.19.407.419c.124.835.03 1.457-.259 1.884c-.355.526-.95.855-1.505 1c-.071.019-.2.048-.402.092l-.398.085l-.213.045l-.113.024c-.274.06-.483.107-.65.148"></svg:path></svg:g></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPopCanCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPopCanCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopCanCircleOffIcon],svg[pepicons-pop-can-circle-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M15.5 5h-5Q8 6 7.5 8v10a3 3 0 0 0 3 3h5a3 3 0 0 0 3-3V8q-.5-2-3-3m-6 13V8.294c.19-.502.624-.926 1.411-1.294h4.178c.787.368 1.221.792 1.411 1.294V18a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M10 12.5a4 4 0 1 0 8 0a4 4 0 0 0-8 0m2.805 1.406q-.37.09-1.221.372l-.061-.085c1.258-.378 2.272-.955 3.032-1.734q1.025-1.047 1.382-2.25q.224.19.407.419c.124.835.03 1.457-.259 1.884c-.355.526-.95.855-1.505 1c-.071.019-.2.048-.402.092l-.398.085l-.213.045l-.113.024c-.274.06-.483.107-.65.148" clip-rule="evenodd"></svg:path><svg:path d="M4.293 5.707a1 1 0 0 1 1.414-1.414l16 16a1 1 0 0 1-1.414 1.414z"></svg:path><svg:path fill-rule="evenodd" d="M13 24c6.075 0 11-4.925 11-11S19.075 2 13 2S2 6.925 2 13s4.925 11 11 11m0 2c7.18 0 13-5.82 13-13S20.18 0 13 0S0 5.82 0 13s5.82 13 13 13" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPopCanCircleOffIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopCanOffIcon],svg[pepicons-pop-can-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M12.5 2h-5Q5 3 4.5 5v10a3 3 0 0 0 3 3h5a3 3 0 0 0 3-3V5q-.5-2-3-3m-6 13V5.294c.19-.502.624-.926 1.411-1.294h4.178c.787.368 1.221.792 1.411 1.294V15a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M7 9.5a4 4 0 1 0 8 0a4 4 0 0 0-8 0m2.805 1.406q-.37.09-1.221.372l-.061-.085c1.258-.378 2.272-.955 3.032-1.734q1.025-1.047 1.382-2.25q.224.19.407.419c.124.835.03 1.457-.258 1.884c-.356.526-.95.855-1.505 1c-.072.019-.202.048-.403.092l-.398.085l-.213.045l-.113.024c-.274.06-.483.107-.65.148" clip-rule="evenodd"></svg:path><svg:path d="M1.293 2.707a1 1 0 0 1 1.414-1.414l16 16a1 1 0 0 1-1.414 1.414z"></svg:path></svg:g>`,
})
export class PepiconsPopCanOffIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopCarIcon],svg[pepicons-pop-car-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M5.653 2.79a2.5 2.5 0 0 0-1.837 1.823l-1.13 4.523A2.5 2.5 0 0 0 1 11.5v3A2.5 2.5 0 0 0 3.5 17h13a2.5 2.5 0 0 0 2.5-2.5v-3a2.5 2.5 0 0 0-1.685-2.364l-1.131-4.523a2.5 2.5 0 0 0-1.836-1.823A18.4 18.4 0 0 0 10 2.263q-2.175 0-4.348.527M3.5 11a1 1 0 0 0 .97-.758l1.286-5.144a.5.5 0 0 1 .368-.365A16.4 16.4 0 0 1 10 4.263a16.4 16.4 0 0 1 3.876.47a.5.5 0 0 1 .367.365l1.286 5.145a1 1 0 0 0 .97.757a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 .5-.5" clip-rule="evenodd"></svg:path><svg:path d="M16.5 13a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0m-10 0a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0M4 15.5A1.5 1.5 0 0 1 5.5 17v1a1.5 1.5 0 0 1-3 0v-1A1.5 1.5 0 0 1 4 15.5m12 0a1.5 1.5 0 0 1 1.5 1.5v1a1.5 1.5 0 0 1-3 0v-1a1.5 1.5 0 0 1 1.5-1.5"></svg:path><svg:path fill-rule="evenodd" d="M12.195 5h-4.39a2 2 0 0 0-1.956 1.58l-.429 2A2 2 0 0 0 7.376 11h5.248a2 2 0 0 0 1.955-2.42l-.429-2A2 2 0 0 0 12.195 5m-4.82 4l.43-2h4.39l.429 2z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPopCarIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopCarCircleIcon],svg[pepicons-pop-car-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M8.653 5.79a2.5 2.5 0 0 0-1.837 1.823l-1.13 4.523A2.5 2.5 0 0 0 4 14.5v3A2.5 2.5 0 0 0 6.5 20h13a2.5 2.5 0 0 0 2.5-2.5v-3a2.5 2.5 0 0 0-1.685-2.364l-1.131-4.523a2.5 2.5 0 0 0-1.836-1.823A18.4 18.4 0 0 0 13 5.263q-2.175 0-4.348.527M6.5 14a1 1 0 0 0 .97-.758l1.286-5.144a.5.5 0 0 1 .368-.365A16.4 16.4 0 0 1 13 7.263a16.4 16.4 0 0 1 3.876.47a.5.5 0 0 1 .367.365l1.286 5.144a1 1 0 0 0 .97.758a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 .5-.5" clip-rule="evenodd"></svg:path><svg:path d="M19.5 16a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0m-10 0a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0M7 18.5A1.5 1.5 0 0 1 8.5 20v1a1.5 1.5 0 0 1-3 0v-1A1.5 1.5 0 0 1 7 18.5m12 0a1.5 1.5 0 0 1 1.5 1.5v1a1.5 1.5 0 0 1-3 0v-1a1.5 1.5 0 0 1 1.5-1.5"></svg:path><svg:path fill-rule="evenodd" d="M15.195 8h-4.39a2 2 0 0 0-1.956 1.58l-.429 2A2 2 0 0 0 10.376 14h5.248a2 2 0 0 0 1.955-2.42l-.429-2A2 2 0 0 0 15.195 8m-4.82 4l.43-2h4.39l.429 2z" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M13 24c6.075 0 11-4.925 11-11S19.075 2 13 2S2 6.925 2 13s4.925 11 11 11m0 2c7.18 0 13-5.82 13-13S20.18 0 13 0S0 5.82 0 13s5.82 13 13 13" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPopCarCircleIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopCarCircleFilledIcon],svg[pepicons-pop-car-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPopCarCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:g fill="#000"><svg:path fill-rule="evenodd" d="M8.653 5.79a2.5 2.5 0 0 0-1.837 1.823l-1.13 4.523A2.5 2.5 0 0 0 4 14.5v3A2.5 2.5 0 0 0 6.5 20h13a2.5 2.5 0 0 0 2.5-2.5v-3a2.5 2.5 0 0 0-1.685-2.364l-1.131-4.523a2.5 2.5 0 0 0-1.836-1.823A18.4 18.4 0 0 0 13 5.263q-2.175 0-4.348.527M6.5 14a1 1 0 0 0 .97-.758l1.286-5.144a.5.5 0 0 1 .368-.365A16.4 16.4 0 0 1 13 7.263a16.4 16.4 0 0 1 3.876.47a.5.5 0 0 1 .367.365l1.286 5.144a1 1 0 0 0 .97.758a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 .5-.5" clip-rule="evenodd"></svg:path><svg:path d="M19.5 16a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0m-10 0a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0M7 18.5A1.5 1.5 0 0 1 8.5 20v1a1.5 1.5 0 0 1-3 0v-1A1.5 1.5 0 0 1 7 18.5m12 0a1.5 1.5 0 0 1 1.5 1.5v1a1.5 1.5 0 0 1-3 0v-1a1.5 1.5 0 0 1 1.5-1.5"></svg:path><svg:path fill-rule="evenodd" d="M15.195 8h-4.39a2 2 0 0 0-1.956 1.58l-.429 2A2 2 0 0 0 10.376 14h5.248a2 2 0 0 0 1.955-2.42l-.429-2A2 2 0 0 0 15.195 8m-4.82 4l.43-2h4.39l.429 2z" clip-rule="evenodd"></svg:path></svg:g></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPopCarCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPopCarCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopCarCircleOffIcon],svg[pepicons-pop-car-circle-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M8.653 5.79a2.5 2.5 0 0 0-1.837 1.823l-1.13 4.523A2.5 2.5 0 0 0 4 14.5v3A2.5 2.5 0 0 0 6.5 20h13a2.5 2.5 0 0 0 2.5-2.5v-3a2.5 2.5 0 0 0-1.685-2.364l-1.131-4.523a2.5 2.5 0 0 0-1.836-1.823A18.4 18.4 0 0 0 13 5.263q-2.175 0-4.348.527M6.5 14a1 1 0 0 0 .97-.758l1.286-5.144a.5.5 0 0 1 .368-.365A16.4 16.4 0 0 1 13 7.263a16.4 16.4 0 0 1 3.876.47a.5.5 0 0 1 .367.365l1.286 5.144a1 1 0 0 0 .97.758a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 .5-.5" clip-rule="evenodd"></svg:path><svg:path d="M19.5 16a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0m-10 0a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0M7 18.5A1.5 1.5 0 0 1 8.5 20v1a1.5 1.5 0 0 1-3 0v-1A1.5 1.5 0 0 1 7 18.5m12 0a1.5 1.5 0 0 1 1.5 1.5v1a1.5 1.5 0 0 1-3 0v-1a1.5 1.5 0 0 1 1.5-1.5"></svg:path><svg:path fill-rule="evenodd" d="M15.195 8h-4.39a2 2 0 0 0-1.956 1.58l-.429 2A2 2 0 0 0 10.376 14h5.248a2 2 0 0 0 1.955-2.42l-.429-2A2 2 0 0 0 15.195 8m-4.82 4l.43-2h4.39l.429 2z" clip-rule="evenodd"></svg:path><svg:path d="M4.293 5.707a1 1 0 0 1 1.414-1.414l16 16a1 1 0 0 1-1.414 1.414z"></svg:path><svg:path fill-rule="evenodd" d="M13 24c6.075 0 11-4.925 11-11S19.075 2 13 2S2 6.925 2 13s4.925 11 11 11m0 2c7.18 0 13-5.82 13-13S20.18 0 13 0S0 5.82 0 13s5.82 13 13 13" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPopCarCircleOffIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopCarOffIcon],svg[pepicons-pop-car-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M5.653 2.79a2.5 2.5 0 0 0-1.837 1.823l-1.13 4.523A2.5 2.5 0 0 0 1 11.5v3A2.5 2.5 0 0 0 3.5 17h13a2.5 2.5 0 0 0 2.5-2.5v-3a2.5 2.5 0 0 0-1.685-2.364l-1.131-4.523a2.5 2.5 0 0 0-1.836-1.823A18.4 18.4 0 0 0 10 2.263q-2.175 0-4.348.527M3.5 11a1 1 0 0 0 .97-.758l1.286-5.144a.5.5 0 0 1 .368-.365A16.4 16.4 0 0 1 10 4.263a16.4 16.4 0 0 1 3.876.47a.5.5 0 0 1 .367.365l1.286 5.145a1 1 0 0 0 .97.757a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 .5-.5" clip-rule="evenodd"></svg:path><svg:path d="M16.5 13a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0m-10 0a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0M4 15.5A1.5 1.5 0 0 1 5.5 17v1a1.5 1.5 0 0 1-3 0v-1A1.5 1.5 0 0 1 4 15.5m12 0a1.5 1.5 0 0 1 1.5 1.5v1a1.5 1.5 0 0 1-3 0v-1a1.5 1.5 0 0 1 1.5-1.5"></svg:path><svg:path fill-rule="evenodd" d="M12.195 5h-4.39a2 2 0 0 0-1.956 1.58l-.429 2A2 2 0 0 0 7.376 11h5.248a2 2 0 0 0 1.955-2.42l-.429-2A2 2 0 0 0 12.195 5m-4.82 4l.43-2h4.39l.429 2z" clip-rule="evenodd"></svg:path><svg:path d="M1.293 2.707a1 1 0 0 1 1.414-1.414l16 16a1 1 0 0 1-1.414 1.414z"></svg:path></svg:g>`,
})
export class PepiconsPopCarOffIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopCartIcon],svg[pepicons-pop-cart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M16.513 6H7.487A2.5 2.5 0 0 0 5.05 9.057l.913 4A2.5 2.5 0 0 0 8.401 15H15.6a2.5 2.5 0 0 0 2.437-1.943l.913-4A2.5 2.5 0 0 0 16.513 6M7.376 8.013A.5.5 0 0 1 7.487 8h9.026a.5.5 0 0 1 .487.611l-.913 4A.5.5 0 0 1 15.6 13H8.4a.5.5 0 0 1-.487-.389l-.913-4a.5.5 0 0 1 .376-.598" clip-rule="evenodd"></svg:path><svg:path d="M3.49 2H2a1 1 0 0 1 0-2h2.29a1 1 0 0 1 .975.78l2.71 12a1 1 0 1 1-1.95.44zM10 17.25a1.75 1.75 0 1 1-3.5 0a1.75 1.75 0 0 1 3.5 0m7 0a1.75 1.75 0 1 1-3.5 0a1.75 1.75 0 0 1 3.5 0"></svg:path></svg:g>`,
})
export class PepiconsPopCartIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopCartCircleIcon],svg[pepicons-pop-cart-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M19.513 9h-9.026a2.5 2.5 0 0 0-2.437 3.057l.913 4A2.5 2.5 0 0 0 11.401 18H18.6a2.5 2.5 0 0 0 2.437-1.943l.913-4A2.5 2.5 0 0 0 19.513 9m-9.137 2.013a.5.5 0 0 1 .111-.013h9.026a.5.5 0 0 1 .487.611l-.913 4A.5.5 0 0 1 18.6 16h-7.2a.5.5 0 0 1-.487-.389l-.913-4a.5.5 0 0 1 .376-.598" clip-rule="evenodd"></svg:path><svg:path d="M6.49 5H5a1 1 0 0 1 0-2h2.29a1 1 0 0 1 .975.78l2.71 12a1 1 0 1 1-1.95.44zM13 20.25a1.75 1.75 0 1 1-3.5 0a1.75 1.75 0 0 1 3.5 0m7 0a1.75 1.75 0 1 1-3.5 0a1.75 1.75 0 0 1 3.5 0"></svg:path><svg:path fill-rule="evenodd" d="M13 24c6.075 0 11-4.925 11-11S19.075 2 13 2S2 6.925 2 13s4.925 11 11 11m0 2c7.18 0 13-5.82 13-13S20.18 0 13 0S0 5.82 0 13s5.82 13 13 13" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPopCartCircleIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopCartCircleFilledIcon],svg[pepicons-pop-cart-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPopCartCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:g fill="#000"><svg:path fill-rule="evenodd" d="M19.513 9h-9.026a2.5 2.5 0 0 0-2.437 3.057l.913 4A2.5 2.5 0 0 0 11.401 18H18.6a2.5 2.5 0 0 0 2.437-1.943l.913-4A2.5 2.5 0 0 0 19.513 9m-9.137 2.013a.5.5 0 0 1 .111-.013h9.026a.5.5 0 0 1 .487.611l-.913 4A.5.5 0 0 1 18.6 16h-7.2a.5.5 0 0 1-.487-.389l-.913-4a.5.5 0 0 1 .376-.598" clip-rule="evenodd"></svg:path><svg:path d="M6.49 5H5a1 1 0 0 1 0-2h2.29a1 1 0 0 1 .975.78l2.71 12a1 1 0 1 1-1.95.44zM13 20.25a1.75 1.75 0 1 1-3.5 0a1.75 1.75 0 0 1 3.5 0m7 0a1.75 1.75 0 1 1-3.5 0a1.75 1.75 0 0 1 3.5 0"></svg:path></svg:g></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPopCartCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPopCartCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopCartCircleOffIcon],svg[pepicons-pop-cart-circle-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M19.513 9h-9.026a2.5 2.5 0 0 0-2.437 3.057l.913 4A2.5 2.5 0 0 0 11.401 18H18.6a2.5 2.5 0 0 0 2.437-1.943l.913-4A2.5 2.5 0 0 0 19.513 9m-9.137 2.013a.5.5 0 0 1 .111-.013h9.026a.5.5 0 0 1 .487.611l-.913 4A.5.5 0 0 1 18.6 16h-7.2a.5.5 0 0 1-.487-.389l-.913-4a.5.5 0 0 1 .376-.598" clip-rule="evenodd"></svg:path><svg:path d="M6.49 5H5a1 1 0 0 1 0-2h2.29a1 1 0 0 1 .975.78l2.71 12a1 1 0 1 1-1.95.44zM13 20.25a1.75 1.75 0 1 1-3.5 0a1.75 1.75 0 0 1 3.5 0m7 0a1.75 1.75 0 1 1-3.5 0a1.75 1.75 0 0 1 3.5 0"></svg:path><svg:path d="M4.293 5.707a1 1 0 0 1 1.414-1.414l16 16a1 1 0 0 1-1.414 1.414z"></svg:path><svg:path fill-rule="evenodd" d="M13 24c6.075 0 11-4.925 11-11S19.075 2 13 2S2 6.925 2 13s4.925 11 11 11m0 2c7.18 0 13-5.82 13-13S20.18 0 13 0S0 5.82 0 13s5.82 13 13 13" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPopCartCircleOffIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopCartOffIcon],svg[pepicons-pop-cart-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M16.513 6H7.487A2.5 2.5 0 0 0 5.05 9.057l.913 4A2.5 2.5 0 0 0 8.401 15H15.6a2.5 2.5 0 0 0 2.437-1.943l.913-4A2.5 2.5 0 0 0 16.513 6M7.376 8.013A.5.5 0 0 1 7.487 8h9.026a.5.5 0 0 1 .487.611l-.913 4A.5.5 0 0 1 15.6 13H8.4a.5.5 0 0 1-.487-.389l-.913-4a.5.5 0 0 1 .376-.598" clip-rule="evenodd"></svg:path><svg:path d="M3.49 2H2a1 1 0 0 1 0-2h2.29a1 1 0 0 1 .975.78l2.71 12a1 1 0 1 1-1.95.44zM10 17.25a1.75 1.75 0 1 1-3.5 0a1.75 1.75 0 0 1 3.5 0m7 0a1.75 1.75 0 1 1-3.5 0a1.75 1.75 0 0 1 3.5 0"></svg:path><svg:path d="M1.293 2.707a1 1 0 0 1 1.414-1.414l16 16a1 1 0 0 1-1.414 1.414z"></svg:path></svg:g>`,
})
export class PepiconsPopCartOffIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopCellphoneEyeIcon],svg[pepicons-pop-cellphone-eye-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M12.675 15.138a.675.675 0 1 1-1.35 0a.675.675 0 0 1 1.35 0"></svg:path><svg:path fill-rule="evenodd" d="M12 14.963a.175.175 0 1 0 0 .35a.175.175 0 0 0 0-.35m-1.175.175a1.175 1.175 0 1 1 2.35 0a1.175 1.175 0 0 1-2.35 0" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M5.5 3.5a3 3 0 0 1 3-3h7a3 3 0 0 1 3 3v13a3 3 0 0 1-3 3H8A2.5 2.5 0 0 1 5.5 17v-.5a1 1 0 1 1 2 0v.5a.5.5 0 0 0 .5.5h7.5a1 1 0 0 0 1-1v-13a1 1 0 0 0-1-1h-7a1 1 0 0 0-1 1v2.25a1 1 0 0 1-2 0z" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M3.138 12.36c.533.3 1.337.516 2.28.516s1.746-.217 2.28-.517c.564-.317.637-.6.637-.686s-.073-.37-.638-.687c-.533-.3-1.337-.517-2.28-.517s-1.746.217-2.28.517c-.564.318-.637.6-.637.687c0 .086.073.369.638.686m-.98 1.742c-.854-.48-1.658-1.3-1.658-2.43s.804-1.95 1.657-2.43c.885-.497 2.04-.773 3.26-.773c1.221 0 2.376.276 3.26.774c.854.48 1.658 1.3 1.658 2.43s-.804 1.95-1.657 2.43c-.885.497-2.04.773-3.26.773c-1.222 0-2.376-.276-3.26-.774" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M5.417 7.1a.9.9 0 0 1 .9.9v1.469a.9.9 0 0 1-1.8 0V8a.9.9 0 0 1 .9-.9" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M7.553 7.362a.9.9 0 0 1 .706 1.06l-.245 1.224a.9.9 0 0 1-1.765-.353l.245-1.225a.9.9 0 0 1 1.059-.706m-4.271 0a.9.9 0 0 0-.706 1.06l.245 1.224a.9.9 0 0 0 1.765-.353l-.245-1.225a.9.9 0 0 0-1.059-.706" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M1.037 8.208a.9.9 0 0 0-.309 1.234l.735 1.225a.9.9 0 0 0 1.543-.926l-.734-1.225a.9.9 0 0 0-1.235-.308m8.761 0a.9.9 0 0 1 .309 1.234l-.735 1.225A.9.9 0 0 1 7.83 9.74l.734-1.225a.9.9 0 0 1 1.235-.308" clip-rule="evenodd"></svg:path><svg:path d="M5.415 10.88a.75.75 0 1 1 0 1.5a.75.75 0 0 1 0-1.5"></svg:path><svg:path fill-rule="evenodd" d="M5.665 11.63a.25.25 0 1 0-.5 0a.25.25 0 0 0 .5 0m-.25 1.75a1.75 1.75 0 1 1 0-3.5a1.75 1.75 0 0 1 0 3.5" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPopCellphoneEyeIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopCellphoneEyeCircleIcon],svg[pepicons-pop-cellphone-eye-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M15.675 18.138a.675.675 0 1 1-1.35 0a.675.675 0 0 1 1.35 0"></svg:path><svg:path fill-rule="evenodd" d="M15 17.963a.175.175 0 1 0 0 .35a.175.175 0 0 0 0-.35m-1.175.174a1.175 1.175 0 1 1 2.35 0a1.175 1.175 0 0 1-2.35 0" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M8.5 6.5a3 3 0 0 1 3-3h7a3 3 0 0 1 3 3v13a3 3 0 0 1-3 3H11A2.5 2.5 0 0 1 8.5 20v-.5a1 1 0 1 1 2 0v.5a.5.5 0 0 0 .5.5h7.5a1 1 0 0 0 1-1v-13a1 1 0 0 0-1-1h-7a1 1 0 0 0-1 1v2.25a1 1 0 0 1-2 0z" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M6.138 15.36c.533.3 1.337.516 2.28.516s1.746-.217 2.28-.517c.564-.317.637-.6.637-.686s-.073-.37-.638-.687c-.533-.3-1.337-.517-2.28-.517s-1.746.217-2.28.517c-.564.318-.637.6-.637.687c0 .086.073.369.638.686m-.98 1.742c-.854-.48-1.658-1.3-1.658-2.43s.804-1.95 1.657-2.43c.885-.497 2.04-.773 3.26-.773c1.221 0 2.376.276 3.26.774c.854.48 1.658 1.3 1.658 2.43s-.804 1.95-1.657 2.43c-.885.497-2.04.773-3.26.773c-1.222 0-2.376-.276-3.26-.774" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M8.417 10.1a.9.9 0 0 1 .9.9v1.469a.9.9 0 0 1-1.8 0V11a.9.9 0 0 1 .9-.9" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M10.553 10.362a.9.9 0 0 1 .706 1.06l-.245 1.224a.9.9 0 0 1-1.765-.353l.245-1.225a.9.9 0 0 1 1.059-.706m-4.271 0a.9.9 0 0 0-.706 1.06l.245 1.224a.9.9 0 0 0 1.765-.353l-.245-1.225a.9.9 0 0 0-1.059-.706" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M4.037 11.208a.9.9 0 0 0-.309 1.234l.735 1.225a.9.9 0 0 0 1.543-.926l-.734-1.225a.9.9 0 0 0-1.235-.308m8.761 0a.9.9 0 0 1 .309 1.234l-.735 1.225a.9.9 0 0 1-1.543-.926l.734-1.225a.9.9 0 0 1 1.235-.308" clip-rule="evenodd"></svg:path><svg:path d="M8.415 13.88a.75.75 0 1 1 0 1.5a.75.75 0 0 1 0-1.5"></svg:path><svg:path fill-rule="evenodd" d="M8.665 14.63a.25.25 0 1 0-.5 0a.25.25 0 0 0 .5 0m-.25 1.75a1.75 1.75 0 1 1 0-3.5a1.75 1.75 0 0 1 0 3.5" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M13 24c6.075 0 11-4.925 11-11S19.075 2 13 2S2 6.925 2 13s4.925 11 11 11m0 2c7.18 0 13-5.82 13-13S20.18 0 13 0S0 5.82 0 13s5.82 13 13 13" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPopCellphoneEyeCircleIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopCellphoneEyeCircleFilledIcon],svg[pepicons-pop-cellphone-eye-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPopCellphoneEyeCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:g fill="#000"><svg:path d="M15.675 18.138a.675.675 0 1 1-1.35 0a.675.675 0 0 1 1.35 0"></svg:path><svg:path fill-rule="evenodd" d="M15 17.963a.175.175 0 1 0 0 .35a.175.175 0 0 0 0-.35m-1.175.174a1.175 1.175 0 1 1 2.35 0a1.175 1.175 0 0 1-2.35 0" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M8.5 6.5a3 3 0 0 1 3-3h7a3 3 0 0 1 3 3v13a3 3 0 0 1-3 3H11A2.5 2.5 0 0 1 8.5 20v-.5a1 1 0 1 1 2 0v.5a.5.5 0 0 0 .5.5h7.5a1 1 0 0 0 1-1v-13a1 1 0 0 0-1-1h-7a1 1 0 0 0-1 1v2.25a1 1 0 0 1-2 0z" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M6.138 15.36c.533.3 1.337.516 2.28.516s1.746-.217 2.28-.517c.564-.317.637-.6.637-.686s-.073-.37-.638-.687c-.533-.3-1.337-.517-2.28-.517s-1.746.217-2.28.517c-.564.318-.637.6-.637.687c0 .086.073.369.638.686m-.98 1.742c-.854-.48-1.658-1.3-1.658-2.43s.804-1.95 1.657-2.43c.885-.497 2.04-.773 3.26-.773c1.221 0 2.376.276 3.26.774c.854.48 1.658 1.3 1.658 2.43s-.804 1.95-1.657 2.43c-.885.497-2.04.773-3.26.773c-1.222 0-2.376-.276-3.26-.774" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M8.417 10.1a.9.9 0 0 1 .9.9v1.469a.9.9 0 0 1-1.8 0V11a.9.9 0 0 1 .9-.9" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M10.553 10.362a.9.9 0 0 1 .706 1.06l-.245 1.224a.9.9 0 0 1-1.765-.353l.245-1.225a.9.9 0 0 1 1.059-.706m-4.271 0a.9.9 0 0 0-.706 1.06l.245 1.224a.9.9 0 0 0 1.765-.353l-.245-1.225a.9.9 0 0 0-1.059-.706" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M4.037 11.208a.9.9 0 0 0-.309 1.234l.735 1.225a.9.9 0 0 0 1.543-.926l-.734-1.225a.9.9 0 0 0-1.235-.308m8.761 0a.9.9 0 0 1 .309 1.234l-.735 1.225a.9.9 0 0 1-1.543-.926l.734-1.225a.9.9 0 0 1 1.235-.308" clip-rule="evenodd"></svg:path><svg:path d="M8.415 13.88a.75.75 0 1 1 0 1.5a.75.75 0 0 1 0-1.5"></svg:path><svg:path fill-rule="evenodd" d="M8.665 14.63a.25.25 0 1 0-.5 0a.25.25 0 0 0 .5 0m-.25 1.75a1.75 1.75 0 1 1 0-3.5a1.75 1.75 0 0 1 0 3.5" clip-rule="evenodd"></svg:path></svg:g></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPopCellphoneEyeCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPopCellphoneEyeCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopCellphoneEyeCircleOffIcon],svg[pepicons-pop-cellphone-eye-circle-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M15.675 18.138a.675.675 0 1 1-1.35 0a.675.675 0 0 1 1.35 0"></svg:path><svg:path fill-rule="evenodd" d="M15 17.963a.175.175 0 1 0 0 .35a.175.175 0 0 0 0-.35m-1.175.174a1.175 1.175 0 1 1 2.35 0a1.175 1.175 0 0 1-2.35 0" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M8.5 6.5a3 3 0 0 1 3-3h7a3 3 0 0 1 3 3v13a3 3 0 0 1-3 3H11A2.5 2.5 0 0 1 8.5 20v-.5a1 1 0 1 1 2 0v.5a.5.5 0 0 0 .5.5h7.5a1 1 0 0 0 1-1v-13a1 1 0 0 0-1-1h-7a1 1 0 0 0-1 1v2.25a1 1 0 0 1-2 0z" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M6.138 15.36c.533.3 1.337.516 2.28.516s1.746-.217 2.28-.517c.564-.317.637-.6.637-.686s-.073-.37-.638-.687c-.533-.3-1.337-.517-2.28-.517s-1.746.217-2.28.517c-.564.318-.637.6-.637.687c0 .086.073.369.638.686m-.98 1.742c-.854-.48-1.658-1.3-1.658-2.43s.804-1.95 1.657-2.43c.885-.497 2.04-.773 3.26-.773c1.221 0 2.376.276 3.26.774c.854.48 1.658 1.3 1.658 2.43s-.804 1.95-1.657 2.43c-.885.497-2.04.773-3.26.773c-1.222 0-2.376-.276-3.26-.774" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M8.417 10.1a.9.9 0 0 1 .9.9v1.469a.9.9 0 0 1-1.8 0V11a.9.9 0 0 1 .9-.9" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M10.553 10.362a.9.9 0 0 1 .706 1.06l-.245 1.224a.9.9 0 0 1-1.765-.353l.245-1.225a.9.9 0 0 1 1.059-.706m-4.271 0a.9.9 0 0 0-.706 1.06l.245 1.224a.9.9 0 0 0 1.765-.353l-.245-1.225a.9.9 0 0 0-1.059-.706" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M4.037 11.208a.9.9 0 0 0-.309 1.234l.735 1.225a.9.9 0 0 0 1.543-.926l-.734-1.225a.9.9 0 0 0-1.235-.308m8.761 0a.9.9 0 0 1 .309 1.234l-.735 1.225a.9.9 0 0 1-1.543-.926l.734-1.225a.9.9 0 0 1 1.235-.308" clip-rule="evenodd"></svg:path><svg:path d="M8.415 13.88a.75.75 0 1 1 0 1.5a.75.75 0 0 1 0-1.5"></svg:path><svg:path fill-rule="evenodd" d="M8.665 14.63a.25.25 0 1 0-.5 0a.25.25 0 0 0 .5 0m-.25 1.75a1.75 1.75 0 1 1 0-3.5a1.75 1.75 0 0 1 0 3.5" clip-rule="evenodd"></svg:path><svg:path d="M4.293 5.707a1 1 0 0 1 1.414-1.414l16 16a1 1 0 0 1-1.414 1.414z"></svg:path><svg:path fill-rule="evenodd" d="M13 24c6.075 0 11-4.925 11-11S19.075 2 13 2S2 6.925 2 13s4.925 11 11 11m0 2c7.18 0 13-5.82 13-13S20.18 0 13 0S0 5.82 0 13s5.82 13 13 13" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPopCellphoneEyeCircleOffIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopCellphoneEyeOffIcon],svg[pepicons-pop-cellphone-eye-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M12.675 15.138a.675.675 0 1 1-1.35 0a.675.675 0 0 1 1.35 0"></svg:path><svg:path fill-rule="evenodd" d="M12 14.963a.175.175 0 1 0 0 .35a.175.175 0 0 0 0-.35m-1.175.175a1.175 1.175 0 1 1 2.35 0a1.175 1.175 0 0 1-2.35 0" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M5.5 3.5a3 3 0 0 1 3-3h7a3 3 0 0 1 3 3v13a3 3 0 0 1-3 3H8A2.5 2.5 0 0 1 5.5 17v-.5a1 1 0 1 1 2 0v.5a.5.5 0 0 0 .5.5h7.5a1 1 0 0 0 1-1v-13a1 1 0 0 0-1-1h-7a1 1 0 0 0-1 1v2.25a1 1 0 0 1-2 0z" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M3.138 12.36c.533.3 1.337.516 2.28.516s1.746-.217 2.28-.517c.564-.317.637-.6.637-.686s-.073-.37-.638-.687c-.533-.3-1.337-.517-2.28-.517s-1.746.217-2.28.517c-.564.318-.637.6-.637.687c0 .086.073.369.638.686m-.98 1.742c-.854-.48-1.658-1.3-1.658-2.43s.804-1.95 1.657-2.43c.885-.497 2.04-.773 3.26-.773c1.221 0 2.376.276 3.26.774c.854.48 1.658 1.3 1.658 2.43s-.804 1.95-1.657 2.43c-.885.497-2.04.773-3.26.773c-1.222 0-2.376-.276-3.26-.774" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M5.417 7.1a.9.9 0 0 1 .9.9v1.469a.9.9 0 0 1-1.8 0V8a.9.9 0 0 1 .9-.9" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M7.553 7.362a.9.9 0 0 1 .706 1.06l-.245 1.224a.9.9 0 0 1-1.765-.353l.245-1.225a.9.9 0 0 1 1.059-.706m-4.271 0a.9.9 0 0 0-.706 1.06l.245 1.224a.9.9 0 0 0 1.765-.353l-.245-1.225a.9.9 0 0 0-1.059-.706" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M1.037 8.208a.9.9 0 0 0-.309 1.234l.735 1.225a.9.9 0 0 0 1.543-.926l-.734-1.225a.9.9 0 0 0-1.235-.308m8.761 0a.9.9 0 0 1 .309 1.234l-.735 1.225A.9.9 0 0 1 7.83 9.74l.734-1.225a.9.9 0 0 1 1.235-.308" clip-rule="evenodd"></svg:path><svg:path d="M5.415 10.88a.75.75 0 1 1 0 1.5a.75.75 0 0 1 0-1.5"></svg:path><svg:path fill-rule="evenodd" d="M5.665 11.63a.25.25 0 1 0-.5 0a.25.25 0 0 0 .5 0m-.25 1.75a1.75 1.75 0 1 1 0-3.5a1.75 1.75 0 0 1 0 3.5" clip-rule="evenodd"></svg:path><svg:path d="M1.293 2.707a1 1 0 0 1 1.414-1.414l16 16a1 1 0 0 1-1.414 1.414z"></svg:path></svg:g>`,
})
export class PepiconsPopCellphoneEyeOffIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopCellphoneLoopIcon],svg[pepicons-pop-cellphone-loop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M12.675 15.138a.675.675 0 1 1-1.35 0a.675.675 0 0 1 1.35 0"></svg:path><svg:path fill-rule="evenodd" d="M12 14.963a.175.175 0 1 0 0 .35a.175.175 0 0 0 0-.35m-1.175.175a1.175 1.175 0 1 1 2.35 0a1.175 1.175 0 0 1-2.35 0" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M5.5 3.5a3 3 0 0 1 3-3h7a3 3 0 0 1 3 3v13a3 3 0 0 1-3 3H8A2.5 2.5 0 0 1 5.5 17v-.5a1 1 0 1 1 2 0v.5a.5.5 0 0 0 .5.5h7.5a1 1 0 0 0 1-1v-13a1 1 0 0 0-1-1h-7a1 1 0 0 0-1 1v2.25a1 1 0 0 1-2 0z" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M7.347 9.38a2.193 2.193 0 1 0-2.567 3.555A2.193 2.193 0 0 0 7.347 9.38m-4.683-.677a4.193 4.193 0 1 1 1.827 6.342L2.4 17.942a1 1 0 1 1-1.622-1.17l2.091-2.897a4.195 4.195 0 0 1-.205-5.172" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPopCellphoneLoopIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopCellphoneLoopCircleIcon],svg[pepicons-pop-cellphone-loop-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M15.675 18.138a.675.675 0 1 1-1.35 0a.675.675 0 0 1 1.35 0"></svg:path><svg:path fill-rule="evenodd" d="M15 17.963a.175.175 0 1 0 0 .35a.175.175 0 0 0 0-.35m-1.175.174a1.175 1.175 0 1 1 2.35 0a1.175 1.175 0 0 1-2.35 0" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M8.5 6.5a3 3 0 0 1 3-3h7a3 3 0 0 1 3 3v13a3 3 0 0 1-3 3H11A2.5 2.5 0 0 1 8.5 20v-.5a1 1 0 1 1 2 0v.5a.5.5 0 0 0 .5.5h7.5a1 1 0 0 0 1-1v-13a1 1 0 0 0-1-1h-7a1 1 0 0 0-1 1v2.25a1 1 0 0 1-2 0z" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M10.347 12.38a2.193 2.193 0 1 0-2.567 3.555a2.193 2.193 0 0 0 2.567-3.555m-4.683-.677a4.193 4.193 0 1 1 1.827 6.342L5.4 20.942a1 1 0 1 1-1.622-1.17l2.091-2.898a4.195 4.195 0 0 1-.205-5.17" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M13 24c6.075 0 11-4.925 11-11S19.075 2 13 2S2 6.925 2 13s4.925 11 11 11m0 2c7.18 0 13-5.82 13-13S20.18 0 13 0S0 5.82 0 13s5.82 13 13 13" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPopCellphoneLoopCircleIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopCellphoneLoopCircleFilledIcon],svg[pepicons-pop-cellphone-loop-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPopCellphoneLoopCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:g fill="#000"><svg:path d="M15.675 18.138a.675.675 0 1 1-1.35 0a.675.675 0 0 1 1.35 0"></svg:path><svg:path fill-rule="evenodd" d="M15 17.963a.175.175 0 1 0 0 .35a.175.175 0 0 0 0-.35m-1.175.174a1.175 1.175 0 1 1 2.35 0a1.175 1.175 0 0 1-2.35 0" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M8.5 6.5a3 3 0 0 1 3-3h7a3 3 0 0 1 3 3v13a3 3 0 0 1-3 3H11A2.5 2.5 0 0 1 8.5 20v-.5a1 1 0 1 1 2 0v.5a.5.5 0 0 0 .5.5h7.5a1 1 0 0 0 1-1v-13a1 1 0 0 0-1-1h-7a1 1 0 0 0-1 1v2.25a1 1 0 0 1-2 0z" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M10.347 12.38a2.193 2.193 0 1 0-2.567 3.555a2.193 2.193 0 0 0 2.567-3.555m-4.683-.677a4.193 4.193 0 1 1 1.827 6.342L5.4 20.942a1 1 0 1 1-1.622-1.17l2.091-2.898a4.195 4.195 0 0 1-.205-5.17" clip-rule="evenodd"></svg:path></svg:g></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPopCellphoneLoopCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPopCellphoneLoopCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopCellphoneLoopCircleOffIcon],svg[pepicons-pop-cellphone-loop-circle-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M15.675 18.138a.675.675 0 1 1-1.35 0a.675.675 0 0 1 1.35 0"></svg:path><svg:path fill-rule="evenodd" d="M15 17.963a.175.175 0 1 0 0 .35a.175.175 0 0 0 0-.35m-1.175.174a1.175 1.175 0 1 1 2.35 0a1.175 1.175 0 0 1-2.35 0" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M8.5 6.5a3 3 0 0 1 3-3h7a3 3 0 0 1 3 3v13a3 3 0 0 1-3 3H11A2.5 2.5 0 0 1 8.5 20v-.5a1 1 0 1 1 2 0v.5a.5.5 0 0 0 .5.5h7.5a1 1 0 0 0 1-1v-13a1 1 0 0 0-1-1h-7a1 1 0 0 0-1 1v2.25a1 1 0 0 1-2 0z" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M10.347 12.38a2.193 2.193 0 1 0-2.567 3.555a2.193 2.193 0 0 0 2.567-3.555m-4.683-.677a4.193 4.193 0 1 1 1.827 6.342L5.4 20.942a1 1 0 1 1-1.622-1.17l2.091-2.898a4.195 4.195 0 0 1-.205-5.17" clip-rule="evenodd"></svg:path><svg:path d="M4.293 5.707a1 1 0 0 1 1.414-1.414l16 16a1 1 0 0 1-1.414 1.414z"></svg:path><svg:path fill-rule="evenodd" d="M13 24c6.075 0 11-4.925 11-11S19.075 2 13 2S2 6.925 2 13s4.925 11 11 11m0 2c7.18 0 13-5.82 13-13S20.18 0 13 0S0 5.82 0 13s5.82 13 13 13" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPopCellphoneLoopCircleOffIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopCellphoneLoopOffIcon],svg[pepicons-pop-cellphone-loop-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M12.675 15.138a.675.675 0 1 1-1.35 0a.675.675 0 0 1 1.35 0"></svg:path><svg:path fill-rule="evenodd" d="M12 14.963a.175.175 0 1 0 0 .35a.175.175 0 0 0 0-.35m-1.175.175a1.175 1.175 0 1 1 2.35 0a1.175 1.175 0 0 1-2.35 0" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M5.5 3.5a3 3 0 0 1 3-3h7a3 3 0 0 1 3 3v13a3 3 0 0 1-3 3H8A2.5 2.5 0 0 1 5.5 17v-.5a1 1 0 1 1 2 0v.5a.5.5 0 0 0 .5.5h7.5a1 1 0 0 0 1-1v-13a1 1 0 0 0-1-1h-7a1 1 0 0 0-1 1v2.25a1 1 0 0 1-2 0z" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M7.347 9.38a2.193 2.193 0 1 0-2.567 3.555A2.193 2.193 0 0 0 7.347 9.38m-4.683-.677a4.193 4.193 0 1 1 1.827 6.342L2.4 17.942a1 1 0 1 1-1.622-1.17l2.091-2.897a4.195 4.195 0 0 1-.205-5.172" clip-rule="evenodd"></svg:path><svg:path d="M1.293 2.707a1 1 0 0 1 1.414-1.414l16 16a1 1 0 0 1-1.414 1.414z"></svg:path></svg:g>`,
})
export class PepiconsPopCellphoneLoopOffIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopChainIcon],svg[pepicons-pop-chain-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M10.392 11.564a2 2 0 0 1-.587-2.767l2.181-3.353a2 2 0 1 1 3.353 2.18l-2.18 3.354a2 2 0 0 1-2.767.586m-2.442.202a4 4 0 0 1 .179-4.06l2.18-3.353a4 4 0 1 1 6.707 4.362l-2.18 3.353a4 4 0 0 1-6.886-.302"></svg:path><svg:path d="M5.444 15.503a2 2 0 0 1-.587-2.767l2.181-3.353a2 2 0 1 1 3.353 2.18l-2.18 3.354a2 2 0 0 1-2.767.586m-2.442.202a4 4 0 0 1 .179-4.06l2.18-3.352a4 4 0 1 1 6.707 4.361l-2.18 3.353a4 4 0 0 1-6.886-.302"></svg:path></svg:g>`,
})
export class PepiconsPopChainIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopChainCircleIcon],svg[pepicons-pop-chain-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M13.392 14.564a2 2 0 0 1-.587-2.767l2.181-3.353a2 2 0 1 1 3.353 2.18l-2.18 3.354a2 2 0 0 1-2.767.586m-2.442.202a4 4 0 0 1 .179-4.06l2.18-3.353a4 4 0 1 1 6.707 4.362l-2.18 3.353a4 4 0 0 1-6.886-.302"></svg:path><svg:path d="M8.444 18.503a2 2 0 0 1-.587-2.767l2.181-3.353a2 2 0 1 1 3.353 2.18l-2.18 3.354a2 2 0 0 1-2.767.586m-2.442.202a4 4 0 0 1 .179-4.06l2.18-3.352a4 4 0 1 1 6.707 4.361l-2.18 3.353a4 4 0 0 1-6.886-.302"></svg:path><svg:path d="M13 24c6.075 0 11-4.925 11-11S19.075 2 13 2S2 6.925 2 13s4.925 11 11 11m0 2c7.18 0 13-5.82 13-13S20.18 0 13 0S0 5.82 0 13s5.82 13 13 13"></svg:path></svg:g>`,
})
export class PepiconsPopChainCircleIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopChainCircleFilledIcon],svg[pepicons-pop-chain-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPopChainCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:g fill="#000" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M13.392 14.564a2 2 0 0 1-.587-2.767l2.181-3.353a2 2 0 1 1 3.353 2.18l-2.18 3.354a2 2 0 0 1-2.767.586m-2.442.202a4 4 0 0 1 .179-4.06l2.18-3.353a4 4 0 1 1 6.707 4.362l-2.18 3.353a4 4 0 0 1-6.886-.302"></svg:path><svg:path d="M8.444 18.503a2 2 0 0 1-.587-2.767l2.181-3.353a2 2 0 1 1 3.353 2.18l-2.18 3.354a2 2 0 0 1-2.767.586m-2.442.202a4 4 0 0 1 .179-4.06l2.18-3.352a4 4 0 1 1 6.707 4.361l-2.18 3.353a4 4 0 0 1-6.886-.302"></svg:path></svg:g></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPopChainCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPopChainCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopChainCircleOffIcon],svg[pepicons-pop-chain-circle-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M13.392 14.564a2 2 0 0 1-.587-2.767l2.181-3.353a2 2 0 1 1 3.353 2.18l-2.18 3.354a2 2 0 0 1-2.767.586m-2.442.202a4 4 0 0 1 .179-4.06l2.18-3.353a4 4 0 1 1 6.707 4.362l-2.18 3.353a4 4 0 0 1-6.886-.302" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M8.444 18.503a2 2 0 0 1-.587-2.767l2.181-3.353a2 2 0 1 1 3.353 2.18l-2.18 3.354a2 2 0 0 1-2.767.586m-2.442.202a4 4 0 0 1 .179-4.06l2.18-3.352a4 4 0 1 1 6.707 4.361l-2.18 3.353a4 4 0 0 1-6.886-.302" clip-rule="evenodd"></svg:path><svg:path d="M4.293 5.707a1 1 0 0 1 1.414-1.414l16 16a1 1 0 0 1-1.414 1.414z"></svg:path><svg:path fill-rule="evenodd" d="M13 24c6.075 0 11-4.925 11-11S19.075 2 13 2S2 6.925 2 13s4.925 11 11 11m0 2c7.18 0 13-5.82 13-13S20.18 0 13 0S0 5.82 0 13s5.82 13 13 13" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPopChainCircleOffIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopChainOffIcon],svg[pepicons-pop-chain-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M10.392 11.564a2 2 0 0 1-.587-2.767l2.181-3.353a2 2 0 1 1 3.353 2.18l-2.18 3.354a2 2 0 0 1-2.767.586m-2.442.202a4 4 0 0 1 .179-4.06l2.18-3.353a4 4 0 1 1 6.707 4.362l-2.18 3.353a4 4 0 0 1-6.886-.302" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M5.444 15.503a2 2 0 0 1-.587-2.767l2.181-3.353a2 2 0 1 1 3.353 2.18l-2.18 3.354a2 2 0 0 1-2.767.586m-2.442.202a4 4 0 0 1 .179-4.06l2.18-3.352a4 4 0 1 1 6.707 4.361l-2.18 3.353a4 4 0 0 1-6.886-.302" clip-rule="evenodd"></svg:path><svg:path d="M1.293 2.707a1 1 0 0 1 1.414-1.414l16 16a1 1 0 0 1-1.414 1.414z"></svg:path></svg:g>`,
})
export class PepiconsPopChainOffIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopCheckmarkIcon],svg[pepicons-pop-checkmark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m15.374 5.986l-5 9c-.647 1.165-2.396.194-1.748-.972l5-9c.647-1.165 2.396-.194 1.748.972"></svg:path><svg:path d="m5.125 9.72l5 4c1.04.832-.209 2.394-1.25 1.56l-5-4c-1.04-.832.209-2.394 1.25-1.56"></svg:path></svg:g>`,
})
export class PepiconsPopCheckmarkIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopCheckmarkCircleIcon],svg[pepicons-pop-checkmark-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m18.374 8.986l-5 9c-.647 1.165-2.396.194-1.748-.972l5-9c.647-1.165 2.396-.194 1.748.972"></svg:path><svg:path d="m8.125 12.72l5 4c1.04.832-.209 2.394-1.25 1.56l-5-4c-1.04-.832.209-2.394 1.25-1.56"></svg:path><svg:path fill-rule="evenodd" d="M13 24c6.075 0 11-4.925 11-11S19.075 2 13 2S2 6.925 2 13s4.925 11 11 11m0 2c7.18 0 13-5.82 13-13S20.18 0 13 0S0 5.82 0 13s5.82 13 13 13" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPopCheckmarkCircleIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopCheckmarkCircleFilledIcon],svg[pepicons-pop-checkmark-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPopCheckmarkCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:g fill="#000"><svg:path d="m18.374 8.986l-5 9c-.647 1.165-2.396.194-1.748-.972l5-9c.647-1.165 2.396-.194 1.748.972"></svg:path><svg:path d="m8.125 12.72l5 4c1.04.832-.209 2.394-1.25 1.56l-5-4c-1.04-.832.209-2.394 1.25-1.56"></svg:path></svg:g></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPopCheckmarkCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPopCheckmarkCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopCheckmarkCircleOffIcon],svg[pepicons-pop-checkmark-circle-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m18.374 8.986l-5 9c-.647 1.165-2.396.194-1.748-.972l5-9c.647-1.165 2.396-.194 1.748.972"></svg:path><svg:path d="m8.125 12.72l5 4c1.04.832-.209 2.394-1.25 1.56l-5-4c-1.04-.832.209-2.394 1.25-1.56M4.293 5.707a1 1 0 0 1 1.414-1.414l16 16a1 1 0 0 1-1.414 1.414z"></svg:path><svg:path fill-rule="evenodd" d="M13 24c6.075 0 11-4.925 11-11S19.075 2 13 2S2 6.925 2 13s4.925 11 11 11m0 2c7.18 0 13-5.82 13-13S20.18 0 13 0S0 5.82 0 13s5.82 13 13 13" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPopCheckmarkCircleOffIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopCheckmarkFilledIcon],svg[pepicons-pop-checkmark-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.213 5.8c.015.759-.398 1.785-.935 2.321a2.66 2.66 0 0 0 0 3.76c.53.528.92 1.444.935 2.192c.014.662.273 1.32.778 1.824a2.65 2.65 0 0 0 1.748.775c.791.04 1.827.5 2.387 1.06a2.66 2.66 0 0 0 3.759 0c.56-.56 1.596-1.02 2.387-1.06a2.65 2.65 0 0 0 1.748-.775a2.65 2.65 0 0 0 .777-1.826c.015-.746.4-1.656.929-2.184a2.663 2.663 0 0 0 .006-3.766c-.536-.535-.95-1.562-.934-2.32a2.65 2.65 0 0 0-.778-1.932a2.65 2.65 0 0 0-2.015-.775c-.714.036-1.615-.31-2.12-.816a2.66 2.66 0 0 0-3.76 0c-.504.505-1.406.852-2.12.816a2.65 2.65 0 0 0-2.014.775A2.65 2.65 0 0 0 3.213 5.8m9.828.826a1 1 0 0 1 .389 1.36l-2.768 4.982a1 1 0 0 1-.298.343a1 1 0 0 1-1.23-.045l-2.759-2.207a1 1 0 1 1 1.25-1.562l1.853 1.483l2.203-3.966a1 1 0 0 1 1.36-.388" clip-rule="evenodd"></svg:path>`,
})
export class PepiconsPopCheckmarkFilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopCheckmarkFilledCircleIcon],svg[pepicons-pop-checkmark-filled-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M6.213 8.8c.015.759-.398 1.785-.935 2.321a2.66 2.66 0 0 0 0 3.76c.53.528.92 1.444.935 2.192c.014.662.273 1.32.778 1.824a2.65 2.65 0 0 0 1.748.775c.791.04 1.827.5 2.387 1.06a2.66 2.66 0 0 0 3.759 0c.56-.56 1.596-1.02 2.387-1.06a2.65 2.65 0 0 0 1.748-.775a2.65 2.65 0 0 0 .777-1.826c.015-.746.4-1.656.929-2.184a2.663 2.663 0 0 0 .006-3.766c-.536-.535-.95-1.562-.934-2.32a2.65 2.65 0 0 0-.778-1.932a2.65 2.65 0 0 0-2.015-.775c-.713.036-1.615-.31-2.12-.816a2.66 2.66 0 0 0-3.76 0c-.504.505-1.406.852-2.12.816a2.65 2.65 0 0 0-2.014.775A2.65 2.65 0 0 0 6.213 8.8m9.828.826a1 1 0 0 1 .389 1.36l-2.768 4.982a1 1 0 0 1-.298.343a1 1 0 0 1-1.23-.045l-2.759-2.207a1 1 0 1 1 1.25-1.562l1.853 1.483l2.203-3.966a1 1 0 0 1 1.36-.388"></svg:path><svg:path d="M13 24c6.075 0 11-4.925 11-11S19.075 2 13 2S2 6.925 2 13s4.925 11 11 11m0 2c7.18 0 13-5.82 13-13S20.18 0 13 0S0 5.82 0 13s5.82 13 13 13"></svg:path></svg:g>`,
})
export class PepiconsPopCheckmarkFilledCircleIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopCheckmarkFilledCircleFilledIcon],svg[pepicons-pop-checkmark-filled-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPopCheckmarkFilledCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:path fill="#000" fill-rule="evenodd" d="M6.213 8.8c.015.759-.398 1.785-.935 2.321a2.66 2.66 0 0 0 0 3.76c.53.528.92 1.444.935 2.192c.014.662.273 1.32.778 1.824a2.65 2.65 0 0 0 1.748.775c.791.04 1.827.5 2.387 1.06a2.66 2.66 0 0 0 3.759 0c.56-.56 1.596-1.02 2.387-1.06a2.65 2.65 0 0 0 1.748-.775a2.65 2.65 0 0 0 .777-1.826c.015-.746.4-1.656.929-2.184a2.663 2.663 0 0 0 .006-3.766c-.536-.535-.95-1.562-.934-2.32a2.65 2.65 0 0 0-.778-1.932a2.65 2.65 0 0 0-2.015-.775c-.713.036-1.615-.31-2.12-.816a2.66 2.66 0 0 0-3.76 0c-.504.505-1.406.852-2.12.816a2.65 2.65 0 0 0-2.014.775A2.65 2.65 0 0 0 6.213 8.8m9.828.826a1 1 0 0 1 .389 1.36l-2.768 4.982a1 1 0 0 1-.298.343a1 1 0 0 1-1.23-.045l-2.759-2.207a1 1 0 1 1 1.25-1.562l1.853 1.483l2.203-3.966a1 1 0 0 1 1.36-.388" clip-rule="evenodd"></svg:path></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPopCheckmarkFilledCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPopCheckmarkFilledCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopCheckmarkFilledCircleOffIcon],svg[pepicons-pop-checkmark-filled-circle-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M6.213 8.8c.015.759-.398 1.785-.935 2.321a2.66 2.66 0 0 0 0 3.76c.53.528.92 1.444.935 2.192c.014.662.273 1.32.778 1.824a2.65 2.65 0 0 0 1.748.775c.791.04 1.827.5 2.387 1.06a2.66 2.66 0 0 0 3.759 0c.56-.56 1.596-1.02 2.387-1.06a2.65 2.65 0 0 0 1.748-.775a2.65 2.65 0 0 0 .777-1.826c.015-.746.4-1.656.929-2.184a2.663 2.663 0 0 0 .006-3.766c-.536-.535-.95-1.562-.934-2.32a2.65 2.65 0 0 0-.778-1.932a2.65 2.65 0 0 0-2.015-.775c-.713.036-1.615-.31-2.12-.816a2.66 2.66 0 0 0-3.76 0c-.504.505-1.406.852-2.12.816a2.65 2.65 0 0 0-2.014.775A2.65 2.65 0 0 0 6.213 8.8m9.828.826a1 1 0 0 1 .389 1.36l-2.768 4.982a1 1 0 0 1-.298.343a1 1 0 0 1-1.23-.045l-2.759-2.207a1 1 0 1 1 1.25-1.562l1.853 1.483l2.203-3.966a1 1 0 0 1 1.36-.388" clip-rule="evenodd"></svg:path><svg:path d="M4.293 5.707a1 1 0 0 1 1.414-1.414l16 16a1 1 0 0 1-1.414 1.414z"></svg:path><svg:path fill-rule="evenodd" d="M13 24c6.075 0 11-4.925 11-11S19.075 2 13 2S2 6.925 2 13s4.925 11 11 11m0 2c7.18 0 13-5.82 13-13S20.18 0 13 0S0 5.82 0 13s5.82 13 13 13" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPopCheckmarkFilledCircleOffIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopCheckmarkFilledOffIcon],svg[pepicons-pop-checkmark-filled-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M3.213 5.8c.015.759-.398 1.785-.935 2.321a2.66 2.66 0 0 0 0 3.76c.53.528.92 1.444.935 2.192c.014.662.273 1.32.778 1.824a2.65 2.65 0 0 0 1.748.775c.791.04 1.827.5 2.387 1.06a2.66 2.66 0 0 0 3.759 0c.56-.56 1.596-1.02 2.387-1.06a2.65 2.65 0 0 0 1.748-.775a2.65 2.65 0 0 0 .777-1.826c.015-.746.4-1.656.929-2.184a2.663 2.663 0 0 0 .006-3.766c-.536-.535-.95-1.562-.934-2.32a2.65 2.65 0 0 0-.778-1.932a2.65 2.65 0 0 0-2.015-.775c-.714.036-1.615-.31-2.12-.816a2.66 2.66 0 0 0-3.76 0c-.504.505-1.406.852-2.12.816a2.65 2.65 0 0 0-2.014.775A2.65 2.65 0 0 0 3.213 5.8m9.828.826a1 1 0 0 1 .389 1.36l-2.768 4.982a1 1 0 0 1-.298.343a1 1 0 0 1-1.23-.045l-2.759-2.207a1 1 0 1 1 1.25-1.562l1.853 1.483l2.203-3.966a1 1 0 0 1 1.36-.388" clip-rule="evenodd"></svg:path><svg:path d="M1.293 2.707a1 1 0 0 1 1.414-1.414l16 16a1 1 0 0 1-1.414 1.414z"></svg:path></svg:g>`,
})
export class PepiconsPopCheckmarkFilledOffIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopCheckmarkOffIcon],svg[pepicons-pop-checkmark-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m15.374 5.986l-5 9c-.647 1.165-2.396.194-1.748-.972l5-9c.647-1.165 2.396-.194 1.748.972"></svg:path><svg:path d="m5.125 9.72l5 4c1.04.832-.209 2.394-1.25 1.56l-5-4c-1.04-.832.209-2.394 1.25-1.56M1.293 2.707a1 1 0 0 1 1.414-1.414l16 16a1 1 0 0 1-1.414 1.414z"></svg:path></svg:g>`,
})
export class PepiconsPopCheckmarkOffIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopCheckmarkOutlinedIcon],svg[pepicons-pop-checkmark-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M13.041 6.626a1 1 0 0 1 .389 1.36l-2.778 5a1 1 0 1 1-1.748-.972l2.777-5a1 1 0 0 1 1.36-.388"></svg:path><svg:path d="M6.22 9.653a1 1 0 0 1 1.405-.156l2.778 2.222a1 1 0 1 1-1.25 1.562l-2.778-2.222a1 1 0 0 1-.156-1.406"></svg:path><svg:path d="M11.885 2.278L10.47 3.692a.66.66 0 0 0-.93 0c-.907.906-2.359 1.464-3.636 1.4a.65.65 0 0 0-.5.191a.65.65 0 0 0-.192.478c.014.72-.167 1.439-.405 2.03c-.238.592-.606 1.235-1.115 1.745a.66.66 0 0 0 0 .93c.893.894 1.494 2.301 1.52 3.566a.65.65 0 0 0 .192.451a.65.65 0 0 0 .432.192c.705.035 1.406.243 1.993.503c.588.261 1.212.641 1.71 1.14a.66.66 0 0 0 .93 0c.499-.499 1.123-.879 1.71-1.14c.588-.26 1.29-.468 1.993-.503a.65.65 0 0 0 .432-.192a.65.65 0 0 0 .193-.451c.026-1.265.627-2.672 1.52-3.566a.66.66 0 0 0 0-.93c-.51-.51-.877-1.153-1.115-1.745c-.238-.591-.42-1.31-.405-2.03a.65.65 0 0 0-.193-.478a.65.65 0 0 0-.499-.192c-1.278.065-2.73-.493-3.635-1.399zM3.213 5.8c.015.759-.398 1.785-.935 2.321a2.66 2.66 0 0 0 0 3.76c.53.528.92 1.444.935 2.192c.014.662.273 1.32.778 1.824a2.65 2.65 0 0 0 1.748.775c.791.04 1.827.5 2.387 1.06a2.66 2.66 0 0 0 3.759 0c.56-.56 1.596-1.02 2.387-1.06a2.65 2.65 0 0 0 1.748-.775a2.65 2.65 0 0 0 .777-1.824c.016-.748.406-1.664.935-2.193a2.66 2.66 0 0 0 0-3.759c-.536-.536-.95-1.562-.934-2.32a2.65 2.65 0 0 0-.778-1.932a2.65 2.65 0 0 0-2.015-.775c-.714.036-1.615-.31-2.12-.816a2.66 2.66 0 0 0-3.76 0c-.504.505-1.406.852-2.12.816a2.65 2.65 0 0 0-2.014.775A2.65 2.65 0 0 0 3.213 5.8"></svg:path></svg:g>`,
})
export class PepiconsPopCheckmarkOutlinedIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopCheckmarkOutlinedCircleIcon],svg[pepicons-pop-checkmark-outlined-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M16.041 9.626a1 1 0 0 1 .389 1.36l-2.778 5a1 1 0 1 1-1.748-.972l2.777-5a1 1 0 0 1 1.36-.388"></svg:path><svg:path d="M9.22 12.653a1 1 0 0 1 1.405-.156l2.778 2.222a1 1 0 1 1-1.25 1.562l-2.778-2.222a1 1 0 0 1-.156-1.406"></svg:path><svg:path d="M14.885 5.278L13.47 6.692a.66.66 0 0 0-.93 0c-.907.906-2.359 1.464-3.636 1.4a.65.65 0 0 0-.5.191a.65.65 0 0 0-.192.478c.014.72-.167 1.439-.405 2.03c-.238.592-.606 1.235-1.115 1.745a.66.66 0 0 0 0 .93c.893.894 1.494 2.301 1.52 3.566a.65.65 0 0 0 .192.451a.65.65 0 0 0 .432.192c.705.035 1.406.243 1.993.503c.588.261 1.212.641 1.71 1.14a.66.66 0 0 0 .93 0c.499-.499 1.123-.879 1.71-1.14c.588-.26 1.29-.468 1.993-.503a.65.65 0 0 0 .432-.192a.65.65 0 0 0 .193-.451c.026-1.265.627-2.672 1.52-3.566a.66.66 0 0 0 0-.93c-.51-.51-.877-1.153-1.115-1.745c-.238-.591-.42-1.31-.405-2.03a.65.65 0 0 0-.193-.478a.65.65 0 0 0-.499-.192c-1.278.065-2.73-.493-3.635-1.399zM6.213 8.8c.015.759-.398 1.785-.935 2.321a2.66 2.66 0 0 0 0 3.76c.53.528.92 1.444.935 2.192c.014.662.273 1.32.778 1.824a2.65 2.65 0 0 0 1.748.775c.791.04 1.827.5 2.387 1.06a2.66 2.66 0 0 0 3.759 0c.56-.56 1.596-1.02 2.387-1.06a2.65 2.65 0 0 0 1.748-.775a2.65 2.65 0 0 0 .777-1.824c.016-.748.406-1.664.935-2.193a2.66 2.66 0 0 0 0-3.759c-.536-.536-.95-1.562-.934-2.32a2.65 2.65 0 0 0-.778-1.932a2.65 2.65 0 0 0-2.015-.775c-.713.036-1.615-.31-2.12-.816a2.66 2.66 0 0 0-3.76 0c-.504.505-1.406.852-2.12.816a2.65 2.65 0 0 0-2.014.775A2.65 2.65 0 0 0 6.213 8.8"></svg:path><svg:path d="M13 24c6.075 0 11-4.925 11-11S19.075 2 13 2S2 6.925 2 13s4.925 11 11 11m0 2c7.18 0 13-5.82 13-13S20.18 0 13 0S0 5.82 0 13s5.82 13 13 13"></svg:path></svg:g>`,
})
export class PepiconsPopCheckmarkOutlinedCircleIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopCheckmarkOutlinedCircleFilledIcon],svg[pepicons-pop-checkmark-outlined-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPopCheckmarkOutlinedCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:g fill="#000" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M16.041 9.626a1 1 0 0 1 .389 1.36l-2.778 5a1 1 0 1 1-1.748-.972l2.777-5a1 1 0 0 1 1.36-.388"></svg:path><svg:path d="M9.22 12.653a1 1 0 0 1 1.405-.156l2.778 2.222a1 1 0 1 1-1.25 1.562l-2.778-2.222a1 1 0 0 1-.156-1.406"></svg:path><svg:path d="M14.885 5.278L13.47 6.692a.66.66 0 0 0-.93 0c-.907.906-2.359 1.464-3.636 1.4a.65.65 0 0 0-.5.191a.65.65 0 0 0-.192.478c.014.72-.167 1.439-.405 2.03c-.238.592-.606 1.235-1.115 1.745a.66.66 0 0 0 0 .93c.893.894 1.494 2.301 1.52 3.566a.65.65 0 0 0 .192.451a.65.65 0 0 0 .432.192c.705.035 1.406.243 1.993.503c.588.261 1.212.641 1.71 1.14a.66.66 0 0 0 .93 0c.499-.499 1.123-.879 1.71-1.14c.588-.26 1.29-.468 1.993-.503a.65.65 0 0 0 .432-.192a.65.65 0 0 0 .193-.451c.026-1.265.627-2.672 1.52-3.566a.66.66 0 0 0 0-.93c-.51-.51-.877-1.153-1.115-1.745c-.238-.591-.42-1.31-.405-2.03a.65.65 0 0 0-.193-.478a.65.65 0 0 0-.499-.192c-1.278.065-2.73-.493-3.635-1.399zM6.213 8.8c.015.759-.398 1.785-.935 2.321a2.66 2.66 0 0 0 0 3.76c.53.528.92 1.444.935 2.192c.014.662.273 1.32.778 1.824a2.65 2.65 0 0 0 1.748.775c.791.04 1.827.5 2.387 1.06a2.66 2.66 0 0 0 3.759 0c.56-.56 1.596-1.02 2.387-1.06a2.65 2.65 0 0 0 1.748-.775a2.65 2.65 0 0 0 .777-1.824c.016-.748.406-1.664.935-2.193a2.66 2.66 0 0 0 0-3.759c-.536-.536-.95-1.562-.934-2.32a2.65 2.65 0 0 0-.778-1.932a2.65 2.65 0 0 0-2.015-.775c-.713.036-1.615-.31-2.12-.816a2.66 2.66 0 0 0-3.76 0c-.504.505-1.406.852-2.12.816a2.65 2.65 0 0 0-2.014.775A2.65 2.65 0 0 0 6.213 8.8"></svg:path></svg:g></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPopCheckmarkOutlinedCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPopCheckmarkOutlinedCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopCheckmarkOutlinedCircleOffIcon],svg[pepicons-pop-checkmark-outlined-circle-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M16.041 9.626a1 1 0 0 1 .389 1.36l-2.778 5a1 1 0 1 1-1.748-.972l2.777-5a1 1 0 0 1 1.36-.388" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M9.22 12.653a1 1 0 0 1 1.405-.156l2.778 2.222a1 1 0 1 1-1.25 1.562l-2.778-2.222a1 1 0 0 1-.156-1.406" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M14.885 5.278L13.47 6.692a.66.66 0 0 0-.93 0c-.907.906-2.359 1.464-3.636 1.4a.65.65 0 0 0-.5.191a.65.65 0 0 0-.192.478c.014.72-.167 1.439-.405 2.03c-.238.592-.606 1.235-1.115 1.745a.66.66 0 0 0 0 .93c.893.894 1.494 2.301 1.52 3.566a.65.65 0 0 0 .192.451a.65.65 0 0 0 .432.192c.705.035 1.406.243 1.993.503c.588.261 1.212.641 1.71 1.14a.66.66 0 0 0 .93 0c.499-.499 1.123-.879 1.71-1.14c.588-.26 1.29-.468 1.993-.503a.65.65 0 0 0 .432-.192a.65.65 0 0 0 .193-.451c.026-1.265.627-2.672 1.52-3.566a.66.66 0 0 0 0-.93c-.51-.51-.877-1.153-1.115-1.745c-.238-.591-.42-1.31-.405-2.03a.65.65 0 0 0-.193-.478a.65.65 0 0 0-.499-.192c-1.278.065-2.73-.493-3.635-1.399zM6.213 8.8c.015.759-.398 1.785-.935 2.321a2.66 2.66 0 0 0 0 3.76c.53.528.92 1.444.935 2.192c.014.662.273 1.32.778 1.824a2.65 2.65 0 0 0 1.748.775c.791.04 1.827.5 2.387 1.06a2.66 2.66 0 0 0 3.759 0c.56-.56 1.596-1.02 2.387-1.06a2.65 2.65 0 0 0 1.748-.775a2.65 2.65 0 0 0 .777-1.824c.016-.748.406-1.664.935-2.193a2.66 2.66 0 0 0 0-3.759c-.536-.536-.95-1.562-.934-2.32a2.65 2.65 0 0 0-.778-1.932a2.65 2.65 0 0 0-2.015-.775c-.713.036-1.615-.31-2.12-.816a2.66 2.66 0 0 0-3.76 0c-.504.505-1.406.852-2.12.816a2.65 2.65 0 0 0-2.014.775A2.65 2.65 0 0 0 6.213 8.8" clip-rule="evenodd"></svg:path><svg:path d="M4.293 5.707a1 1 0 0 1 1.414-1.414l16 16a1 1 0 0 1-1.414 1.414z"></svg:path><svg:path fill-rule="evenodd" d="M13 24c6.075 0 11-4.925 11-11S19.075 2 13 2S2 6.925 2 13s4.925 11 11 11m0 2c7.18 0 13-5.82 13-13S20.18 0 13 0S0 5.82 0 13s5.82 13 13 13" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPopCheckmarkOutlinedCircleOffIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopCheckmarkOutlinedOffIcon],svg[pepicons-pop-checkmark-outlined-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M13.041 6.626a1 1 0 0 1 .389 1.36l-2.778 5a1 1 0 1 1-1.748-.972l2.777-5a1 1 0 0 1 1.36-.388" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M6.22 9.653a1 1 0 0 1 1.405-.156l2.778 2.222a1 1 0 1 1-1.25 1.562l-2.778-2.222a1 1 0 0 1-.156-1.406" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M11.885 2.278L10.47 3.692a.66.66 0 0 0-.93 0c-.907.906-2.359 1.464-3.636 1.4a.65.65 0 0 0-.5.191a.65.65 0 0 0-.192.478c.014.72-.167 1.439-.405 2.03c-.238.592-.606 1.235-1.115 1.745a.66.66 0 0 0 0 .93c.893.894 1.494 2.301 1.52 3.566a.65.65 0 0 0 .192.451a.65.65 0 0 0 .432.192c.705.035 1.406.243 1.993.503c.588.261 1.212.641 1.71 1.14a.66.66 0 0 0 .93 0c.499-.499 1.123-.879 1.71-1.14c.588-.26 1.29-.468 1.993-.503a.65.65 0 0 0 .432-.192a.65.65 0 0 0 .193-.451c.026-1.265.627-2.672 1.52-3.566a.66.66 0 0 0 0-.93c-.51-.51-.877-1.153-1.115-1.745c-.238-.591-.42-1.31-.405-2.03a.65.65 0 0 0-.193-.478a.65.65 0 0 0-.499-.192c-1.278.065-2.73-.493-3.635-1.399zM3.213 5.8c.015.759-.398 1.785-.935 2.321a2.66 2.66 0 0 0 0 3.76c.53.528.92 1.444.935 2.192c.014.662.273 1.32.778 1.824a2.65 2.65 0 0 0 1.748.775c.791.04 1.827.5 2.387 1.06a2.66 2.66 0 0 0 3.759 0c.56-.56 1.596-1.02 2.387-1.06a2.65 2.65 0 0 0 1.748-.775a2.65 2.65 0 0 0 .777-1.824c.016-.748.406-1.664.935-2.193a2.66 2.66 0 0 0 0-3.759c-.536-.536-.95-1.562-.934-2.32a2.65 2.65 0 0 0-.778-1.932a2.65 2.65 0 0 0-2.015-.775c-.714.036-1.615-.31-2.12-.816a2.66 2.66 0 0 0-3.76 0c-.504.505-1.406.852-2.12.816a2.65 2.65 0 0 0-2.014.775A2.65 2.65 0 0 0 3.213 5.8" clip-rule="evenodd"></svg:path><svg:path d="M1.293 2.707a1 1 0 0 1 1.414-1.414l16 16a1 1 0 0 1-1.414 1.414z"></svg:path></svg:g>`,
})
export class PepiconsPopCheckmarkOutlinedOffIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopCircleIcon],svg[pepicons-pop-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10 5.5a4.5 4.5 0 1 0 0 9a4.5 4.5 0 0 0 0-9M3.5 10a6.5 6.5 0 1 1 13 0a6.5 6.5 0 0 1-13 0" clip-rule="evenodd"></svg:path>`,
})
export class PepiconsPopCircleIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopCircleBigIcon],svg[pepicons-pop-circle-big-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10 2.5a7.5 7.5 0 1 0 0 15a7.5 7.5 0 0 0 0-15M.5 10a9.5 9.5 0 1 1 19 0a9.5 9.5 0 0 1-19 0" clip-rule="evenodd"></svg:path>`,
})
export class PepiconsPopCircleBigIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopCircleBigCircleIcon],svg[pepicons-pop-circle-big-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M13 5.5a7.5 7.5 0 1 0 0 15a7.5 7.5 0 0 0 0-15M3.5 13a9.5 9.5 0 1 1 19 0a9.5 9.5 0 0 1-19 0"></svg:path><svg:path d="M13 24c6.075 0 11-4.925 11-11S19.075 2 13 2S2 6.925 2 13s4.925 11 11 11m0 2c7.18 0 13-5.82 13-13S20.18 0 13 0S0 5.82 0 13s5.82 13 13 13"></svg:path></svg:g>`,
})
export class PepiconsPopCircleBigCircleIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopCircleBigCircleFilledIcon],svg[pepicons-pop-circle-big-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPopCircleBigCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:path fill="#000" fill-rule="evenodd" d="M13 5.5a7.5 7.5 0 1 0 0 15a7.5 7.5 0 0 0 0-15M3.5 13a9.5 9.5 0 1 1 19 0a9.5 9.5 0 0 1-19 0" clip-rule="evenodd"></svg:path></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPopCircleBigCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPopCircleBigCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopCircleBigCircleOffIcon],svg[pepicons-pop-circle-big-circle-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M13 5.5a7.5 7.5 0 1 0 0 15a7.5 7.5 0 0 0 0-15M3.5 13a9.5 9.5 0 1 1 19 0a9.5 9.5 0 0 1-19 0" clip-rule="evenodd"></svg:path><svg:path d="M4.293 5.707a1 1 0 0 1 1.414-1.414l16 16a1 1 0 0 1-1.414 1.414z"></svg:path><svg:path fill-rule="evenodd" d="M13 24c6.075 0 11-4.925 11-11S19.075 2 13 2S2 6.925 2 13s4.925 11 11 11m0 2c7.18 0 13-5.82 13-13S20.18 0 13 0S0 5.82 0 13s5.82 13 13 13" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPopCircleBigCircleOffIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopCircleBigFilledIcon],svg[pepicons-pop-circle-big-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.5 10a9.5 9.5 0 1 1-19 0a9.5 9.5 0 0 1 19 0"></svg:path>`,
})
export class PepiconsPopCircleBigFilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopCircleBigFilledCircleIcon],svg[pepicons-pop-circle-big-filled-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M22.5 13a9.5 9.5 0 1 1-19 0a9.5 9.5 0 0 1 19 0"></svg:path><svg:path fill-rule="evenodd" d="M13 24c6.075 0 11-4.925 11-11S19.075 2 13 2S2 6.925 2 13s4.925 11 11 11m0 2c7.18 0 13-5.82 13-13S20.18 0 13 0S0 5.82 0 13s5.82 13 13 13" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPopCircleBigFilledCircleIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopCircleBigFilledCircleFilledIcon],svg[pepicons-pop-circle-big-filled-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPopCircleBigFilledCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:path fill="#000" d="M22.5 13a9.5 9.5 0 1 1-19 0a9.5 9.5 0 0 1 19 0"></svg:path></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPopCircleBigFilledCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPopCircleBigFilledCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopCircleBigFilledCircleOffIcon],svg[pepicons-pop-circle-big-filled-circle-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M22.5 13a9.5 9.5 0 1 1-19 0a9.5 9.5 0 0 1 19 0"></svg:path><svg:path d="M4.293 5.707a1 1 0 0 1 1.414-1.414l16 16a1 1 0 0 1-1.414 1.414z"></svg:path><svg:path fill-rule="evenodd" d="M13 24c6.075 0 11-4.925 11-11S19.075 2 13 2S2 6.925 2 13s4.925 11 11 11m0 2c7.18 0 13-5.82 13-13S20.18 0 13 0S0 5.82 0 13s5.82 13 13 13" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPopCircleBigFilledCircleOffIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopCircleBigFilledOffIcon],svg[pepicons-pop-circle-big-filled-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M19.5 10a9.5 9.5 0 1 1-19 0a9.5 9.5 0 0 1 19 0"></svg:path><svg:path d="M1.293 2.707a1 1 0 0 1 1.414-1.414l16 16a1 1 0 0 1-1.414 1.414z"></svg:path></svg:g>`,
})
export class PepiconsPopCircleBigFilledOffIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopCircleBigOffIcon],svg[pepicons-pop-circle-big-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M10 2.5a7.5 7.5 0 1 0 0 15a7.5 7.5 0 0 0 0-15M.5 10a9.5 9.5 0 1 1 19 0a9.5 9.5 0 0 1-19 0" clip-rule="evenodd"></svg:path><svg:path d="M1.293 2.707a1 1 0 0 1 1.414-1.414l16 16a1 1 0 0 1-1.414 1.414z"></svg:path></svg:g>`,
})
export class PepiconsPopCircleBigOffIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopCircleCircleIcon],svg[pepicons-pop-circle-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M13 8.5a4.5 4.5 0 1 0 0 9a4.5 4.5 0 0 0 0-9M6.5 13a6.5 6.5 0 1 1 13 0a6.5 6.5 0 0 1-13 0"></svg:path><svg:path d="M13 24c6.075 0 11-4.925 11-11S19.075 2 13 2S2 6.925 2 13s4.925 11 11 11m0 2c7.18 0 13-5.82 13-13S20.18 0 13 0S0 5.82 0 13s5.82 13 13 13"></svg:path></svg:g>`,
})
export class PepiconsPopCircleCircleIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopCircleCircleFilledIcon],svg[pepicons-pop-circle-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPopCircleCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:path fill="#000" fill-rule="evenodd" d="M13 8.5a4.5 4.5 0 1 0 0 9a4.5 4.5 0 0 0 0-9M6.5 13a6.5 6.5 0 1 1 13 0a6.5 6.5 0 0 1-13 0" clip-rule="evenodd"></svg:path></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPopCircleCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPopCircleCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopCircleCircleOffIcon],svg[pepicons-pop-circle-circle-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M13 8.5a4.5 4.5 0 1 0 0 9a4.5 4.5 0 0 0 0-9M6.5 13a6.5 6.5 0 1 1 13 0a6.5 6.5 0 0 1-13 0" clip-rule="evenodd"></svg:path><svg:path d="M4.293 5.707a1 1 0 0 1 1.414-1.414l16 16a1 1 0 0 1-1.414 1.414z"></svg:path><svg:path fill-rule="evenodd" d="M13 24c6.075 0 11-4.925 11-11S19.075 2 13 2S2 6.925 2 13s4.925 11 11 11m0 2c7.18 0 13-5.82 13-13S20.18 0 13 0S0 5.82 0 13s5.82 13 13 13" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPopCircleCircleOffIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopCircleFilledIcon],svg[pepicons-pop-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.5 10a6.5 6.5 0 1 1-13 0a6.5 6.5 0 0 1 13 0"></svg:path>`,
})
export class PepiconsPopCircleFilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopCircleFilledCircleIcon],svg[pepicons-pop-circle-filled-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M19.5 13a6.5 6.5 0 1 1-13 0a6.5 6.5 0 0 1 13 0"></svg:path><svg:path fill-rule="evenodd" d="M13 24c6.075 0 11-4.925 11-11S19.075 2 13 2S2 6.925 2 13s4.925 11 11 11m0 2c7.18 0 13-5.82 13-13S20.18 0 13 0S0 5.82 0 13s5.82 13 13 13" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPopCircleFilledCircleIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopCircleFilledCircleFilledIcon],svg[pepicons-pop-circle-filled-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPopCircleFilledCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:path fill="#000" d="M19.5 13a6.5 6.5 0 1 1-13 0a6.5 6.5 0 0 1 13 0"></svg:path></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPopCircleFilledCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPopCircleFilledCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopCircleFilledCircleOffIcon],svg[pepicons-pop-circle-filled-circle-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M19.5 13a6.5 6.5 0 1 1-13 0a6.5 6.5 0 0 1 13 0"></svg:path><svg:path d="M4.293 5.707a1 1 0 0 1 1.414-1.414l16 16a1 1 0 0 1-1.414 1.414z"></svg:path><svg:path fill-rule="evenodd" d="M13 24c6.075 0 11-4.925 11-11S19.075 2 13 2S2 6.925 2 13s4.925 11 11 11m0 2c7.18 0 13-5.82 13-13S20.18 0 13 0S0 5.82 0 13s5.82 13 13 13" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPopCircleFilledCircleOffIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopCircleFilledOffIcon],svg[pepicons-pop-circle-filled-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M16.5 10a6.5 6.5 0 1 1-13 0a6.5 6.5 0 0 1 13 0"></svg:path><svg:path d="M1.293 2.707a1 1 0 0 1 1.414-1.414l16 16a1 1 0 0 1-1.414 1.414z"></svg:path></svg:g>`,
})
export class PepiconsPopCircleFilledOffIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopCircleOffIcon],svg[pepicons-pop-circle-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M10 5.5a4.5 4.5 0 1 0 0 9a4.5 4.5 0 0 0 0-9M3.5 10a6.5 6.5 0 1 1 13 0a6.5 6.5 0 0 1-13 0" clip-rule="evenodd"></svg:path><svg:path d="M1.293 2.707a1 1 0 0 1 1.414-1.414l16 16a1 1 0 0 1-1.414 1.414z"></svg:path></svg:g>`,
})
export class PepiconsPopCircleOffIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopClapperboardIcon],svg[pepicons-pop-clapperboard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M.707 6.08a1 1 0 0 1 .763-1.192L16.123 1.68a1 1 0 0 1 1.19.763l.642 2.93a1 1 0 0 1-.763 1.192L2.54 9.773a1 1 0 0 1-1.19-.763zm2.168.548l.213.977l12.7-2.78l-.214-.977z"></svg:path><svg:path d="M9.935 7.698L7.339 5.195l1.389-1.44l2.595 2.503zm-3.908.855L3.432 6.05L4.82 4.61l2.595 2.504zm7.815-1.711L11.247 4.34l1.388-1.44l2.595 2.504zm-4.01 5.713l2-3l-1.664-1.11l-2 3zm4 0l2-3l-1.664-1.11l-2 3zm-8 0l2-3l-1.664-1.11l-2 3z"></svg:path><svg:path d="M1.5 9a1 1 0 0 1 1-1h15a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1h-15a1 1 0 0 1-1-1zm2 1v7h13v-7z"></svg:path><svg:path d="M18 13H2v-2h16z"></svg:path></svg:g>`,
})
export class PepiconsPopClapperboardIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopClapperboardCircleIcon],svg[pepicons-pop-clapperboard-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M3.707 9.08a1 1 0 0 1 .763-1.192L19.123 4.68a1 1 0 0 1 1.19.763l.642 2.93a1 1 0 0 1-.763 1.192L5.54 12.773a1 1 0 0 1-1.19-.763zm2.168.548l.213.977l12.7-2.78l-.214-.977z"></svg:path><svg:path d="m12.935 10.698l-2.596-2.503l1.389-1.44l2.595 2.503zm-3.908.855L6.432 9.05L7.82 7.61l2.595 2.504zm7.815-1.711L14.247 7.34l1.388-1.44l2.595 2.504zm-4.01 5.713l2-3l-1.664-1.11l-2 3zm4 0l2-3l-1.664-1.11l-2 3zm-8 0l2-3l-1.664-1.11l-2 3z"></svg:path><svg:path d="M4.5 12a1 1 0 0 1 1-1h15a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1h-15a1 1 0 0 1-1-1zm2 1v7h13v-7z"></svg:path><svg:path d="M21 16H5v-2h16z"></svg:path><svg:path d="M13 24c6.075 0 11-4.925 11-11S19.075 2 13 2S2 6.925 2 13s4.925 11 11 11m0 2c7.18 0 13-5.82 13-13S20.18 0 13 0S0 5.82 0 13s5.82 13 13 13"></svg:path></svg:g>`,
})
export class PepiconsPopClapperboardCircleIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopClapperboardCircleFilledIcon],svg[pepicons-pop-clapperboard-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPopClapperboardCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:g fill="#000" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M3.707 9.08a1 1 0 0 1 .763-1.192L19.123 4.68a1 1 0 0 1 1.19.763l.642 2.93a1 1 0 0 1-.763 1.192L5.54 12.773a1 1 0 0 1-1.19-.763zm2.168.548l.213.977l12.7-2.78l-.214-.977z"></svg:path><svg:path d="m12.935 10.698l-2.596-2.503l1.389-1.44l2.595 2.503zm-3.908.855L6.432 9.05L7.82 7.61l2.595 2.504zm7.815-1.711L14.247 7.34l1.388-1.44l2.595 2.504zm-4.01 5.713l2-3l-1.664-1.11l-2 3zm4 0l2-3l-1.664-1.11l-2 3zm-8 0l2-3l-1.664-1.11l-2 3z"></svg:path><svg:path d="M4.5 12a1 1 0 0 1 1-1h15a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1h-15a1 1 0 0 1-1-1zm2 1v7h13v-7z"></svg:path><svg:path d="M21 16H5v-2h16z"></svg:path></svg:g></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPopClapperboardCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPopClapperboardCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopClapperboardCircleOffIcon],svg[pepicons-pop-clapperboard-circle-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:g fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M3.707 9.08a1 1 0 0 1 .763-1.192L19.123 4.68a1 1 0 0 1 1.19.763l.642 2.93a1 1 0 0 1-.763 1.192L5.54 12.773a1 1 0 0 1-1.19-.763zm2.168.548l.213.977l12.7-2.78l-.214-.977z"></svg:path><svg:path d="m12.935 10.698l-2.596-2.503l1.389-1.44l2.595 2.503zm-3.908.855L6.432 9.05L7.82 7.61l2.595 2.504zm7.815-1.711L14.247 7.34l1.388-1.44l2.595 2.504zm-4.01 5.713l2-3l-1.664-1.11l-2 3zm4 0l2-3l-1.664-1.11l-2 3zm-8 0l2-3l-1.664-1.11l-2 3z"></svg:path><svg:path d="M4.5 12a1 1 0 0 1 1-1h15a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1h-15a1 1 0 0 1-1-1zm2 1v7h13v-7z"></svg:path><svg:path d="M21 16H5v-2h16z"></svg:path></svg:g><svg:path d="M4.293 5.707a1 1 0 0 1 1.414-1.414l16 16a1 1 0 0 1-1.414 1.414z"></svg:path><svg:path fill-rule="evenodd" d="M13 24c6.075 0 11-4.925 11-11S19.075 2 13 2S2 6.925 2 13s4.925 11 11 11m0 2c7.18 0 13-5.82 13-13S20.18 0 13 0S0 5.82 0 13s5.82 13 13 13" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPopClapperboardCircleOffIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopClapperboardOffIcon],svg[pepicons-pop-clapperboard-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:g fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M.707 6.08a1 1 0 0 1 .763-1.192L16.123 1.68a1 1 0 0 1 1.19.763l.642 2.93a1 1 0 0 1-.763 1.192L2.54 9.773a1 1 0 0 1-1.19-.763zm2.168.548l.213.977l12.7-2.78l-.214-.977z"></svg:path><svg:path d="M9.935 7.698L7.339 5.195l1.389-1.44l2.595 2.503zm-3.908.855L3.432 6.05L4.82 4.61l2.595 2.504zm7.815-1.711L11.247 4.34l1.388-1.44l2.595 2.504zm-4.01 5.713l2-3l-1.664-1.11l-2 3zm4 0l2-3l-1.664-1.11l-2 3zm-8 0l2-3l-1.664-1.11l-2 3z"></svg:path><svg:path d="M1.5 9a1 1 0 0 1 1-1h15a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1h-15a1 1 0 0 1-1-1zm2 1v7h13v-7z"></svg:path><svg:path d="M18 13H2v-2h16z"></svg:path></svg:g><svg:path d="M1.293 2.707a1 1 0 0 1 1.414-1.414l16 16a1 1 0 0 1-1.414 1.414z"></svg:path></svg:g>`,
})
export class PepiconsPopClapperboardOffIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopClipboardIcon],svg[pepicons-pop-clipboard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M5.675 2.5a1 1 0 0 1 1-1h6.643a1 1 0 0 1 1 1v3.875a1 1 0 0 1-1 1H6.675a1 1 0 0 1-1-1zm2 1v1.875h4.643V3.5z" clip-rule="evenodd"></svg:path><svg:path d="M5 5v11h10V5h-1V3h2a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h2v2z"></svg:path></svg:g>`,
})
export class PepiconsPopClipboardIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopClipboardCheckIcon],svg[pepicons-pop-clipboard-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M5.675 2.5a1 1 0 0 1 1-1h6.643a1 1 0 0 1 1 1v3.875a1 1 0 0 1-1 1H6.675a1 1 0 0 1-1-1zm2 1v1.875h4.643V3.5z" clip-rule="evenodd"></svg:path><svg:path d="M5 5v11h10V5h-1V3h2a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h2v2z"></svg:path><svg:path fill-rule="evenodd" d="M12.567 8.677a1 1 0 0 1 .256 1.39l-1.767 2.565a1.5 1.5 0 0 1-2.154.334L7.387 11.79a1 1 0 0 1 1.226-1.58l1.097.851l1.467-2.128a1 1 0 0 1 1.39-.256" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPopClipboardCheckIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopClipboardCheckCircleIcon],svg[pepicons-pop-clipboard-check-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M8.675 5.5a1 1 0 0 1 1-1h6.643a1 1 0 0 1 1 1v3.875a1 1 0 0 1-1 1H9.675a1 1 0 0 1-1-1zm2 1v1.875h4.643V6.5z" clip-rule="evenodd"></svg:path><svg:path d="M8 8v11h10V8h-1V6h2a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h2v2z"></svg:path><svg:path fill-rule="evenodd" d="M15.567 11.677a1 1 0 0 1 .256 1.39l-1.767 2.565a1.5 1.5 0 0 1-2.154.334l-1.515-1.176a1 1 0 0 1 1.226-1.58l1.097.851l1.467-2.128a1 1 0 0 1 1.39-.256" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M13 24c6.075 0 11-4.925 11-11S19.075 2 13 2S2 6.925 2 13s4.925 11 11 11m0 2c7.18 0 13-5.82 13-13S20.18 0 13 0S0 5.82 0 13s5.82 13 13 13" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPopClipboardCheckCircleIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopClipboardCheckCircleFilledIcon],svg[pepicons-pop-clipboard-check-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPopClipboardCheckCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:g fill="#000"><svg:path fill-rule="evenodd" d="M8.675 5.5a1 1 0 0 1 1-1h6.643a1 1 0 0 1 1 1v3.875a1 1 0 0 1-1 1H9.675a1 1 0 0 1-1-1zm2 1v1.875h4.643V6.5z" clip-rule="evenodd"></svg:path><svg:path d="M8 8v11h10V8h-1V6h2a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h2v2z"></svg:path><svg:path fill-rule="evenodd" d="M15.567 11.677a1 1 0 0 1 .256 1.39l-1.767 2.565a1.5 1.5 0 0 1-2.154.334l-1.515-1.176a1 1 0 0 1 1.226-1.58l1.097.851l1.467-2.128a1 1 0 0 1 1.39-.256" clip-rule="evenodd"></svg:path></svg:g></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPopClipboardCheckCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPopClipboardCheckCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopClipboardCheckCircleOffIcon],svg[pepicons-pop-clipboard-check-circle-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M8.675 5.5a1 1 0 0 1 1-1h6.643a1 1 0 0 1 1 1v3.875a1 1 0 0 1-1 1H9.675a1 1 0 0 1-1-1zm2 1v1.875h4.643V6.5z" clip-rule="evenodd"></svg:path><svg:path d="M8 8v11h10V8h-1V6h2a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h2v2z"></svg:path><svg:path fill-rule="evenodd" d="M15.567 11.677a1 1 0 0 1 .256 1.39l-1.767 2.565a1.5 1.5 0 0 1-2.154.334l-1.515-1.176a1 1 0 0 1 1.226-1.58l1.097.851l1.467-2.128a1 1 0 0 1 1.39-.256" clip-rule="evenodd"></svg:path><svg:path d="M4.293 5.707a1 1 0 0 1 1.414-1.414l16 16a1 1 0 0 1-1.414 1.414z"></svg:path><svg:path fill-rule="evenodd" d="M13 24c6.075 0 11-4.925 11-11S19.075 2 13 2S2 6.925 2 13s4.925 11 11 11m0 2c7.18 0 13-5.82 13-13S20.18 0 13 0S0 5.82 0 13s5.82 13 13 13" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPopClipboardCheckCircleOffIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopClipboardCheckCircledIcon],svg[pepicons-pop-clipboard-check-circled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M5.68 2.5a1 1 0 0 1 1-1h6.643a1 1 0 0 1 1 1v3.875a1 1 0 0 1-1 1H6.68a1 1 0 0 1-1-1zm2 1v1.875h4.643V3.5z"></svg:path><svg:path d="M5 16V5h1V3H4a1 1 0 0 0-1 1v13a1 1 0 0 0 1 1h6.337A5.5 5.5 0 0 1 8.6 16zm10-7.793c.742.21 1.421.572 2 1.05V4a1 1 0 0 0-1-1h-2v2h1z"></svg:path><svg:path d="M13.5 17a3.5 3.5 0 1 0 0-7a3.5 3.5 0 0 0 0 7m0 2a5.5 5.5 0 1 0 0-11a5.5 5.5 0 0 0 0 11"></svg:path><svg:path d="M15.87 11.72a1 1 0 0 1 .156 1.405l-1.65 2.063a1.5 1.5 0 0 1-2.232.124l-1.105-1.105a1 1 0 0 1 1.414-1.414l.71.71l1.302-1.628a1 1 0 0 1 1.405-.156"></svg:path></svg:g>`,
})
export class PepiconsPopClipboardCheckCircledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopClipboardCheckCircledCircleIcon],svg[pepicons-pop-clipboard-check-circled-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M8.68 5.5a1 1 0 0 1 1-1h6.643a1 1 0 0 1 1 1v3.875a1 1 0 0 1-1 1H9.68a1 1 0 0 1-1-1zm2 1v1.875h4.643V6.5z"></svg:path><svg:path d="M8 19V8h1V6H7a1 1 0 0 0-1 1v13a1 1 0 0 0 1 1h6.337a5.5 5.5 0 0 1-1.737-2zm10-7.793c.742.21 1.421.572 2 1.05V7a1 1 0 0 0-1-1h-2v2h1z"></svg:path><svg:path d="M16.5 20a3.5 3.5 0 1 0 0-7a3.5 3.5 0 0 0 0 7m0 2a5.5 5.5 0 1 0 0-11a5.5 5.5 0 0 0 0 11"></svg:path><svg:path d="M18.87 14.72a1 1 0 0 1 .156 1.405l-1.65 2.063a1.5 1.5 0 0 1-2.233.124l-1.104-1.105a1 1 0 0 1 1.414-1.414l.71.71l1.302-1.628a1 1 0 0 1 1.405-.156"></svg:path><svg:path d="M13 24c6.075 0 11-4.925 11-11S19.075 2 13 2S2 6.925 2 13s4.925 11 11 11m0 2c7.18 0 13-5.82 13-13S20.18 0 13 0S0 5.82 0 13s5.82 13 13 13"></svg:path></svg:g>`,
})
export class PepiconsPopClipboardCheckCircledCircleIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopClipboardCheckCircledCircleFilledIcon],svg[pepicons-pop-clipboard-check-circled-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPopClipboardCheckCircledCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:g fill="#000" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M8.68 5.5a1 1 0 0 1 1-1h6.643a1 1 0 0 1 1 1v3.875a1 1 0 0 1-1 1H9.68a1 1 0 0 1-1-1zm2 1v1.875h4.643V6.5z"></svg:path><svg:path d="M8 19V8h1V6H7a1 1 0 0 0-1 1v13a1 1 0 0 0 1 1h6.337a5.5 5.5 0 0 1-1.737-2zm10-7.793c.742.21 1.421.572 2 1.05V7a1 1 0 0 0-1-1h-2v2h1z"></svg:path><svg:path d="M16.5 20a3.5 3.5 0 1 0 0-7a3.5 3.5 0 0 0 0 7m0 2a5.5 5.5 0 1 0 0-11a5.5 5.5 0 0 0 0 11"></svg:path><svg:path d="M18.87 14.72a1 1 0 0 1 .156 1.405l-1.65 2.063a1.5 1.5 0 0 1-2.233.124l-1.104-1.105a1 1 0 0 1 1.414-1.414l.71.71l1.302-1.628a1 1 0 0 1 1.405-.156"></svg:path></svg:g></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPopClipboardCheckCircledCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPopClipboardCheckCircledCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopClipboardCheckCircledCircleOffIcon],svg[pepicons-pop-clipboard-check-circled-circle-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M8.68 5.5a1 1 0 0 1 1-1h6.643a1 1 0 0 1 1 1v3.875a1 1 0 0 1-1 1H9.68a1 1 0 0 1-1-1zm2 1v1.875h4.643V6.5z" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M8 19V8h1V6H7a1 1 0 0 0-1 1v13a1 1 0 0 0 1 1h6.337a5.5 5.5 0 0 1-1.737-2zm10-7.793c.742.21 1.421.572 2 1.05V7a1 1 0 0 0-1-1h-2v2h1z" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M16.5 20a3.5 3.5 0 1 0 0-7a3.5 3.5 0 0 0 0 7m0 2a5.5 5.5 0 1 0 0-11a5.5 5.5 0 0 0 0 11" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M18.87 14.72a1 1 0 0 1 .156 1.405l-1.65 2.063a1.5 1.5 0 0 1-2.233.124l-1.104-1.105a1 1 0 0 1 1.414-1.414l.71.71l1.302-1.628a1 1 0 0 1 1.405-.156" clip-rule="evenodd"></svg:path><svg:path d="M4.293 5.707a1 1 0 0 1 1.414-1.414l16 16a1 1 0 0 1-1.414 1.414z"></svg:path><svg:path fill-rule="evenodd" d="M13 24c6.075 0 11-4.925 11-11S19.075 2 13 2S2 6.925 2 13s4.925 11 11 11m0 2c7.18 0 13-5.82 13-13S20.18 0 13 0S0 5.82 0 13s5.82 13 13 13" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPopClipboardCheckCircledCircleOffIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopClipboardCheckCircledOffIcon],svg[pepicons-pop-clipboard-check-circled-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M5.68 2.5a1 1 0 0 1 1-1h6.643a1 1 0 0 1 1 1v3.875a1 1 0 0 1-1 1H6.68a1 1 0 0 1-1-1zm2 1v1.875h4.643V3.5z" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M5 16V5h1V3H4a1 1 0 0 0-1 1v13a1 1 0 0 0 1 1h6.337A5.5 5.5 0 0 1 8.6 16zm10-7.793c.742.21 1.421.572 2 1.05V4a1 1 0 0 0-1-1h-2v2h1z" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M13.5 17a3.5 3.5 0 1 0 0-7a3.5 3.5 0 0 0 0 7m0 2a5.5 5.5 0 1 0 0-11a5.5 5.5 0 0 0 0 11" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M15.87 11.72a1 1 0 0 1 .156 1.405l-1.65 2.063a1.5 1.5 0 0 1-2.232.124l-1.105-1.105a1 1 0 0 1 1.414-1.414l.71.71l1.302-1.628a1 1 0 0 1 1.405-.156" clip-rule="evenodd"></svg:path><svg:path d="M1.293 2.707a1 1 0 0 1 1.414-1.414l16 16a1 1 0 0 1-1.414 1.414z"></svg:path></svg:g>`,
})
export class PepiconsPopClipboardCheckCircledOffIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopClipboardCheckOffIcon],svg[pepicons-pop-clipboard-check-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M5.675 2.5a1 1 0 0 1 1-1h6.643a1 1 0 0 1 1 1v3.875a1 1 0 0 1-1 1H6.675a1 1 0 0 1-1-1zm2 1v1.875h4.643V3.5z" clip-rule="evenodd"></svg:path><svg:path d="M5 5v11h10V5h-1V3h2a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h2v2z"></svg:path><svg:path fill-rule="evenodd" d="M12.567 8.677a1 1 0 0 1 .256 1.39l-1.767 2.565a1.5 1.5 0 0 1-2.154.334L7.387 11.79a1 1 0 0 1 1.226-1.58l1.097.851l1.467-2.128a1 1 0 0 1 1.39-.256" clip-rule="evenodd"></svg:path><svg:path d="M1.293 2.707a1 1 0 0 1 1.414-1.414l16 16a1 1 0 0 1-1.414 1.414z"></svg:path></svg:g>`,
})
export class PepiconsPopClipboardCheckOffIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopClipboardCircleIcon],svg[pepicons-pop-clipboard-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M8.675 5.5a1 1 0 0 1 1-1h6.643a1 1 0 0 1 1 1v3.875a1 1 0 0 1-1 1H9.675a1 1 0 0 1-1-1zm2 1v1.875h4.643V6.5z" clip-rule="evenodd"></svg:path><svg:path d="M8 8v11h10V8h-1V6h2a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h2v2z"></svg:path><svg:path fill-rule="evenodd" d="M13 24c6.075 0 11-4.925 11-11S19.075 2 13 2S2 6.925 2 13s4.925 11 11 11m0 2c7.18 0 13-5.82 13-13S20.18 0 13 0S0 5.82 0 13s5.82 13 13 13" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPopClipboardCircleIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopClipboardCircleFilledIcon],svg[pepicons-pop-clipboard-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPopClipboardCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:g fill="#000"><svg:path fill-rule="evenodd" d="M8.675 5.5a1 1 0 0 1 1-1h6.643a1 1 0 0 1 1 1v3.875a1 1 0 0 1-1 1H9.675a1 1 0 0 1-1-1zm2 1v1.875h4.643V6.5z" clip-rule="evenodd"></svg:path><svg:path d="M8 8v11h10V8h-1V6h2a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h2v2z"></svg:path></svg:g></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPopClipboardCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPopClipboardCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopClipboardCircleOffIcon],svg[pepicons-pop-clipboard-circle-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M8.675 5.5a1 1 0 0 1 1-1h6.643a1 1 0 0 1 1 1v3.875a1 1 0 0 1-1 1H9.675a1 1 0 0 1-1-1zm2 1v1.875h4.643V6.5z" clip-rule="evenodd"></svg:path><svg:path d="M8 8v11h10V8h-1V6h2a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h2v2z"></svg:path><svg:path d="M4.293 5.707a1 1 0 0 1 1.414-1.414l16 16a1 1 0 0 1-1.414 1.414z"></svg:path><svg:path fill-rule="evenodd" d="M13 24c6.075 0 11-4.925 11-11S19.075 2 13 2S2 6.925 2 13s4.925 11 11 11m0 2c7.18 0 13-5.82 13-13S20.18 0 13 0S0 5.82 0 13s5.82 13 13 13" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPopClipboardCircleOffIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopClipboardOffIcon],svg[pepicons-pop-clipboard-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M5.675 2.5a1 1 0 0 1 1-1h6.643a1 1 0 0 1 1 1v3.875a1 1 0 0 1-1 1H6.675a1 1 0 0 1-1-1zm2 1v1.875h4.643V3.5z" clip-rule="evenodd"></svg:path><svg:path d="M5 5v11h10V5h-1V3h2a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h2v2z"></svg:path><svg:path d="M1.293 2.707a1 1 0 0 1 1.414-1.414l16 16a1 1 0 0 1-1.414 1.414z"></svg:path></svg:g>`,
})
export class PepiconsPopClipboardOffIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopClockIcon],svg[pepicons-pop-clock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M10 4a6 6 0 1 0 0 12a6 6 0 0 0 0-12m-8 6a8 8 0 1 1 16 0a8 8 0 0 1-16 0"></svg:path><svg:path d="M10 6a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0V7a1 1 0 0 1 1-1"></svg:path><svg:path d="M14 10a1 1 0 0 1-1 1h-3a1 1 0 1 1 0-2h3a1 1 0 0 1 1 1"></svg:path></svg:g>`,
})
export class PepiconsPopClockIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopClockCircleIcon],svg[pepicons-pop-clock-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M13 7a6 6 0 1 0 0 12a6 6 0 0 0 0-12m-8 6a8 8 0 1 1 16 0a8 8 0 0 1-16 0"></svg:path><svg:path d="M13 9a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0v-3a1 1 0 0 1 1-1"></svg:path><svg:path d="M17 13a1 1 0 0 1-1 1h-3a1 1 0 1 1 0-2h3a1 1 0 0 1 1 1"></svg:path><svg:path d="M13 24c6.075 0 11-4.925 11-11S19.075 2 13 2S2 6.925 2 13s4.925 11 11 11m0 2c7.18 0 13-5.82 13-13S20.18 0 13 0S0 5.82 0 13s5.82 13 13 13"></svg:path></svg:g>`,
})
export class PepiconsPopClockCircleIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopClockCircleFilledIcon],svg[pepicons-pop-clock-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPopClockCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:g fill="#000" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M13 7a6 6 0 1 0 0 12a6 6 0 0 0 0-12m-8 6a8 8 0 1 1 16 0a8 8 0 0 1-16 0"></svg:path><svg:path d="M13 9a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0v-3a1 1 0 0 1 1-1"></svg:path><svg:path d="M17 13a1 1 0 0 1-1 1h-3a1 1 0 1 1 0-2h3a1 1 0 0 1 1 1"></svg:path></svg:g></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPopClockCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPopClockCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopClockCircleOffIcon],svg[pepicons-pop-clock-circle-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M13 7a6 6 0 1 0 0 12a6 6 0 0 0 0-12m-8 6a8 8 0 1 1 16 0a8 8 0 0 1-16 0" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M13 9a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0v-3a1 1 0 0 1 1-1" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M17 13a1 1 0 0 1-1 1h-3a1 1 0 1 1 0-2h3a1 1 0 0 1 1 1" clip-rule="evenodd"></svg:path><svg:path d="M4.293 5.707a1 1 0 0 1 1.414-1.414l16 16a1 1 0 0 1-1.414 1.414z"></svg:path><svg:path fill-rule="evenodd" d="M13 24c6.075 0 11-4.925 11-11S19.075 2 13 2S2 6.925 2 13s4.925 11 11 11m0 2c7.18 0 13-5.82 13-13S20.18 0 13 0S0 5.82 0 13s5.82 13 13 13" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPopClockCircleOffIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopClockOffIcon],svg[pepicons-pop-clock-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M10 4a6 6 0 1 0 0 12a6 6 0 0 0 0-12m-8 6a8 8 0 1 1 16 0a8 8 0 0 1-16 0" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M10 6a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0V7a1 1 0 0 1 1-1" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M14 10a1 1 0 0 1-1 1h-3a1 1 0 1 1 0-2h3a1 1 0 0 1 1 1" clip-rule="evenodd"></svg:path><svg:path d="M1.293 2.707a1 1 0 0 1 1.414-1.414l16 16a1 1 0 0 1-1.414 1.414z"></svg:path></svg:g>`,
})
export class PepiconsPopClockOffIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopCloudIcon],svg[pepicons-pop-cloud-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11 3h-1a4 4 0 0 0-3.874 3H6a4 4 0 1 0 0 8h8a4 4 0 0 0 .899-7.899A4 4 0 0 0 11 3M7.676 8l.387-1.501A2 2 0 0 1 10 5h1c.937 0 1.743.65 1.95 1.549l.28 1.221l1.221.28A2.002 2.002 0 0 1 14 12H6a2 2 0 1 1 0-4z" clip-rule="evenodd"></svg:path>`,
})
export class PepiconsPopCloudIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopCloudCircleIcon],svg[pepicons-pop-cloud-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M14 6h-1a4 4 0 0 0-3.874 3H9a4 4 0 1 0 0 8h8a4 4 0 0 0 .899-7.899A4 4 0 0 0 14 6m-3.324 5l.387-1.501A2 2 0 0 1 13 8h1c.937 0 1.743.65 1.95 1.549l.28 1.221l1.221.28A2.002 2.002 0 0 1 17 15H9a2 2 0 1 1 0-4z"></svg:path><svg:path d="M13 24c6.075 0 11-4.925 11-11S19.075 2 13 2S2 6.925 2 13s4.925 11 11 11m0 2c7.18 0 13-5.82 13-13S20.18 0 13 0S0 5.82 0 13s5.82 13 13 13"></svg:path></svg:g>`,
})
export class PepiconsPopCloudCircleIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopCloudCircleFilledIcon],svg[pepicons-pop-cloud-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPopCloudCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:path fill="#000" fill-rule="evenodd" d="M14 6h-1a4 4 0 0 0-3.874 3H9a4 4 0 1 0 0 8h8a4 4 0 0 0 .899-7.899A4 4 0 0 0 14 6m-3.324 5l.387-1.501A2 2 0 0 1 13 8h1c.937 0 1.743.65 1.95 1.549l.28 1.221l1.221.28A2.002 2.002 0 0 1 17 15H9a2 2 0 1 1 0-4z" clip-rule="evenodd"></svg:path></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPopCloudCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPopCloudCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopCloudCircleOffIcon],svg[pepicons-pop-cloud-circle-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M14 6h-1a4 4 0 0 0-3.874 3H9a4 4 0 1 0 0 8h8a4 4 0 0 0 .899-7.899A4 4 0 0 0 14 6m-3.324 5l.387-1.501A2 2 0 0 1 13 8h1c.937 0 1.743.65 1.95 1.549l.28 1.221l1.221.28A2.002 2.002 0 0 1 17 15H9a2 2 0 1 1 0-4z" clip-rule="evenodd"></svg:path><svg:path d="M4.293 5.707a1 1 0 0 1 1.414-1.414l16 16a1 1 0 0 1-1.414 1.414z"></svg:path><svg:path fill-rule="evenodd" d="M13 24c6.075 0 11-4.925 11-11S19.075 2 13 2S2 6.925 2 13s4.925 11 11 11m0 2c7.18 0 13-5.82 13-13S20.18 0 13 0S0 5.82 0 13s5.82 13 13 13" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPopCloudCircleOffIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopCloudDownIcon],svg[pepicons-pop-cloud-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M11 3h-1a4 4 0 0 0-3.874 3H6a4 4 0 1 0 0 8h8a4 4 0 0 0 .899-7.899A4 4 0 0 0 11 3M7.676 8l.387-1.501A2 2 0 0 1 10 5h1c.937 0 1.743.65 1.95 1.549l.28 1.221l1.221.28A2.002 2.002 0 0 1 14 12H6a2 2 0 1 1 0-4z" clip-rule="evenodd"></svg:path><svg:path d="M9.5 10a1 1 0 1 1 2 0v7.5a1 1 0 1 1-2 0z"></svg:path><svg:path d="M12.375 14.72a1 1 0 1 1 1.25 1.56l-2.5 2a1 1 0 0 1-1.25-1.56z"></svg:path><svg:path d="M7.375 16.28a1 1 0 1 1 1.25-1.56l2.5 2a1 1 0 0 1-1.25 1.56z"></svg:path></svg:g>`,
})
export class PepiconsPopCloudDownIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopCloudDownCircleIcon],svg[pepicons-pop-cloud-down-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M14 6h-1a4 4 0 0 0-3.874 3H9a4 4 0 1 0 0 8h8a4 4 0 0 0 .899-7.899A4 4 0 0 0 14 6m-3.324 5l.387-1.501A2 2 0 0 1 13 8h1c.937 0 1.743.65 1.95 1.549l.28 1.221l1.221.28A2.002 2.002 0 0 1 17 15H9a2 2 0 1 1 0-4z" clip-rule="evenodd"></svg:path><svg:path d="M12.5 13a1 1 0 1 1 2 0v7.5a1 1 0 1 1-2 0z"></svg:path><svg:path d="M15.375 17.72a1 1 0 1 1 1.25 1.56l-2.5 2a1 1 0 0 1-1.25-1.56z"></svg:path><svg:path d="M10.375 19.28a1 1 0 1 1 1.25-1.56l2.5 2a1 1 0 0 1-1.25 1.56z"></svg:path><svg:path fill-rule="evenodd" d="M13 24c6.075 0 11-4.925 11-11S19.075 2 13 2S2 6.925 2 13s4.925 11 11 11m0 2c7.18 0 13-5.82 13-13S20.18 0 13 0S0 5.82 0 13s5.82 13 13 13" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPopCloudDownCircleIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopCloudDownCircleFilledIcon],svg[pepicons-pop-cloud-down-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPopCloudDownCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:g fill="#000"><svg:path fill-rule="evenodd" d="M14 6h-1a4 4 0 0 0-3.874 3H9a4 4 0 1 0 0 8h8a4 4 0 0 0 .899-7.899A4 4 0 0 0 14 6m-3.324 5l.387-1.501A2 2 0 0 1 13 8h1c.937 0 1.743.65 1.95 1.549l.28 1.221l1.221.28A2.002 2.002 0 0 1 17 15H9a2 2 0 1 1 0-4z" clip-rule="evenodd"></svg:path><svg:path d="M12.5 13a1 1 0 1 1 2 0v7.5a1 1 0 1 1-2 0z"></svg:path><svg:path d="M15.375 17.72a1 1 0 1 1 1.25 1.56l-2.5 2a1 1 0 0 1-1.25-1.56z"></svg:path><svg:path d="M10.375 19.28a1 1 0 1 1 1.25-1.56l2.5 2a1 1 0 0 1-1.25 1.56z"></svg:path></svg:g></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPopCloudDownCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPopCloudDownCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopCloudDownCircleOffIcon],svg[pepicons-pop-cloud-down-circle-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M14 6h-1a4 4 0 0 0-3.874 3H9a4 4 0 1 0 0 8h8a4 4 0 0 0 .899-7.899A4 4 0 0 0 14 6m-3.324 5l.387-1.501A2 2 0 0 1 13 8h1c.937 0 1.743.65 1.95 1.549l.28 1.221l1.221.28A2.002 2.002 0 0 1 17 15H9a2 2 0 1 1 0-4z" clip-rule="evenodd"></svg:path><svg:path d="M12.5 13a1 1 0 1 1 2 0v7.5a1 1 0 1 1-2 0z"></svg:path><svg:path d="M15.375 17.72a1 1 0 1 1 1.25 1.56l-2.5 2a1 1 0 0 1-1.25-1.56z"></svg:path><svg:path d="M10.375 19.28a1 1 0 1 1 1.25-1.56l2.5 2a1 1 0 0 1-1.25 1.56zM4.293 5.707a1 1 0 0 1 1.414-1.414l16 16a1 1 0 0 1-1.414 1.414z"></svg:path><svg:path fill-rule="evenodd" d="M13 24c6.075 0 11-4.925 11-11S19.075 2 13 2S2 6.925 2 13s4.925 11 11 11m0 2c7.18 0 13-5.82 13-13S20.18 0 13 0S0 5.82 0 13s5.82 13 13 13" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPopCloudDownCircleOffIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopCloudDownFilledIcon],svg[pepicons-pop-cloud-down-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M12 14V9.25a1.5 1.5 0 0 0-3 0V14H6a4 4 0 0 1 0-8h.126C6.57 4.275 8.136 3 10 3h1c1.9 0 3.49 1.325 3.899 3.101A4.002 4.002 0 0 1 14 14h-2Z" clip-rule="evenodd"></svg:path><svg:path d="M9.5 9.5a1 1 0 1 1 2 0V17a1 1 0 1 1-2 0V9.5Z"></svg:path><svg:path d="M12.375 14.72a1 1 0 1 1 1.25 1.56l-2.5 2a1 1 0 0 1-1.25-1.56l2.5-2Z"></svg:path><svg:path d="M7.375 16.28a1 1 0 1 1 1.25-1.56l2.5 2a1 1 0 0 1-1.25 1.56l-2.5-2Z"></svg:path></svg:g>`,
})
export class PepiconsPopCloudDownFilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopCloudDownOffIcon],svg[pepicons-pop-cloud-down-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M11 3h-1a4 4 0 0 0-3.874 3H6a4 4 0 1 0 0 8h8a4 4 0 0 0 .899-7.899A4 4 0 0 0 11 3M7.676 8l.387-1.501A2 2 0 0 1 10 5h1c.937 0 1.743.65 1.95 1.549l.28 1.221l1.221.28A2.002 2.002 0 0 1 14 12H6a2 2 0 1 1 0-4z" clip-rule="evenodd"></svg:path><svg:path d="M9.5 10a1 1 0 1 1 2 0v7.5a1 1 0 1 1-2 0z"></svg:path><svg:path d="M12.375 14.72a1 1 0 1 1 1.25 1.56l-2.5 2a1 1 0 0 1-1.25-1.56z"></svg:path><svg:path d="M7.375 16.28a1 1 0 1 1 1.25-1.56l2.5 2a1 1 0 0 1-1.25 1.56zM1.293 2.707a1 1 0 0 1 1.414-1.414l16 16a1 1 0 0 1-1.414 1.414z"></svg:path></svg:g>`,
})
export class PepiconsPopCloudDownOffIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopCloudFilledIcon],svg[pepicons-pop-cloud-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:rect width="16" height="8" x="2" y="6" rx="4"></svg:rect><svg:rect width="9" height="8" x="6" y="3" rx="4"></svg:rect><svg:rect width="16" height="8" x="2" y="6" rx="4"></svg:rect><svg:rect width="9" height="8" x="6" y="3" rx="4"></svg:rect></svg:g>`,
})
export class PepiconsPopCloudFilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopCloudOffIcon],svg[pepicons-pop-cloud-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M11 3h-1a4 4 0 0 0-3.874 3H6a4 4 0 1 0 0 8h8a4 4 0 0 0 .899-7.899A4 4 0 0 0 11 3M7.676 8l.387-1.501A2 2 0 0 1 10 5h1c.937 0 1.743.65 1.95 1.549l.28 1.221l1.221.28A2.002 2.002 0 0 1 14 12H6a2 2 0 1 1 0-4z" clip-rule="evenodd"></svg:path><svg:path d="M1.293 2.707a1 1 0 0 1 1.414-1.414l16 16a1 1 0 0 1-1.414 1.414z"></svg:path></svg:g>`,
})
export class PepiconsPopCloudOffIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopCloudUpIcon],svg[pepicons-pop-cloud-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M11 3h-1a4 4 0 0 0-3.874 3H6a4 4 0 1 0 0 8h8a4 4 0 0 0 .899-7.899A4 4 0 0 0 11 3M7.676 8l.387-1.501A2 2 0 0 1 10 5h1c.937 0 1.743.65 1.95 1.549l.28 1.221l1.221.28A2.002 2.002 0 0 1 14 12H6a2 2 0 1 1 0-4z" clip-rule="evenodd"></svg:path><svg:path d="M11.5 16a1 1 0 1 1-2 0V8.5a1 1 0 0 1 2 0z"></svg:path><svg:path d="M8.625 11.28a1 1 0 1 1-1.25-1.56l2.5-2a1 1 0 1 1 1.25 1.56z"></svg:path><svg:path d="M13.625 9.72a1 1 0 1 1-1.25 1.56l-2.5-2a1 1 0 0 1 1.25-1.56z"></svg:path></svg:g>`,
})
export class PepiconsPopCloudUpIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopCloudUpCircleIcon],svg[pepicons-pop-cloud-up-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M14 6h-1a4 4 0 0 0-3.874 3H9a4 4 0 1 0 0 8h8a4 4 0 0 0 .899-7.899A4 4 0 0 0 14 6m-3.324 5l.387-1.501A2 2 0 0 1 13 8h1c.937 0 1.743.65 1.95 1.549l.28 1.221l1.221.28A2.002 2.002 0 0 1 17 15H9a2 2 0 1 1 0-4z" clip-rule="evenodd"></svg:path><svg:path d="M14.5 19a1 1 0 1 1-2 0v-7.5a1 1 0 0 1 2 0z"></svg:path><svg:path d="M11.625 14.28a1 1 0 1 1-1.25-1.56l2.5-2a1 1 0 1 1 1.25 1.56z"></svg:path><svg:path d="M16.625 12.72a1 1 0 1 1-1.25 1.56l-2.5-2a1 1 0 0 1 1.25-1.56z"></svg:path><svg:path fill-rule="evenodd" d="M13 24c6.075 0 11-4.925 11-11S19.075 2 13 2S2 6.925 2 13s4.925 11 11 11m0 2c7.18 0 13-5.82 13-13S20.18 0 13 0S0 5.82 0 13s5.82 13 13 13" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPopCloudUpCircleIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopCloudUpCircleFilledIcon],svg[pepicons-pop-cloud-up-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPopCloudUpCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:g fill="#000"><svg:path fill-rule="evenodd" d="M14 6h-1a4 4 0 0 0-3.874 3H9a4 4 0 1 0 0 8h8a4 4 0 0 0 .899-7.899A4 4 0 0 0 14 6m-3.324 5l.387-1.501A2 2 0 0 1 13 8h1c.937 0 1.743.65 1.95 1.549l.28 1.221l1.221.28A2.002 2.002 0 0 1 17 15H9a2 2 0 1 1 0-4z" clip-rule="evenodd"></svg:path><svg:path d="M14.5 19a1 1 0 1 1-2 0v-7.5a1 1 0 0 1 2 0z"></svg:path><svg:path d="M11.625 14.28a1 1 0 1 1-1.25-1.56l2.5-2a1 1 0 1 1 1.25 1.56z"></svg:path><svg:path d="M16.625 12.72a1 1 0 1 1-1.25 1.56l-2.5-2a1 1 0 0 1 1.25-1.56z"></svg:path></svg:g></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPopCloudUpCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPopCloudUpCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopCloudUpCircleOffIcon],svg[pepicons-pop-cloud-up-circle-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M14 6h-1a4 4 0 0 0-3.874 3H9a4 4 0 1 0 0 8h8a4 4 0 0 0 .899-7.899A4 4 0 0 0 14 6m-3.324 5l.387-1.501A2 2 0 0 1 13 8h1c.937 0 1.743.65 1.95 1.549l.28 1.221l1.221.28A2.002 2.002 0 0 1 17 15H9a2 2 0 1 1 0-4z" clip-rule="evenodd"></svg:path><svg:path d="M14.5 19a1 1 0 1 1-2 0v-7.5a1 1 0 0 1 2 0z"></svg:path><svg:path d="M11.625 14.28a1 1 0 1 1-1.25-1.56l2.5-2a1 1 0 1 1 1.25 1.56z"></svg:path><svg:path d="M16.625 12.72a1 1 0 1 1-1.25 1.56l-2.5-2a1 1 0 0 1 1.25-1.56z"></svg:path><svg:path d="M4.293 5.707a1 1 0 0 1 1.414-1.414l16 16a1 1 0 0 1-1.414 1.414z"></svg:path><svg:path fill-rule="evenodd" d="M13 24c6.075 0 11-4.925 11-11S19.075 2 13 2S2 6.925 2 13s4.925 11 11 11m0 2c7.18 0 13-5.82 13-13S20.18 0 13 0S0 5.82 0 13s5.82 13 13 13" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPopCloudUpCircleOffIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopCloudUpFilledIcon],svg[pepicons-pop-cloud-up-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11.5 14v-3.322l.752.587a1 1 0 0 0 1.231-1.576l-2.304-1.8a1 1 0 0 0-.673-.259a1 1 0 0 0-.674.259l-2.304 1.8a1 1 0 0 0 1.231 1.576l.741-.578V14H6a4 4 0 0 1 0-8h.126C6.57 4.275 8.136 3 10 3h1c1.9 0 3.49 1.325 3.899 3.101A4.002 4.002 0 0 1 14 14h-2.5Z" clip-rule="evenodd"></svg:path>`,
})
export class PepiconsPopCloudUpFilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopCloudUpOffIcon],svg[pepicons-pop-cloud-up-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M11 3h-1a4 4 0 0 0-3.874 3H6a4 4 0 1 0 0 8h8a4 4 0 0 0 .899-7.899A4 4 0 0 0 11 3M7.676 8l.387-1.501A2 2 0 0 1 10 5h1c.937 0 1.743.65 1.95 1.549l.28 1.221l1.221.28A2.002 2.002 0 0 1 14 12H6a2 2 0 1 1 0-4z" clip-rule="evenodd"></svg:path><svg:path d="M11.5 16a1 1 0 1 1-2 0V8.5a1 1 0 0 1 2 0z"></svg:path><svg:path d="M8.625 11.28a1 1 0 1 1-1.25-1.56l2.5-2a1 1 0 1 1 1.25 1.56z"></svg:path><svg:path d="M13.625 9.72a1 1 0 1 1-1.25 1.56l-2.5-2a1 1 0 0 1 1.25-1.56z"></svg:path><svg:path d="M1.293 2.707a1 1 0 0 1 1.414-1.414l16 16a1 1 0 0 1-1.414 1.414z"></svg:path></svg:g>`,
})
export class PepiconsPopCloudUpOffIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopCoctailIcon],svg[pepicons-pop-coctail-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M6 8a.5.5 0 0 1 0-1h8a.5.5 0 0 1 0 1z"></svg:path><svg:path fill-rule="evenodd" d="m2.767 5.68l6.5 7a1 1 0 0 0 1.466 0l6.5-7c.594-.64.14-1.68-.733-1.68h-13c-.873 0-1.327 1.04-.733 1.68m11.44.32L10 10.53L5.793 6z" clip-rule="evenodd"></svg:path><svg:path d="M11 11.5v7H9v-7z"></svg:path><svg:path d="M14.5 20h-9c0-1.475 2.05-2.5 4.5-2.5s4.5 1.025 4.5 2.5M12.818 1.728a.75.75 0 0 1 .364-1.456l4 1a.75.75 0 0 1-.364 1.456z"></svg:path><svg:path d="M11.212 8.737a.75.75 0 1 1-1.424-.474l2.5-7.5a.75.75 0 1 1 1.423.474z"></svg:path></svg:g>`,
})
export class PepiconsPopCoctailIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopCoctailCircleIcon],svg[pepicons-pop-coctail-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M9 11a.5.5 0 0 1 0-1h8a.5.5 0 0 1 0 1z"></svg:path><svg:path fill-rule="evenodd" d="m5.767 8.68l6.5 7a1 1 0 0 0 1.466 0l6.5-7c.594-.64.14-1.68-.733-1.68h-13c-.873 0-1.327 1.04-.733 1.68m11.44.32L13 13.53L8.793 9z" clip-rule="evenodd"></svg:path><svg:path d="M14 14.5v7h-2v-7z"></svg:path><svg:path d="M17.5 23h-9c0-1.475 2.05-2.5 4.5-2.5s4.5 1.025 4.5 2.5M15.818 4.728a.75.75 0 0 1 .364-1.456l4 1a.75.75 0 0 1-.364 1.456z"></svg:path><svg:path d="M14.212 11.737a.75.75 0 1 1-1.424-.474l2.5-7.5a.75.75 0 1 1 1.424.474z"></svg:path><svg:path fill-rule="evenodd" d="M13 24c6.075 0 11-4.925 11-11S19.075 2 13 2S2 6.925 2 13s4.925 11 11 11m0 2c7.18 0 13-5.82 13-13S20.18 0 13 0S0 5.82 0 13s5.82 13 13 13" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPopCoctailCircleIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopCoctailCircleFilledIcon],svg[pepicons-pop-coctail-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPopCoctailCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:g fill="#000"><svg:path d="M9 11a.5.5 0 0 1 0-1h8a.5.5 0 0 1 0 1z"></svg:path><svg:path fill-rule="evenodd" d="m5.767 8.68l6.5 7a1 1 0 0 0 1.466 0l6.5-7c.594-.64.14-1.68-.733-1.68h-13c-.873 0-1.327 1.04-.733 1.68m11.44.32L13 13.53L8.793 9z" clip-rule="evenodd"></svg:path><svg:path d="M14 14.5v7h-2v-7z"></svg:path><svg:path d="M17.5 23h-9c0-1.475 2.05-2.5 4.5-2.5s4.5 1.025 4.5 2.5M15.818 4.728a.75.75 0 0 1 .364-1.456l4 1a.75.75 0 0 1-.364 1.456z"></svg:path><svg:path d="M14.212 11.737a.75.75 0 1 1-1.424-.474l2.5-7.5a.75.75 0 1 1 1.424.474z"></svg:path></svg:g></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPopCoctailCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPopCoctailCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopCoctailCircleOffIcon],svg[pepicons-pop-coctail-circle-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M9 11a.5.5 0 0 1 0-1h8a.5.5 0 0 1 0 1z"></svg:path><svg:path fill-rule="evenodd" d="m5.767 8.68l6.5 7a1 1 0 0 0 1.466 0l6.5-7c.594-.64.14-1.68-.733-1.68h-13c-.873 0-1.327 1.04-.733 1.68m11.44.32L13 13.53L8.793 9z" clip-rule="evenodd"></svg:path><svg:path d="M14 14.5v7h-2v-7z"></svg:path><svg:path d="M17.5 23h-9c0-1.475 2.05-2.5 4.5-2.5s4.5 1.025 4.5 2.5M15.818 4.728a.75.75 0 0 1 .364-1.456l4 1a.75.75 0 0 1-.364 1.456z"></svg:path><svg:path d="M14.212 11.737a.75.75 0 1 1-1.424-.474l2.5-7.5a.75.75 0 1 1 1.424.474z"></svg:path><svg:path d="M4.293 5.707a1 1 0 0 1 1.414-1.414l16 16a1 1 0 0 1-1.414 1.414z"></svg:path><svg:path fill-rule="evenodd" d="M13 24c6.075 0 11-4.925 11-11S19.075 2 13 2S2 6.925 2 13s4.925 11 11 11m0 2c7.18 0 13-5.82 13-13S20.18 0 13 0S0 5.82 0 13s5.82 13 13 13" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPopCoctailCircleOffIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopCoctailOffIcon],svg[pepicons-pop-coctail-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M6 8a.5.5 0 0 1 0-1h8a.5.5 0 0 1 0 1z"></svg:path><svg:path fill-rule="evenodd" d="m2.767 5.68l6.5 7a1 1 0 0 0 1.466 0l6.5-7c.594-.64.14-1.68-.733-1.68h-13c-.873 0-1.327 1.04-.733 1.68m11.44.32L10 10.53L5.793 6z" clip-rule="evenodd"></svg:path><svg:path d="M11 11.5v7H9v-7z"></svg:path><svg:path d="M14.5 20h-9c0-1.475 2.05-2.5 4.5-2.5s4.5 1.025 4.5 2.5M12.818 1.728a.75.75 0 0 1 .364-1.456l4 1a.75.75 0 0 1-.364 1.456z"></svg:path><svg:path d="M11.212 8.737a.75.75 0 1 1-1.424-.474l2.5-7.5a.75.75 0 1 1 1.423.474z"></svg:path><svg:path d="M1.293 2.707a1 1 0 0 1 1.414-1.414l16 16a1 1 0 0 1-1.414 1.414z"></svg:path></svg:g>`,
})
export class PepiconsPopCoctailOffIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopCodeIcon],svg[pepicons-pop-code-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M1.59 9.331a1 1 0 0 1 1.412-.074l3.334 3a1 1 0 0 1-1.338 1.486l-3.334-3a1 1 0 0 1-.074-1.412"></svg:path><svg:path d="M6.41 6.331a1 1 0 0 1-.074 1.412l-3.334 3a1 1 0 1 1-1.338-1.486l3.334-3a1 1 0 0 1 1.412.074m12 3a1 1 0 0 1-.074 1.412l-3.334 3a1 1 0 1 1-1.338-1.486l3.334-3a1 1 0 0 1 1.412.074"></svg:path><svg:path d="M13.59 6.331a1 1 0 0 1 1.412-.074l3.334 3a1 1 0 0 1-1.338 1.486l-3.334-3a1 1 0 0 1-.074-1.412m-1.827-2.796a1 1 0 0 1 .702 1.228l-3 11a1 1 0 0 1-1.93-.526l3-11a1 1 0 0 1 1.228-.702"></svg:path></svg:g>`,
})
export class PepiconsPopCodeIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopCodeCircleIcon],svg[pepicons-pop-code-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M4.59 12.331a1 1 0 0 1 1.412-.074l3.334 3a1 1 0 0 1-1.338 1.486l-3.334-3a1 1 0 0 1-.074-1.412"></svg:path><svg:path d="M9.41 9.331a1 1 0 0 1-.074 1.412l-3.334 3a1 1 0 1 1-1.338-1.486l3.334-3a1 1 0 0 1 1.412.074m12 3a1 1 0 0 1-.074 1.412l-3.334 3a1 1 0 1 1-1.338-1.486l3.334-3a1 1 0 0 1 1.412.074"></svg:path><svg:path d="M16.59 9.331a1 1 0 0 1 1.412-.074l3.334 3a1 1 0 0 1-1.338 1.486l-3.334-3a1 1 0 0 1-.074-1.412m-1.827-2.796a1 1 0 0 1 .702 1.228l-3 11a1 1 0 0 1-1.93-.526l3-11a1 1 0 0 1 1.228-.702"></svg:path><svg:path d="M13 24c6.075 0 11-4.925 11-11S19.075 2 13 2S2 6.925 2 13s4.925 11 11 11m0 2c7.18 0 13-5.82 13-13S20.18 0 13 0S0 5.82 0 13s5.82 13 13 13"></svg:path></svg:g>`,
})
export class PepiconsPopCodeCircleIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopCodeCircleFilledIcon],svg[pepicons-pop-code-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPopCodeCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:g fill="#000" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M4.59 12.331a1 1 0 0 1 1.412-.074l3.334 3a1 1 0 0 1-1.338 1.486l-3.334-3a1 1 0 0 1-.074-1.412"></svg:path><svg:path d="M9.41 9.331a1 1 0 0 1-.074 1.412l-3.334 3a1 1 0 1 1-1.338-1.486l3.334-3a1 1 0 0 1 1.412.074m12 3a1 1 0 0 1-.074 1.412l-3.334 3a1 1 0 1 1-1.338-1.486l3.334-3a1 1 0 0 1 1.412.074"></svg:path><svg:path d="M16.59 9.331a1 1 0 0 1 1.412-.074l3.334 3a1 1 0 0 1-1.338 1.486l-3.334-3a1 1 0 0 1-.074-1.412m-1.827-2.796a1 1 0 0 1 .702 1.228l-3 11a1 1 0 0 1-1.93-.526l3-11a1 1 0 0 1 1.228-.702"></svg:path></svg:g></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPopCodeCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPopCodeCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopCodeCircleOffIcon],svg[pepicons-pop-code-circle-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M4.59 12.331a1 1 0 0 1 1.412-.074l3.334 3a1 1 0 0 1-1.338 1.486l-3.334-3a1 1 0 0 1-.074-1.412" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M9.41 9.331a1 1 0 0 1-.074 1.412l-3.334 3a1 1 0 1 1-1.338-1.486l3.334-3a1 1 0 0 1 1.412.074m12 3a1 1 0 0 1-.074 1.412l-3.334 3a1 1 0 1 1-1.338-1.486l3.334-3a1 1 0 0 1 1.412.074" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M16.59 9.331a1 1 0 0 1 1.412-.074l3.334 3a1 1 0 0 1-1.338 1.486l-3.334-3a1 1 0 0 1-.074-1.412m-1.827-2.796a1 1 0 0 1 .702 1.228l-3 11a1 1 0 0 1-1.93-.526l3-11a1 1 0 0 1 1.228-.702" clip-rule="evenodd"></svg:path><svg:path d="M4.293 5.707a1 1 0 0 1 1.414-1.414l16 16a1 1 0 0 1-1.414 1.414z"></svg:path><svg:path fill-rule="evenodd" d="M13 24c6.075 0 11-4.925 11-11S19.075 2 13 2S2 6.925 2 13s4.925 11 11 11m0 2c7.18 0 13-5.82 13-13S20.18 0 13 0S0 5.82 0 13s5.82 13 13 13" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPopCodeCircleOffIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopCodeOffIcon],svg[pepicons-pop-code-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M1.59 9.331a1 1 0 0 1 1.412-.074l3.334 3a1 1 0 0 1-1.338 1.486l-3.334-3a1 1 0 0 1-.074-1.412" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M6.41 6.331a1 1 0 0 1-.074 1.412l-3.334 3a1 1 0 1 1-1.338-1.486l3.334-3a1 1 0 0 1 1.412.074m12 3a1 1 0 0 1-.074 1.412l-3.334 3a1 1 0 1 1-1.338-1.486l3.334-3a1 1 0 0 1 1.412.074" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M13.59 6.331a1 1 0 0 1 1.412-.074l3.334 3a1 1 0 0 1-1.338 1.486l-3.334-3a1 1 0 0 1-.074-1.412m-1.827-2.796a1 1 0 0 1 .702 1.228l-3 11a1 1 0 0 1-1.93-.526l3-11a1 1 0 0 1 1.228-.702" clip-rule="evenodd"></svg:path><svg:path d="M1.293 2.707a1 1 0 0 1 1.414-1.414l16 16a1 1 0 0 1-1.414 1.414z"></svg:path></svg:g>`,
})
export class PepiconsPopCodeOffIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopCoinsIcon],svg[pepicons-pop-coins-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M16.015 10.578c-.85-.343-2.092-.578-3.515-.578V8c1.614 0 3.122.263 4.264.724c.568.23 1.094.528 1.495.91c.402.385.741.922.741 1.588c0 .667-.338 1.203-.741 1.588c-.4.383-.927.681-1.495.91c-1.142.462-2.65.724-4.264.724s-3.122-.262-4.264-.723c-.568-.23-1.094-.528-1.495-.91c-.401-.387-.741-.923-.741-1.59h2l-.001-.015a.5.5 0 0 0 .124.157c.156.15.435.33.863.502c.849.344 2.09.578 3.514.578s2.665-.235 3.515-.578c.427-.172.706-.353.862-.502a.6.6 0 0 0 .117-.142a.6.6 0 0 0-.117-.142c-.156-.149-.435-.33-.862-.502m.988.665L17 11.238zM17 11.207q0-.006.002-.006zM7.998 11.2v.006z"></svg:path><svg:path d="M7 10.667a1 1 0 0 1 1 1v3.098c.008.02.035.07.123.155c.156.149.435.33.863.502c.849.343 2.09.578 3.514.578s2.665-.235 3.515-.578c.427-.173.706-.353.862-.502a.5.5 0 0 0 .123-.155v-3.098a1 1 0 0 1 2 0v3.11c0 .668-.338 1.204-.741 1.589c-.4.383-.927.68-1.495.91c-1.142.462-2.65.724-4.264.724s-3.122-.262-4.264-.724c-.568-.23-1.094-.527-1.495-.91C6.34 15.98 6 15.445 6 14.778v-3.111a1 1 0 0 1 1-1m10.003 4.09l-.002.005q0-.005.002-.005m-9.005 0v.005z"></svg:path><svg:path d="M9.2 16v-2h2v2zm4.4 0v-2h2v2zM2.998 5.243v-.005zm.008-.02a.6.6 0 0 1 .117-.143c.156-.149.435-.33.863-.502C4.835 4.235 6.076 4 7.5 4s2.665.235 3.515.578c.427.173.706.353.862.502c.073.07.104.117.117.142a.6.6 0 0 1-.117.142c-.156.15-.435.33-.863.502c-.849.344-2.09.578-3.514.578s-2.665-.234-3.514-.578c-.428-.172-.707-.353-.863-.502a.6.6 0 0 1-.117-.142m8.997.02L12 5.238zM12 5.207q0-.006.002-.006zm-9 0L2.998 5.2zm.237-2.483C4.378 2.263 5.886 2 7.5 2s3.122.263 4.264.724c.568.23 1.094.528 1.495.91c.402.385.741.922.741 1.588c0 .667-.338 1.203-.742 1.588c-.4.383-.926.681-1.494.91c-1.142.462-2.65.724-4.264.724s-3.122-.262-4.264-.723c-.568-.23-1.094-.528-1.495-.91C1.34 6.424 1 5.888 1 5.221s.339-1.203.741-1.588c.4-.382.927-.68 1.495-.91"></svg:path><svg:path d="M2 4.667a1 1 0 0 1 1 1v3.098a.5.5 0 0 0 .123.155c.156.149.435.33.863.502c.849.343 2.09.578 3.514.578s2.665-.235 3.515-.578c.427-.173.706-.353.862-.502A.5.5 0 0 0 12 8.765V5.667a1 1 0 1 1 2 0v3.11c0 .667-.338 1.204-.742 1.589c-.4.383-.926.68-1.494.91c-1.142.462-2.65.724-4.264.724s-3.122-.262-4.264-.724c-.568-.23-1.094-.527-1.495-.91C1.34 9.98 1 9.444 1 8.778V5.667a1 1 0 0 1 1-1m10.003 4.09L12 8.762q0-.005.002-.005m-9.005 0v.005z"></svg:path><svg:path d="M4.2 10V8h2v2zm4.4 0V8h2v2z"></svg:path></svg:g>`,
})
export class PepiconsPopCoinsIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopCoinsCircleIcon],svg[pepicons-pop-coins-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M19.015 13.578c-.85-.343-2.092-.578-3.515-.578v-2c1.614 0 3.122.263 4.264.724c.568.23 1.094.528 1.495.91c.402.385.741.922.741 1.588c0 .667-.338 1.203-.741 1.588c-.4.383-.927.681-1.495.91c-1.142.462-2.65.724-4.264.724s-3.122-.262-4.264-.723c-.568-.23-1.094-.528-1.495-.91c-.401-.387-.741-.923-.741-1.59h2l-.001-.015a.5.5 0 0 0 .124.157c.156.15.435.33.863.502c.849.344 2.09.578 3.514.578s2.665-.235 3.515-.578c.427-.172.706-.353.862-.502a.6.6 0 0 0 .117-.142a.6.6 0 0 0-.117-.142c-.156-.149-.435-.33-.862-.502m.988.665L20 14.238zM20 14.207q0-.006.002-.006zm-9.003-.006v.006z"></svg:path><svg:path d="M10 13.667a1 1 0 0 1 1 1v3.098c.008.02.035.07.123.155c.156.149.435.33.863.502c.849.343 2.09.578 3.514.578s2.665-.235 3.515-.578c.427-.173.706-.353.862-.502a.5.5 0 0 0 .123-.155v-3.098a1 1 0 0 1 2 0v3.11c0 .667-.338 1.204-.741 1.589c-.4.383-.927.68-1.495.91c-1.142.462-2.65.724-4.264.724s-3.122-.262-4.264-.724c-.568-.23-1.094-.527-1.495-.91C9.34 18.98 9 18.444 9 17.778v-3.111a1 1 0 0 1 1-1m10.003 4.09l-.002.005q0-.005.002-.005m-9.005 0v.005z"></svg:path><svg:path d="M12.2 19v-2h2v2zm4.4 0v-2h2v2zM5.998 8.243v-.005zm.008-.02a.6.6 0 0 1 .117-.143c.156-.149.435-.33.863-.502C7.835 7.235 9.076 7 10.5 7s2.665.235 3.515.578c.427.173.706.353.862.502c.073.07.104.117.117.142a.6.6 0 0 1-.117.142c-.156.15-.435.33-.863.502c-.849.344-2.09.578-3.514.578s-2.665-.234-3.514-.578c-.428-.172-.707-.353-.863-.502a.6.6 0 0 1-.117-.142m8.996.02v-.005zm0-.036V8.2zm-9.003 0L5.998 8.2zm.237-2.483C7.378 5.263 8.886 5 10.5 5s3.122.263 4.264.724c.568.23 1.094.528 1.494.91c.404.385.742.922.742 1.588c0 .667-.338 1.203-.742 1.588c-.4.383-.926.681-1.494.91c-1.142.462-2.65.724-4.264.724s-3.122-.262-4.264-.723c-.568-.23-1.094-.528-1.495-.91C4.34 9.424 4 8.888 4 8.221s.339-1.203.741-1.588c.4-.382.927-.68 1.495-.91"></svg:path><svg:path d="M5 7.667a1 1 0 0 1 1 1v3.098a.5.5 0 0 0 .123.155c.156.149.435.33.863.502c.849.343 2.09.578 3.514.578s2.665-.235 3.515-.578c.427-.173.706-.353.862-.502a.5.5 0 0 0 .123-.155V8.667a1 1 0 1 1 2 0v3.11c0 .667-.338 1.204-.742 1.589c-.4.383-.926.68-1.494.91c-1.142.462-2.65.724-4.264.724s-3.122-.262-4.264-.724c-.568-.23-1.094-.527-1.495-.91C4.34 12.98 4 12.444 4 11.778V8.667a1 1 0 0 1 1-1m10.003 4.09l-.002.005q0-.005.002-.005m-9.005 0v.005z"></svg:path><svg:path d="M7.2 13v-2h2v2zm4.4 0v-2h2v2z"></svg:path><svg:path d="M13 24c6.075 0 11-4.925 11-11S19.075 2 13 2S2 6.925 2 13s4.925 11 11 11m0 2c7.18 0 13-5.82 13-13S20.18 0 13 0S0 5.82 0 13s5.82 13 13 13"></svg:path></svg:g>`,
})
export class PepiconsPopCoinsCircleIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopCoinsCircleFilledIcon],svg[pepicons-pop-coins-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPopCoinsCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:g fill="#000" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M19.015 13.578c-.85-.343-2.092-.578-3.515-.578v-2c1.614 0 3.122.263 4.264.724c.568.23 1.094.528 1.495.91c.402.385.741.922.741 1.588c0 .667-.338 1.203-.741 1.588c-.4.383-.927.681-1.495.91c-1.142.462-2.65.724-4.264.724s-3.122-.262-4.264-.723c-.568-.23-1.094-.528-1.495-.91c-.401-.387-.741-.923-.741-1.59h2l-.001-.015a.5.5 0 0 0 .124.157c.156.15.435.33.863.502c.849.344 2.09.578 3.514.578s2.665-.235 3.515-.578c.427-.172.706-.353.862-.502a.6.6 0 0 0 .117-.142a.6.6 0 0 0-.117-.142c-.156-.149-.435-.33-.862-.502m.988.665L20 14.238zM20 14.207q0-.006.002-.006zm-9.003-.006v.006z"></svg:path><svg:path d="M10 13.667a1 1 0 0 1 1 1v3.098c.008.02.035.07.123.155c.156.149.435.33.863.502c.849.343 2.09.578 3.514.578s2.665-.235 3.515-.578c.427-.173.706-.353.862-.502a.5.5 0 0 0 .123-.155v-3.098a1 1 0 0 1 2 0v3.11c0 .667-.338 1.204-.741 1.589c-.4.383-.927.68-1.495.91c-1.142.462-2.65.724-4.264.724s-3.122-.262-4.264-.724c-.568-.23-1.094-.527-1.495-.91C9.34 18.98 9 18.444 9 17.778v-3.111a1 1 0 0 1 1-1m10.003 4.09l-.002.005q0-.005.002-.005m-9.005 0v.005z"></svg:path><svg:path d="M12.2 19v-2h2v2zm4.4 0v-2h2v2zM5.998 8.243v-.005zm.008-.02a.6.6 0 0 1 .117-.143c.156-.149.435-.33.863-.502C7.835 7.235 9.076 7 10.5 7s2.665.235 3.515.578c.427.173.706.353.862.502c.073.07.104.117.117.142a.6.6 0 0 1-.117.142c-.156.15-.435.33-.863.502c-.849.344-2.09.578-3.514.578s-2.665-.234-3.514-.578c-.428-.172-.707-.353-.863-.502a.6.6 0 0 1-.117-.142m8.996.02v-.005zm0-.036V8.2zm-9.003 0L5.998 8.2zm.237-2.483C7.378 5.263 8.886 5 10.5 5s3.122.263 4.264.724c.568.23 1.094.528 1.494.91c.404.385.742.922.742 1.588c0 .667-.338 1.203-.742 1.588c-.4.383-.926.681-1.494.91c-1.142.462-2.65.724-4.264.724s-3.122-.262-4.264-.723c-.568-.23-1.094-.528-1.495-.91C4.34 9.424 4 8.888 4 8.221s.339-1.203.741-1.588c.4-.382.927-.68 1.495-.91"></svg:path><svg:path d="M5 7.667a1 1 0 0 1 1 1v3.098a.5.5 0 0 0 .123.155c.156.149.435.33.863.502c.849.343 2.09.578 3.514.578s2.665-.235 3.515-.578c.427-.173.706-.353.862-.502a.5.5 0 0 0 .123-.155V8.667a1 1 0 1 1 2 0v3.11c0 .667-.338 1.204-.742 1.589c-.4.383-.926.68-1.494.91c-1.142.462-2.65.724-4.264.724s-3.122-.262-4.264-.724c-.568-.23-1.094-.527-1.495-.91C4.34 12.98 4 12.444 4 11.778V8.667a1 1 0 0 1 1-1m10.003 4.09l-.002.005q0-.005.002-.005m-9.005 0v.005z"></svg:path><svg:path d="M7.2 13v-2h2v2zm4.4 0v-2h2v2z"></svg:path></svg:g></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPopCoinsCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPopCoinsCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopCoinsCircleOffIcon],svg[pepicons-pop-coins-circle-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M19.015 13.578c-.85-.343-2.092-.578-3.515-.578v-2c1.614 0 3.122.263 4.264.724c.568.23 1.094.528 1.495.91c.402.385.741.922.741 1.588c0 .667-.338 1.203-.741 1.588c-.4.383-.927.681-1.495.91c-1.142.462-2.65.724-4.264.724s-3.122-.262-4.264-.723c-.568-.23-1.094-.528-1.495-.91c-.401-.387-.741-.923-.741-1.59h2l-.001-.015a.5.5 0 0 0 .124.157c.156.15.435.33.863.502c.849.344 2.09.578 3.514.578s2.665-.235 3.515-.578c.427-.172.706-.353.862-.502a.6.6 0 0 0 .117-.142a.6.6 0 0 0-.117-.142c-.156-.149-.435-.33-.862-.502m.988.665L20 14.238zM20 14.207q0-.006.002-.006zm-9.003-.006v.006z" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M10 13.667a1 1 0 0 1 1 1v3.098c.008.02.035.07.123.155c.156.149.435.33.863.502c.849.343 2.09.578 3.514.578s2.665-.235 3.515-.578c.427-.173.706-.353.862-.502a.5.5 0 0 0 .123-.155v-3.098a1 1 0 0 1 2 0v3.11c0 .667-.338 1.204-.741 1.589c-.4.383-.927.68-1.495.91c-1.142.462-2.65.724-4.264.724s-3.122-.262-4.264-.724c-.568-.23-1.094-.527-1.495-.91C9.34 18.98 9 18.444 9 17.778v-3.111a1 1 0 0 1 1-1m10.003 4.09l-.002.005q0-.005.002-.005m-9.005 0v.005z" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M12.2 19v-2h2v2zm4.4 0v-2h2v2zM5.998 8.243v-.005zm.008-.02a.6.6 0 0 1 .117-.143c.156-.149.435-.33.863-.502C7.835 7.235 9.076 7 10.5 7s2.665.235 3.515.578c.427.173.706.353.862.502c.073.07.104.117.117.142a.6.6 0 0 1-.117.142c-.156.15-.435.33-.863.502c-.849.344-2.09.578-3.514.578s-2.665-.234-3.514-.578c-.428-.172-.707-.353-.863-.502a.6.6 0 0 1-.117-.142m8.996.02v-.005zm0-.036V8.2zm-9.003 0L5.998 8.2zm.237-2.483C7.378 5.263 8.886 5 10.5 5s3.122.263 4.264.724c.568.23 1.094.528 1.494.91c.404.385.742.922.742 1.588c0 .667-.338 1.203-.742 1.588c-.4.383-.926.681-1.494.91c-1.142.462-2.65.724-4.264.724s-3.122-.262-4.264-.723c-.568-.23-1.094-.528-1.495-.91C4.34 9.424 4 8.888 4 8.221s.339-1.203.741-1.588c.4-.382.927-.68 1.495-.91" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M5 7.667a1 1 0 0 1 1 1v3.098a.5.5 0 0 0 .123.155c.156.149.435.33.863.502c.849.343 2.09.578 3.514.578s2.665-.235 3.515-.578c.427-.173.706-.353.862-.502a.5.5 0 0 0 .123-.155V8.667a1 1 0 1 1 2 0v3.11c0 .667-.338 1.204-.742 1.589c-.4.383-.926.68-1.494.91c-1.142.462-2.65.724-4.264.724s-3.122-.262-4.264-.724c-.568-.23-1.094-.527-1.495-.91C4.34 12.98 4 12.444 4 11.778V8.667a1 1 0 0 1 1-1m10.003 4.09l-.002.005q0-.005.002-.005m-9.005 0v.005z" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M7.2 13v-2h2v2zm4.4 0v-2h2v2z" clip-rule="evenodd"></svg:path><svg:path d="M4.293 5.707a1 1 0 0 1 1.414-1.414l16 16a1 1 0 0 1-1.414 1.414z"></svg:path><svg:path fill-rule="evenodd" d="M13 24c6.075 0 11-4.925 11-11S19.075 2 13 2S2 6.925 2 13s4.925 11 11 11m0 2c7.18 0 13-5.82 13-13S20.18 0 13 0S0 5.82 0 13s5.82 13 13 13" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPopCoinsCircleOffIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopCoinsOffIcon],svg[pepicons-pop-coins-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M16.015 10.578c-.85-.343-2.092-.578-3.515-.578V8c1.614 0 3.122.263 4.264.724c.568.23 1.094.528 1.495.91c.402.385.741.922.741 1.588c0 .667-.338 1.203-.741 1.588c-.4.383-.927.681-1.495.91c-1.142.462-2.65.724-4.264.724s-3.122-.262-4.264-.723c-.568-.23-1.094-.528-1.495-.91c-.401-.387-.741-.923-.741-1.59h2l-.001-.015a.5.5 0 0 0 .124.157c.156.15.435.33.863.502c.849.344 2.09.578 3.514.578s2.665-.235 3.515-.578c.427-.172.706-.353.862-.502a.6.6 0 0 0 .117-.142a.6.6 0 0 0-.117-.142c-.156-.149-.435-.33-.862-.502m.988.665L17 11.238zM17 11.207q0-.006.002-.006zM7.998 11.2v.006z" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M7 10.667a1 1 0 0 1 1 1v3.098c.008.02.035.07.123.155c.156.149.435.33.863.502c.849.343 2.09.578 3.514.578s2.665-.235 3.515-.578c.427-.173.706-.353.862-.502a.5.5 0 0 0 .123-.155v-3.098a1 1 0 0 1 2 0v3.11c0 .668-.338 1.204-.741 1.589c-.4.383-.927.68-1.495.91c-1.142.462-2.65.724-4.264.724s-3.122-.262-4.264-.724c-.568-.23-1.094-.527-1.495-.91C6.34 15.98 6 15.445 6 14.778v-3.111a1 1 0 0 1 1-1m10.003 4.09l-.002.005q0-.005.002-.005m-9.005 0v.005z" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M9.2 16v-2h2v2zm4.4 0v-2h2v2zM2.998 5.243v-.005zm.008-.02a.6.6 0 0 1 .117-.143c.156-.149.435-.33.863-.502C4.835 4.235 6.076 4 7.5 4s2.665.235 3.515.578c.427.173.706.353.862.502c.073.07.104.117.117.142a.6.6 0 0 1-.117.142c-.156.15-.435.33-.863.502c-.849.344-2.09.578-3.514.578s-2.665-.234-3.514-.578c-.428-.172-.707-.353-.863-.502a.6.6 0 0 1-.117-.142m8.997.02L12 5.238zM12 5.207q0-.006.002-.006zm-9 0L2.998 5.2zm.237-2.483C4.378 2.263 5.886 2 7.5 2s3.122.263 4.264.724c.568.23 1.094.528 1.495.91c.402.385.741.922.741 1.588c0 .667-.338 1.203-.742 1.588c-.4.383-.926.681-1.494.91c-1.142.462-2.65.724-4.264.724s-3.122-.262-4.264-.723c-.568-.23-1.094-.528-1.495-.91C1.34 6.424 1 5.888 1 5.221s.339-1.203.741-1.588c.4-.382.927-.68 1.495-.91" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M2 4.667a1 1 0 0 1 1 1v3.098a.5.5 0 0 0 .123.155c.156.149.435.33.863.502c.849.343 2.09.578 3.514.578s2.665-.235 3.515-.578c.427-.173.706-.353.862-.502A.5.5 0 0 0 12 8.765V5.667a1 1 0 1 1 2 0v3.11c0 .667-.338 1.204-.742 1.589c-.4.383-.926.68-1.494.91c-1.142.462-2.65.724-4.264.724s-3.122-.262-4.264-.724c-.568-.23-1.094-.527-1.495-.91C1.34 9.98 1 9.444 1 8.778V5.667a1 1 0 0 1 1-1m10.003 4.09L12 8.762q0-.005.002-.005m-9.005 0v.005z" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M4.2 10V8h2v2zm4.4 0V8h2v2z" clip-rule="evenodd"></svg:path><svg:path d="M1.293 2.707a1 1 0 0 1 1.414-1.414l16 16a1 1 0 0 1-1.414 1.414z"></svg:path></svg:g>`,
})
export class PepiconsPopCoinsOffIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopColorPickerIcon],svg[pepicons-pop-color-picker-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M7.536 15.237c-1.56.616-4.257 2.37-4.728 1.9c-.306-.306.323-1.546.972-2.806h4.66z" clip-rule="evenodd"></svg:path><svg:path d="M15.803 5.555a1 1 0 1 1 1.415 1.414l-8.975 8.975a1 1 0 0 1-.34.222c-.396.157-.8.355-1.753.846c-.47.242-.679.348-.933.474c-1.748.861-2.405 1.068-3.116.357c-.71-.71-.504-1.367.351-3.105c.127-.257.234-.468.48-.945c.491-.953.689-1.356.845-1.753A1 1 0 0 1 4 11.701l8.975-8.975a1 1 0 1 1 1.414 1.414l-8.832 8.833c-.174.414-.393.855-.847 1.736a52 52 0 0 0-.535 1.06l.158-.077c.24-.119.441-.221.902-.458c.88-.454 1.321-.673 1.736-.847z"></svg:path><svg:path d="M14.39 4.14a1 1 0 1 1-1.415-1.414a3 3 0 1 1 4.243 4.243a1 1 0 1 1-1.415-1.414A1 1 0 0 0 14.39 4.14m-4.953.705a1 1 0 0 1 1.415-1.414l5.656 5.657a1 1 0 0 1-1.414 1.414z"></svg:path></svg:g>`,
})
export class PepiconsPopColorPickerIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopColorPickerCircleIcon],svg[pepicons-pop-color-picker-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M10.536 18.237c-1.56.616-4.257 2.37-4.728 1.9c-.306-.306.323-1.547.972-2.806h4.661z" clip-rule="evenodd"></svg:path><svg:path d="M18.803 8.555a1 1 0 1 1 1.415 1.414l-8.975 8.975a1 1 0 0 1-.34.223c-.396.156-.8.354-1.753.845c-.47.242-.679.348-.933.474c-1.748.861-2.405 1.068-3.116.357c-.71-.71-.504-1.367.351-3.105c.127-.257.234-.468.48-.945c.491-.953.689-1.356.845-1.753A1 1 0 0 1 7 14.701l8.975-8.975a1 1 0 1 1 1.414 1.414l-8.832 8.833c-.174.414-.393.855-.847 1.736a52 52 0 0 0-.535 1.06l.158-.077c.24-.119.441-.221.902-.458c.88-.454 1.321-.673 1.736-.847z"></svg:path><svg:path d="M17.39 7.14a1 1 0 1 1-1.415-1.414a3 3 0 1 1 4.243 4.243a1 1 0 1 1-1.415-1.414A1 1 0 0 0 17.39 7.14m-4.953.705a1 1 0 0 1 1.415-1.414l5.656 5.657a1 1 0 0 1-1.414 1.414z"></svg:path><svg:path fill-rule="evenodd" d="M13 24c6.075 0 11-4.925 11-11S19.075 2 13 2S2 6.925 2 13s4.925 11 11 11m0 2c7.18 0 13-5.82 13-13S20.18 0 13 0S0 5.82 0 13s5.82 13 13 13" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPopColorPickerCircleIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopColorPickerCircleFilledIcon],svg[pepicons-pop-color-picker-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPopColorPickerCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:g fill="#000"><svg:path fill-rule="evenodd" d="M10.536 18.237c-1.56.616-4.257 2.37-4.728 1.9c-.306-.306.323-1.547.972-2.806h4.661z" clip-rule="evenodd"></svg:path><svg:path d="M18.803 8.555a1 1 0 1 1 1.415 1.414l-8.975 8.975a1 1 0 0 1-.34.223c-.396.156-.8.354-1.753.845c-.47.242-.679.348-.933.474c-1.748.861-2.405 1.068-3.116.357c-.71-.71-.504-1.367.351-3.105c.127-.257.234-.468.48-.945c.491-.953.689-1.356.845-1.753A1 1 0 0 1 7 14.701l8.975-8.975a1 1 0 1 1 1.414 1.414l-8.832 8.833c-.174.414-.393.855-.847 1.736a52 52 0 0 0-.535 1.06l.158-.077c.24-.119.441-.221.902-.458c.88-.454 1.321-.673 1.736-.847z"></svg:path><svg:path d="M17.39 7.14a1 1 0 1 1-1.415-1.414a3 3 0 1 1 4.243 4.243a1 1 0 1 1-1.415-1.414A1 1 0 0 0 17.39 7.14m-4.953.705a1 1 0 0 1 1.415-1.414l5.656 5.657a1 1 0 0 1-1.414 1.414z"></svg:path></svg:g></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPopColorPickerCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPopColorPickerCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopColorPickerCircleOffIcon],svg[pepicons-pop-color-picker-circle-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M10.536 18.237c-1.56.616-4.257 2.37-4.728 1.9c-.306-.306.323-1.547.972-2.806h4.661z" clip-rule="evenodd"></svg:path><svg:path d="M18.803 8.555a1 1 0 1 1 1.415 1.414l-8.975 8.975a1 1 0 0 1-.34.223c-.396.156-.8.354-1.753.845c-.47.242-.679.348-.933.474c-1.748.861-2.405 1.068-3.116.357c-.71-.71-.504-1.367.351-3.105c.127-.257.234-.468.48-.945c.491-.953.689-1.356.845-1.753A1 1 0 0 1 7 14.701l8.975-8.975a1 1 0 1 1 1.414 1.414l-8.832 8.833c-.174.414-.393.855-.847 1.736a52 52 0 0 0-.535 1.06l.158-.077c.24-.119.441-.221.902-.458c.88-.454 1.321-.673 1.736-.847z"></svg:path><svg:path d="M17.39 7.14a1 1 0 1 1-1.415-1.414a3 3 0 1 1 4.243 4.243a1 1 0 1 1-1.415-1.414A1 1 0 0 0 17.39 7.14m-4.953.705a1 1 0 0 1 1.415-1.414l5.656 5.657a1 1 0 0 1-1.414 1.414zM4.293 5.707a1 1 0 0 1 1.414-1.414l16 16a1 1 0 0 1-1.414 1.414z"></svg:path><svg:path fill-rule="evenodd" d="M13 24c6.075 0 11-4.925 11-11S19.075 2 13 2S2 6.925 2 13s4.925 11 11 11m0 2c7.18 0 13-5.82 13-13S20.18 0 13 0S0 5.82 0 13s5.82 13 13 13" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPopColorPickerCircleOffIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopColorPickerOffIcon],svg[pepicons-pop-color-picker-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M7.536 15.237c-1.56.616-4.257 2.37-4.728 1.9c-.306-.306.323-1.546.972-2.806h4.66z" clip-rule="evenodd"></svg:path><svg:path d="M15.803 5.555a1 1 0 1 1 1.415 1.414l-8.975 8.975a1 1 0 0 1-.34.222c-.396.157-.8.355-1.753.846c-.47.242-.679.348-.933.474c-1.748.861-2.405 1.068-3.116.357c-.71-.71-.504-1.367.351-3.105c.127-.257.234-.468.48-.945c.491-.953.689-1.356.845-1.753A1 1 0 0 1 4 11.701l8.975-8.975a1 1 0 1 1 1.414 1.414l-8.832 8.833c-.174.414-.393.855-.847 1.736a52 52 0 0 0-.535 1.06l.158-.077c.24-.119.441-.221.902-.458c.88-.454 1.321-.673 1.736-.847z"></svg:path><svg:path d="M14.39 4.14a1 1 0 1 1-1.415-1.414a3 3 0 1 1 4.243 4.243a1 1 0 1 1-1.415-1.414A1 1 0 0 0 14.39 4.14m-4.953.705a1 1 0 0 1 1.415-1.414l5.656 5.657a1 1 0 0 1-1.414 1.414zM1.293 2.707a1 1 0 0 1 1.414-1.414l16 16a1 1 0 0 1-1.414 1.414z"></svg:path></svg:g>`,
})
export class PepiconsPopColorPickerOffIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopCometIcon],svg[pepicons-pop-comet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M6.29 13.093a1 1 0 1 0 1.52-1.3a1 1 0 0 0-1.52 1.3M9 14.723a3 3 0 1 1-3.9-4.56a3 3 0 0 1 3.9 4.56"></svg:path><svg:path d="M10.907 16.949A5.921 5.921 0 1 1 3.23 7.934l7.08-5.836c1.078-.89 2.68.05 2.43 1.425l-.263 1.445l4.558-3.799c1.304-1.086 3.125.487 2.24 1.934l-2.858 4.678l.896-.1c1.458-.162 2.258 1.649 1.156 2.618zm-6.89-1.897a3.92 3.92 0 0 0 5.57.395l6.37-5.603l-.333.037c-1.24.138-2.096-1.209-1.445-2.273l1.812-2.965l-3.292 2.743c-1.077.898-2.687-.041-2.436-1.42l.264-1.456l-6.024 4.967a3.92 3.92 0 0 0-.485 5.575"></svg:path></svg:g>`,
})
export class PepiconsPopCometIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopCometCircleIcon],svg[pepicons-pop-comet-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M9.29 16.093a1 1 0 1 0 1.52-1.3a1 1 0 0 0-1.52 1.3m2.71 1.63a3 3 0 1 1-3.9-4.56a3 3 0 0 1 3.9 4.56"></svg:path><svg:path d="M13.907 19.949a5.921 5.921 0 1 1-7.677-9.015l7.08-5.836c1.078-.89 2.68.05 2.43 1.425l-.263 1.445l4.558-3.799c1.304-1.086 3.125.487 2.24 1.934l-2.858 4.678l.896-.1c1.458-.162 2.258 1.649 1.156 2.618zm-6.89-1.897a3.92 3.92 0 0 0 5.57.395l6.37-5.603l-.333.037c-1.24.138-2.096-1.209-1.445-2.273l1.812-2.965l-3.292 2.743c-1.077.898-2.687-.041-2.436-1.42l.264-1.456l-6.024 4.967a3.92 3.92 0 0 0-.485 5.575"></svg:path><svg:path d="M13 24c6.075 0 11-4.925 11-11S19.075 2 13 2S2 6.925 2 13s4.925 11 11 11m0 2c7.18 0 13-5.82 13-13S20.18 0 13 0S0 5.82 0 13s5.82 13 13 13"></svg:path></svg:g>`,
})
export class PepiconsPopCometCircleIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopCometCircleFilledIcon],svg[pepicons-pop-comet-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPopCometCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:g fill="#000" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M9.29 16.093a1 1 0 1 0 1.52-1.3a1 1 0 0 0-1.52 1.3m2.71 1.63a3 3 0 1 1-3.9-4.56a3 3 0 0 1 3.9 4.56"></svg:path><svg:path d="M13.907 19.949a5.921 5.921 0 1 1-7.677-9.015l7.08-5.836c1.078-.89 2.68.05 2.43 1.425l-.263 1.445l4.558-3.799c1.304-1.086 3.125.487 2.24 1.934l-2.858 4.678l.896-.1c1.458-.162 2.258 1.649 1.156 2.618zm-6.89-1.897a3.92 3.92 0 0 0 5.57.395l6.37-5.603l-.333.037c-1.24.138-2.096-1.209-1.445-2.273l1.812-2.965l-3.292 2.743c-1.077.898-2.687-.041-2.436-1.42l.264-1.456l-6.024 4.967a3.92 3.92 0 0 0-.485 5.575"></svg:path></svg:g></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPopCometCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPopCometCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopCometCircleOffIcon],svg[pepicons-pop-comet-circle-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:g fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M9.29 16.093a1 1 0 1 0 1.52-1.3a1 1 0 0 0-1.52 1.3m2.71 1.63a3 3 0 1 1-3.9-4.56a3 3 0 0 1 3.9 4.56"></svg:path><svg:path d="M13.907 19.949a5.921 5.921 0 1 1-7.677-9.015l7.08-5.836c1.078-.89 2.68.05 2.43 1.425l-.263 1.445l4.558-3.799c1.304-1.086 3.125.487 2.24 1.934l-2.858 4.678l.896-.1c1.458-.162 2.258 1.649 1.156 2.618zm-6.89-1.897a3.92 3.92 0 0 0 5.57.395l6.37-5.603l-.333.037c-1.24.138-2.096-1.209-1.445-2.273l1.812-2.965l-3.292 2.743c-1.077.898-2.687-.041-2.436-1.42l.264-1.456l-6.024 4.967a3.92 3.92 0 0 0-.485 5.575"></svg:path></svg:g><svg:path d="M4.293 5.707a1 1 0 0 1 1.414-1.414l16 16a1 1 0 0 1-1.414 1.414z"></svg:path><svg:path fill-rule="evenodd" d="M13 24c6.075 0 11-4.925 11-11S19.075 2 13 2S2 6.925 2 13s4.925 11 11 11m0 2c7.18 0 13-5.82 13-13S20.18 0 13 0S0 5.82 0 13s5.82 13 13 13" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPopCometCircleOffIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopCometOffIcon],svg[pepicons-pop-comet-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:g fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M6.29 13.093a1 1 0 1 0 1.52-1.3a1 1 0 0 0-1.52 1.3M9 14.723a3 3 0 1 1-3.9-4.56a3 3 0 0 1 3.9 4.56"></svg:path><svg:path d="M10.907 16.949A5.921 5.921 0 1 1 3.23 7.934l7.08-5.836c1.078-.89 2.68.05 2.43 1.425l-.263 1.445l4.558-3.799c1.304-1.086 3.125.487 2.24 1.934l-2.858 4.678l.896-.1c1.458-.162 2.258 1.649 1.156 2.618zm-6.89-1.897a3.92 3.92 0 0 0 5.57.395l6.37-5.603l-.333.037c-1.24.138-2.096-1.209-1.445-2.273l1.812-2.965l-3.292 2.743c-1.077.898-2.687-.041-2.436-1.42l.264-1.456l-6.024 4.967a3.92 3.92 0 0 0-.485 5.575"></svg:path></svg:g><svg:path d="M1.293 2.707a1 1 0 0 1 1.414-1.414l16 16a1 1 0 0 1-1.414 1.414z"></svg:path></svg:g>`,
})
export class PepiconsPopCometOffIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopContractIcon],svg[pepicons-pop-contract-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M11.707 9.707a1 1 0 0 1-1.414-1.414l4-4a1 1 0 1 1 1.414 1.414z"></svg:path><svg:path d="M11 10a1 1 0 1 1 0-2h4a1 1 0 1 1 0 2z"></svg:path><svg:path d="M12 9a1 1 0 1 1-2 0V5a1 1 0 1 1 2 0zm-6.293 6.707a1 1 0 0 1-1.414-1.414l4-4a1 1 0 1 1 1.414 1.414z"></svg:path><svg:path d="M10 15a1 1 0 1 1-2 0v-4a1 1 0 1 1 2 0z"></svg:path><svg:path d="M5 12a1 1 0 1 1 0-2h4a1 1 0 1 1 0 2z"></svg:path></svg:g>`,
})
export class PepiconsPopContractIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopContractCircleIcon],svg[pepicons-pop-contract-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M14.707 12.707a1 1 0 0 1-1.414-1.414l4-4a1 1 0 1 1 1.414 1.414z"></svg:path><svg:path d="M14 13a1 1 0 1 1 0-2h4a1 1 0 1 1 0 2z"></svg:path><svg:path d="M15 12a1 1 0 1 1-2 0V8a1 1 0 1 1 2 0zm-6.293 6.707a1 1 0 0 1-1.414-1.414l4-4a1 1 0 1 1 1.414 1.414z"></svg:path><svg:path d="M13 18a1 1 0 1 1-2 0v-4a1 1 0 1 1 2 0z"></svg:path><svg:path d="M8 15a1 1 0 1 1 0-2h4a1 1 0 1 1 0 2z"></svg:path><svg:path fill-rule="evenodd" d="M13 24c6.075 0 11-4.925 11-11S19.075 2 13 2S2 6.925 2 13s4.925 11 11 11m0 2c7.18 0 13-5.82 13-13S20.18 0 13 0S0 5.82 0 13s5.82 13 13 13" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPopContractCircleIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopContractCircleFilledIcon],svg[pepicons-pop-contract-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPopContractCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:g fill="#000"><svg:path d="M14.707 12.707a1 1 0 0 1-1.414-1.414l4-4a1 1 0 1 1 1.414 1.414z"></svg:path><svg:path d="M14 13a1 1 0 1 1 0-2h4a1 1 0 1 1 0 2z"></svg:path><svg:path d="M15 12a1 1 0 1 1-2 0V8a1 1 0 1 1 2 0zm-6.293 6.707a1 1 0 0 1-1.414-1.414l4-4a1 1 0 1 1 1.414 1.414z"></svg:path><svg:path d="M13 18a1 1 0 1 1-2 0v-4a1 1 0 1 1 2 0z"></svg:path><svg:path d="M8 15a1 1 0 1 1 0-2h4a1 1 0 1 1 0 2z"></svg:path></svg:g></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPopContractCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPopContractCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopContractCircleOffIcon],svg[pepicons-pop-contract-circle-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M14.707 12.707a1 1 0 0 1-1.414-1.414l4-4a1 1 0 1 1 1.414 1.414z"></svg:path><svg:path d="M14 13a1 1 0 1 1 0-2h4a1 1 0 1 1 0 2z"></svg:path><svg:path d="M15 12a1 1 0 1 1-2 0V8a1 1 0 1 1 2 0zm-6.293 6.707a1 1 0 0 1-1.414-1.414l4-4a1 1 0 1 1 1.414 1.414z"></svg:path><svg:path d="M13 18a1 1 0 1 1-2 0v-4a1 1 0 1 1 2 0z"></svg:path><svg:path d="M8 15a1 1 0 1 1 0-2h4a1 1 0 1 1 0 2z"></svg:path><svg:path d="M4.293 5.707a1 1 0 0 1 1.414-1.414l16 16a1 1 0 0 1-1.414 1.414z"></svg:path><svg:path fill-rule="evenodd" d="M13 24c6.075 0 11-4.925 11-11S19.075 2 13 2S2 6.925 2 13s4.925 11 11 11m0 2c7.18 0 13-5.82 13-13S20.18 0 13 0S0 5.82 0 13s5.82 13 13 13" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPopContractCircleOffIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopContractOffIcon],svg[pepicons-pop-contract-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M11.707 9.707a1 1 0 0 1-1.414-1.414l4-4a1 1 0 1 1 1.414 1.414z"></svg:path><svg:path d="M11 10a1 1 0 1 1 0-2h4a1 1 0 1 1 0 2z"></svg:path><svg:path d="M12 9a1 1 0 1 1-2 0V5a1 1 0 1 1 2 0zm-6.293 6.707a1 1 0 0 1-1.414-1.414l4-4a1 1 0 1 1 1.414 1.414z"></svg:path><svg:path d="M10 15a1 1 0 1 1-2 0v-4a1 1 0 1 1 2 0z"></svg:path><svg:path d="M5 12a1 1 0 1 1 0-2h4a1 1 0 1 1 0 2z"></svg:path><svg:path d="M1.293 2.707a1 1 0 0 1 1.414-1.414l16 16a1 1 0 0 1-1.414 1.414z"></svg:path></svg:g>`,
})
export class PepiconsPopContractOffIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopControllerIcon],svg[pepicons-pop-controller-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M12.25 10a1.25 1.25 0 1 1 0-2.5a1.25 1.25 0 0 1 0 2.5m2 2.5a1.25 1.25 0 1 1 0-2.5a1.25 1.25 0 0 1 0 2.5"></svg:path><svg:path fill-rule="evenodd" d="M14.5 4h-9a5 5 0 0 0-5 5v2a5 5 0 0 0 5 5h9a5 5 0 0 0 5-5V9a5 5 0 0 0-5-5m-12 5a3 3 0 0 1 3-3h9a3 3 0 0 1 3 3v2a3 3 0 0 1-3 3h-9a3 3 0 0 1-3-3z" clip-rule="evenodd"></svg:path><svg:path d="M4 11a1 1 0 1 1 0-2h4a1 1 0 0 1 0 2z"></svg:path><svg:path d="M7 12a1 1 0 1 1-2 0V8a1 1 0 0 1 2 0z"></svg:path></svg:g>`,
})
export class PepiconsPopControllerIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopControllerCircleIcon],svg[pepicons-pop-controller-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M15.25 13a1.25 1.25 0 1 1 0-2.5a1.25 1.25 0 0 1 0 2.5m2 2.5a1.25 1.25 0 1 1 0-2.5a1.25 1.25 0 0 1 0 2.5"></svg:path><svg:path fill-rule="evenodd" d="M17.5 7h-9a5 5 0 0 0-5 5v2a5 5 0 0 0 5 5h9a5 5 0 0 0 5-5v-2a5 5 0 0 0-5-5m-12 5a3 3 0 0 1 3-3h9a3 3 0 0 1 3 3v2a3 3 0 0 1-3 3h-9a3 3 0 0 1-3-3z" clip-rule="evenodd"></svg:path><svg:path d="M7 14a1 1 0 1 1 0-2h4a1 1 0 0 1 0 2z"></svg:path><svg:path d="M10 15a1 1 0 1 1-2 0v-4a1 1 0 0 1 2 0z"></svg:path><svg:path fill-rule="evenodd" d="M13 24c6.075 0 11-4.925 11-11S19.075 2 13 2S2 6.925 2 13s4.925 11 11 11m0 2c7.18 0 13-5.82 13-13S20.18 0 13 0S0 5.82 0 13s5.82 13 13 13" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPopControllerCircleIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopControllerCircleFilledIcon],svg[pepicons-pop-controller-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPopControllerCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:g fill="#000"><svg:path d="M15.25 13a1.25 1.25 0 1 1 0-2.5a1.25 1.25 0 0 1 0 2.5m2 2.5a1.25 1.25 0 1 1 0-2.5a1.25 1.25 0 0 1 0 2.5"></svg:path><svg:path fill-rule="evenodd" d="M17.5 7h-9a5 5 0 0 0-5 5v2a5 5 0 0 0 5 5h9a5 5 0 0 0 5-5v-2a5 5 0 0 0-5-5m-12 5a3 3 0 0 1 3-3h9a3 3 0 0 1 3 3v2a3 3 0 0 1-3 3h-9a3 3 0 0 1-3-3z" clip-rule="evenodd"></svg:path><svg:path d="M7 14a1 1 0 1 1 0-2h4a1 1 0 0 1 0 2z"></svg:path><svg:path d="M10 15a1 1 0 1 1-2 0v-4a1 1 0 0 1 2 0z"></svg:path></svg:g></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPopControllerCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPopControllerCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopControllerCircleOffIcon],svg[pepicons-pop-controller-circle-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M15.25 13a1.25 1.25 0 1 1 0-2.5a1.25 1.25 0 0 1 0 2.5m2 2.5a1.25 1.25 0 1 1 0-2.5a1.25 1.25 0 0 1 0 2.5"></svg:path><svg:path fill-rule="evenodd" d="M17.5 7h-9a5 5 0 0 0-5 5v2a5 5 0 0 0 5 5h9a5 5 0 0 0 5-5v-2a5 5 0 0 0-5-5m-12 5a3 3 0 0 1 3-3h9a3 3 0 0 1 3 3v2a3 3 0 0 1-3 3h-9a3 3 0 0 1-3-3z" clip-rule="evenodd"></svg:path><svg:path d="M7 14a1 1 0 1 1 0-2h4a1 1 0 0 1 0 2z"></svg:path><svg:path d="M10 15a1 1 0 1 1-2 0v-4a1 1 0 0 1 2 0z"></svg:path><svg:path d="M4.293 5.707a1 1 0 0 1 1.414-1.414l16 16a1 1 0 0 1-1.414 1.414z"></svg:path><svg:path fill-rule="evenodd" d="M13 24c6.075 0 11-4.925 11-11S19.075 2 13 2S2 6.925 2 13s4.925 11 11 11m0 2c7.18 0 13-5.82 13-13S20.18 0 13 0S0 5.82 0 13s5.82 13 13 13" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPopControllerCircleOffIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopControllerOffIcon],svg[pepicons-pop-controller-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M12.25 10a1.25 1.25 0 1 1 0-2.5a1.25 1.25 0 0 1 0 2.5m2 2.5a1.25 1.25 0 1 1 0-2.5a1.25 1.25 0 0 1 0 2.5"></svg:path><svg:path fill-rule="evenodd" d="M14.5 4h-9a5 5 0 0 0-5 5v2a5 5 0 0 0 5 5h9a5 5 0 0 0 5-5V9a5 5 0 0 0-5-5m-12 5a3 3 0 0 1 3-3h9a3 3 0 0 1 3 3v2a3 3 0 0 1-3 3h-9a3 3 0 0 1-3-3z" clip-rule="evenodd"></svg:path><svg:path d="M4 11a1 1 0 1 1 0-2h4a1 1 0 0 1 0 2z"></svg:path><svg:path d="M7 12a1 1 0 1 1-2 0V8a1 1 0 0 1 2 0z"></svg:path><svg:path d="M1.293 2.707a1 1 0 0 1 1.414-1.414l16 16a1 1 0 0 1-1.414 1.414z"></svg:path></svg:g>`,
})
export class PepiconsPopControllerOffIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopCountdownIcon],svg[pepicons-pop-countdown-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M9.5 3a1 1 0 0 1 1-1a8 8 0 1 1-8 8a1 1 0 0 1 2 0a6 6 0 1 0 6-6a1 1 0 0 1-1-1" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M6.394 11.447a1 1 0 0 0-.447-1.341l-2-1a1 1 0 1 0-.894 1.789l2 1a1 1 0 0 0 1.341-.448" clip-rule="evenodd"></svg:path><svg:path d="M8.5 3.5a1 1 0 1 1-2 0a1 1 0 0 1 2 0M6 5a1 1 0 1 1-2 0a1 1 0 0 1 2 0M4.5 7.5a1 1 0 1 1-2 0a1 1 0 0 1 2 0"></svg:path><svg:path fill-rule="evenodd" d="M4.207 9.293a1 1 0 0 1 0 1.414l-1.5 1.5a1 1 0 0 1-1.414-1.414l1.5-1.5a1 1 0 0 1 1.414 0M10.5 6a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0V7a1 1 0 0 1 1-1" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M14.5 10a1 1 0 0 1-1 1h-3a1 1 0 1 1 0-2h3a1 1 0 0 1 1 1" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPopCountdownIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopCountdownCircleIcon],svg[pepicons-pop-countdown-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M12.5 6a1 1 0 0 1 1-1a8 8 0 1 1-8 8a1 1 0 0 1 2 0a6 6 0 1 0 6-6a1 1 0 0 1-1-1" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M9.394 14.447a1 1 0 0 0-.447-1.341l-2-1a1 1 0 1 0-.894 1.789l2 1a1 1 0 0 0 1.341-.448" clip-rule="evenodd"></svg:path><svg:path d="M11.5 6.5a1 1 0 1 1-2 0a1 1 0 0 1 2 0M9 8a1 1 0 1 1-2 0a1 1 0 0 1 2 0m-1.5 2.5a1 1 0 1 1-2 0a1 1 0 0 1 2 0"></svg:path><svg:path fill-rule="evenodd" d="M7.207 12.293a1 1 0 0 1 0 1.414l-1.5 1.5a1 1 0 0 1-1.414-1.414l1.5-1.5a1 1 0 0 1 1.414 0M13.5 9a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0v-3a1 1 0 0 1 1-1" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M17.5 13a1 1 0 0 1-1 1h-3a1 1 0 1 1 0-2h3a1 1 0 0 1 1 1" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M13 24c6.075 0 11-4.925 11-11S19.075 2 13 2S2 6.925 2 13s4.925 11 11 11m0 2c7.18 0 13-5.82 13-13S20.18 0 13 0S0 5.82 0 13s5.82 13 13 13" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPopCountdownCircleIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopCountdownCircleFilledIcon],svg[pepicons-pop-countdown-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPopCountdownCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:g fill="#000"><svg:path fill-rule="evenodd" d="M12.5 6a1 1 0 0 1 1-1a8 8 0 1 1-8 8a1 1 0 0 1 2 0a6 6 0 1 0 6-6a1 1 0 0 1-1-1" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M9.394 14.447a1 1 0 0 0-.447-1.341l-2-1a1 1 0 1 0-.894 1.789l2 1a1 1 0 0 0 1.341-.448" clip-rule="evenodd"></svg:path><svg:path d="M11.5 6.5a1 1 0 1 1-2 0a1 1 0 0 1 2 0M9 8a1 1 0 1 1-2 0a1 1 0 0 1 2 0m-1.5 2.5a1 1 0 1 1-2 0a1 1 0 0 1 2 0"></svg:path><svg:path fill-rule="evenodd" d="M7.207 12.293a1 1 0 0 1 0 1.414l-1.5 1.5a1 1 0 0 1-1.414-1.414l1.5-1.5a1 1 0 0 1 1.414 0M13.5 9a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0v-3a1 1 0 0 1 1-1" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M17.5 13a1 1 0 0 1-1 1h-3a1 1 0 1 1 0-2h3a1 1 0 0 1 1 1" clip-rule="evenodd"></svg:path></svg:g></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPopCountdownCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPopCountdownCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopCountdownCircleOffIcon],svg[pepicons-pop-countdown-circle-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M12.5 6a1 1 0 0 1 1-1a8 8 0 1 1-8 8a1 1 0 0 1 2 0a6 6 0 1 0 6-6a1 1 0 0 1-1-1" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M9.394 14.447a1 1 0 0 0-.447-1.341l-2-1a1 1 0 1 0-.894 1.789l2 1a1 1 0 0 0 1.341-.448" clip-rule="evenodd"></svg:path><svg:path d="M11.5 6.5a1 1 0 1 1-2 0a1 1 0 0 1 2 0M9 8a1 1 0 1 1-2 0a1 1 0 0 1 2 0m-1.5 2.5a1 1 0 1 1-2 0a1 1 0 0 1 2 0"></svg:path><svg:path fill-rule="evenodd" d="M7.207 12.293a1 1 0 0 1 0 1.414l-1.5 1.5a1 1 0 0 1-1.414-1.414l1.5-1.5a1 1 0 0 1 1.414 0M13.5 9a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0v-3a1 1 0 0 1 1-1" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M17.5 13a1 1 0 0 1-1 1h-3a1 1 0 1 1 0-2h3a1 1 0 0 1 1 1" clip-rule="evenodd"></svg:path><svg:path d="M4.293 5.707a1 1 0 0 1 1.414-1.414l16 16a1 1 0 0 1-1.414 1.414z"></svg:path><svg:path fill-rule="evenodd" d="M13 24c6.075 0 11-4.925 11-11S19.075 2 13 2S2 6.925 2 13s4.925 11 11 11m0 2c7.18 0 13-5.82 13-13S20.18 0 13 0S0 5.82 0 13s5.82 13 13 13" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPopCountdownCircleOffIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopCountdownOffIcon],svg[pepicons-pop-countdown-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M9.5 3a1 1 0 0 1 1-1a8 8 0 1 1-8 8a1 1 0 0 1 2 0a6 6 0 1 0 6-6a1 1 0 0 1-1-1" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M6.394 11.447a1 1 0 0 0-.447-1.341l-2-1a1 1 0 1 0-.894 1.789l2 1a1 1 0 0 0 1.341-.448" clip-rule="evenodd"></svg:path><svg:path d="M8.5 3.5a1 1 0 1 1-2 0a1 1 0 0 1 2 0M6 5a1 1 0 1 1-2 0a1 1 0 0 1 2 0M4.5 7.5a1 1 0 1 1-2 0a1 1 0 0 1 2 0"></svg:path><svg:path fill-rule="evenodd" d="M4.207 9.293a1 1 0 0 1 0 1.414l-1.5 1.5a1 1 0 0 1-1.414-1.414l1.5-1.5a1 1 0 0 1 1.414 0M10.5 6a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0V7a1 1 0 0 1 1-1" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M14.5 10a1 1 0 0 1-1 1h-3a1 1 0 1 1 0-2h3a1 1 0 0 1 1 1" clip-rule="evenodd"></svg:path><svg:path d="M1.293 2.707a1 1 0 0 1 1.414-1.414l16 16a1 1 0 0 1-1.414 1.414z"></svg:path></svg:g>`,
})
export class PepiconsPopCountdownOffIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopCreditCardIcon],svg[pepicons-pop-credit-card-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M16 3.5H4a3 3 0 0 0-3 3v7a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3v-7a3 3 0 0 0-3-3m-13 3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1z" clip-rule="evenodd"></svg:path><svg:path d="M2.5 6.5h15a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-15A.5.5 0 0 1 2 8V7a.5.5 0 0 1 .5-.5"></svg:path><svg:path fill-rule="evenodd" d="M6 9.5H5a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1m-1 2v-1h1v1z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPopCreditCardIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopCreditCardCircleIcon],svg[pepicons-pop-credit-card-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M19 6.5H7a3 3 0 0 0-3 3v7a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3v-7a3 3 0 0 0-3-3m-13 3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1z" clip-rule="evenodd"></svg:path><svg:path d="M5.5 9.5h15a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-15A.5.5 0 0 1 5 11v-1a.5.5 0 0 1 .5-.5"></svg:path><svg:path fill-rule="evenodd" d="M9 12.5H8a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1m-1 2v-1h1v1z" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M13 24c6.075 0 11-4.925 11-11S19.075 2 13 2S2 6.925 2 13s4.925 11 11 11m0 2c7.18 0 13-5.82 13-13S20.18 0 13 0S0 5.82 0 13s5.82 13 13 13" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPopCreditCardCircleIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopCreditCardCircleFilledIcon],svg[pepicons-pop-credit-card-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPopCreditCardCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:g fill="#000"><svg:path fill-rule="evenodd" d="M19 6.5H7a3 3 0 0 0-3 3v7a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3v-7a3 3 0 0 0-3-3m-13 3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1z" clip-rule="evenodd"></svg:path><svg:path d="M5.5 9.5h15a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-15A.5.5 0 0 1 5 11v-1a.5.5 0 0 1 .5-.5"></svg:path><svg:path fill-rule="evenodd" d="M9 12.5H8a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1m-1 2v-1h1v1z" clip-rule="evenodd"></svg:path></svg:g></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPopCreditCardCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPopCreditCardCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopCreditCardCircleOffIcon],svg[pepicons-pop-credit-card-circle-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M19 6.5H7a3 3 0 0 0-3 3v7a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3v-7a3 3 0 0 0-3-3m-13 3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1z" clip-rule="evenodd"></svg:path><svg:path d="M5.5 9.5h15a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-15A.5.5 0 0 1 5 11v-1a.5.5 0 0 1 .5-.5"></svg:path><svg:path fill-rule="evenodd" d="M9 12.5H8a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1m-1 2v-1h1v1z" clip-rule="evenodd"></svg:path><svg:path d="M4.293 5.707a1 1 0 0 1 1.414-1.414l16 16a1 1 0 0 1-1.414 1.414z"></svg:path><svg:path fill-rule="evenodd" d="M13 24c6.075 0 11-4.925 11-11S19.075 2 13 2S2 6.925 2 13s4.925 11 11 11m0 2c7.18 0 13-5.82 13-13S20.18 0 13 0S0 5.82 0 13s5.82 13 13 13" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPopCreditCardCircleOffIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopCreditCardOffIcon],svg[pepicons-pop-credit-card-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M16 3.5H4a3 3 0 0 0-3 3v7a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3v-7a3 3 0 0 0-3-3m-13 3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1z" clip-rule="evenodd"></svg:path><svg:path d="M2.5 6.5h15a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-15A.5.5 0 0 1 2 8V7a.5.5 0 0 1 .5-.5"></svg:path><svg:path fill-rule="evenodd" d="M6 9.5H5a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1m-1 2v-1h1v1z" clip-rule="evenodd"></svg:path><svg:path d="M1.293 2.707a1 1 0 0 1 1.414-1.414l16 16a1 1 0 0 1-1.414 1.414z"></svg:path></svg:g>`,
})
export class PepiconsPopCreditCardOffIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopCrownIcon],svg[pepicons-pop-crown-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="m15.267 9.928l-.367.234a3 3 0 0 1-4.107-.867L10 8.105l-.793 1.19a3 3 0 0 1-4.107.867l-.367-.234L5.542 13h8.916zM3.654 6.87c-.768-.488-1.736.219-1.504 1.099l1.654 6.286A1 1 0 0 0 4.77 15h10.458a1 1 0 0 0 .967-.745l1.654-6.286c.232-.88-.736-1.587-1.504-1.099l-2.52 1.604a1 1 0 0 1-1.369-.289l-1.625-2.437a1 1 0 0 0-1.664 0L7.543 8.185a1 1 0 0 1-1.369.29z" clip-rule="evenodd"></svg:path><svg:path d="M11 3.5a1 1 0 1 1-2 0a1 1 0 0 1 2 0m8 2a1 1 0 1 1-2 0a1 1 0 0 1 2 0m-16 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0"></svg:path><svg:path fill-rule="evenodd" d="M4.5 16.25a1 1 0 0 1 1-1h9.251a1 1 0 1 1 0 2H5.5a1 1 0 0 1-1-1" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPopCrownIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopCrownCircleIcon],svg[pepicons-pop-crown-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="m18.267 12.928l-.367.234a3 3 0 0 1-4.107-.867L13 11.105l-.793 1.19a3 3 0 0 1-4.107.867l-.367-.234L8.542 16h8.916zM6.654 9.87c-.768-.488-1.736.219-1.504 1.099l1.654 6.286A1 1 0 0 0 7.77 18h10.458a1 1 0 0 0 .967-.745l1.654-6.286c.232-.88-.736-1.587-1.504-1.099l-2.52 1.604a1 1 0 0 1-1.369-.289l-1.625-2.437a1 1 0 0 0-1.664 0l-1.625 2.437a1 1 0 0 1-1.369.29z" clip-rule="evenodd"></svg:path><svg:path d="M14 6.5a1 1 0 1 1-2 0a1 1 0 0 1 2 0m8 2a1 1 0 1 1-2 0a1 1 0 0 1 2 0m-16 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0"></svg:path><svg:path fill-rule="evenodd" d="M7.5 19.25a1 1 0 0 1 1-1h9.251a1 1 0 1 1 0 2H8.5a1 1 0 0 1-1-1" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M13 24c6.075 0 11-4.925 11-11S19.075 2 13 2S2 6.925 2 13s4.925 11 11 11m0 2c7.18 0 13-5.82 13-13S20.18 0 13 0S0 5.82 0 13s5.82 13 13 13" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPopCrownCircleIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopCrownCircleFilledIcon],svg[pepicons-pop-crown-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPopCrownCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:g fill="#000"><svg:path fill-rule="evenodd" d="m18.267 12.928l-.367.234a3 3 0 0 1-4.107-.867L13 11.105l-.793 1.19a3 3 0 0 1-4.107.867l-.367-.234L8.542 16h8.916zM6.654 9.87c-.768-.488-1.736.219-1.504 1.099l1.654 6.286A1 1 0 0 0 7.77 18h10.458a1 1 0 0 0 .967-.745l1.654-6.286c.232-.88-.736-1.587-1.504-1.099l-2.52 1.604a1 1 0 0 1-1.369-.289l-1.625-2.437a1 1 0 0 0-1.664 0l-1.625 2.437a1 1 0 0 1-1.369.29z" clip-rule="evenodd"></svg:path><svg:path d="M14 6.5a1 1 0 1 1-2 0a1 1 0 0 1 2 0m8 2a1 1 0 1 1-2 0a1 1 0 0 1 2 0m-16 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0"></svg:path><svg:path fill-rule="evenodd" d="M7.5 19.25a1 1 0 0 1 1-1h9.251a1 1 0 1 1 0 2H8.5a1 1 0 0 1-1-1" clip-rule="evenodd"></svg:path></svg:g></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPopCrownCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPopCrownCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopCrownCircleOffIcon],svg[pepicons-pop-crown-circle-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="m18.267 12.928l-.367.234a3 3 0 0 1-4.107-.867L13 11.105l-.793 1.19a3 3 0 0 1-4.107.867l-.367-.234L8.542 16h8.916zM6.654 9.87c-.768-.488-1.736.219-1.504 1.099l1.654 6.286A1 1 0 0 0 7.77 18h10.458a1 1 0 0 0 .967-.745l1.654-6.286c.232-.88-.736-1.587-1.504-1.099l-2.52 1.604a1 1 0 0 1-1.369-.289l-1.625-2.437a1 1 0 0 0-1.664 0l-1.625 2.437a1 1 0 0 1-1.369.29z" clip-rule="evenodd"></svg:path><svg:path d="M14 6.5a1 1 0 1 1-2 0a1 1 0 0 1 2 0m8 2a1 1 0 1 1-2 0a1 1 0 0 1 2 0m-16 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0"></svg:path><svg:path fill-rule="evenodd" d="M7.5 19.25a1 1 0 0 1 1-1h9.251a1 1 0 1 1 0 2H8.5a1 1 0 0 1-1-1" clip-rule="evenodd"></svg:path><svg:path d="M4.293 5.707a1 1 0 0 1 1.414-1.414l16 16a1 1 0 0 1-1.414 1.414z"></svg:path><svg:path fill-rule="evenodd" d="M13 24c6.075 0 11-4.925 11-11S19.075 2 13 2S2 6.925 2 13s4.925 11 11 11m0 2c7.18 0 13-5.82 13-13S20.18 0 13 0S0 5.82 0 13s5.82 13 13 13" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPopCrownCircleOffIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopCrownOffIcon],svg[pepicons-pop-crown-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="m15.267 9.928l-.367.234a3 3 0 0 1-4.107-.867L10 8.105l-.793 1.19a3 3 0 0 1-4.107.867l-.367-.234L5.542 13h8.916zM3.654 6.87c-.768-.488-1.736.219-1.504 1.099l1.654 6.286A1 1 0 0 0 4.77 15h10.458a1 1 0 0 0 .967-.745l1.654-6.286c.232-.88-.736-1.587-1.504-1.099l-2.52 1.604a1 1 0 0 1-1.369-.289l-1.625-2.437a1 1 0 0 0-1.664 0L7.543 8.185a1 1 0 0 1-1.369.29z" clip-rule="evenodd"></svg:path><svg:path d="M11 3.5a1 1 0 1 1-2 0a1 1 0 0 1 2 0m8 2a1 1 0 1 1-2 0a1 1 0 0 1 2 0m-16 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0"></svg:path><svg:path fill-rule="evenodd" d="M4.5 16.25a1 1 0 0 1 1-1h9.251a1 1 0 1 1 0 2H5.5a1 1 0 0 1-1-1" clip-rule="evenodd"></svg:path><svg:path d="M1.293 2.707a1 1 0 0 1 1.414-1.414l16 16a1 1 0 0 1-1.414 1.414z"></svg:path></svg:g>`,
})
export class PepiconsPopCrownOffIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopCupIcon],svg[pepicons-pop-cup-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M15.5 4h-12a1 1 0 0 0-1 1c0 4.918 3.061 9 7 9s7-4.082 7-9a1 1 0 0 0-1-1m-6 8c-2.455 0-4.596-2.57-4.949-6h9.898c-.353 3.43-2.494 6-4.949 6" clip-rule="evenodd"></svg:path><svg:path d="M4 14.5h11a1 1 0 1 1 0 2H4a1 1 0 1 1 0-2m10.024-3.69l.552-1.923c.257.074.539.113.831.113c1.107 0 1.893-.543 1.893-1s-.786-1-1.893-1V5C17.495 5 19.3 6.248 19.3 8s-1.805 3-3.893 3c-.477 0-.944-.065-1.383-.19"></svg:path></svg:g>`,
})
export class PepiconsPopCupIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopCupCircleIcon],svg[pepicons-pop-cup-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M18.5 7h-12a1 1 0 0 0-1 1c0 4.918 3.061 9 7 9s7-4.082 7-9a1 1 0 0 0-1-1m-6 8c-2.455 0-4.596-2.57-4.949-6h9.898c-.353 3.43-2.494 6-4.949 6" clip-rule="evenodd"></svg:path><svg:path d="M7 17.5h11a1 1 0 1 1 0 2H7a1 1 0 1 1 0-2m10.024-3.69l.552-1.923c.257.074.539.113.831.113c1.107 0 1.893-.543 1.893-1s-.786-1-1.893-1V8c2.088 0 3.893 1.248 3.893 3s-1.805 3-3.893 3c-.477 0-.945-.065-1.383-.19"></svg:path><svg:path fill-rule="evenodd" d="M13 24c6.075 0 11-4.925 11-11S19.075 2 13 2S2 6.925 2 13s4.925 11 11 11m0 2c7.18 0 13-5.82 13-13S20.18 0 13 0S0 5.82 0 13s5.82 13 13 13" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPopCupCircleIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopCupCircleFilledIcon],svg[pepicons-pop-cup-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPopCupCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:g fill="#000"><svg:path fill-rule="evenodd" d="M18.5 7h-12a1 1 0 0 0-1 1c0 4.918 3.061 9 7 9s7-4.082 7-9a1 1 0 0 0-1-1m-6 8c-2.455 0-4.596-2.57-4.949-6h9.898c-.353 3.43-2.494 6-4.949 6" clip-rule="evenodd"></svg:path><svg:path d="M7 17.5h11a1 1 0 1 1 0 2H7a1 1 0 1 1 0-2m10.024-3.69l.552-1.923c.257.074.539.113.831.113c1.107 0 1.893-.543 1.893-1s-.786-1-1.893-1V8c2.088 0 3.893 1.248 3.893 3s-1.805 3-3.893 3c-.477 0-.945-.065-1.383-.19"></svg:path></svg:g></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPopCupCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPopCupCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopCupCircleOffIcon],svg[pepicons-pop-cup-circle-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M18.5 7h-12a1 1 0 0 0-1 1c0 4.918 3.061 9 7 9s7-4.082 7-9a1 1 0 0 0-1-1m-6 8c-2.455 0-4.596-2.57-4.949-6h9.898c-.353 3.43-2.494 6-4.949 6" clip-rule="evenodd"></svg:path><svg:path d="M7 17.5h11a1 1 0 1 1 0 2H7a1 1 0 1 1 0-2m10.024-3.69l.552-1.923c.257.074.539.113.831.113c1.107 0 1.893-.543 1.893-1s-.786-1-1.893-1V8c2.088 0 3.893 1.248 3.893 3s-1.805 3-3.893 3c-.477 0-.945-.065-1.383-.19"></svg:path><svg:path d="M4.293 5.707a1 1 0 0 1 1.414-1.414l16 16a1 1 0 0 1-1.414 1.414z"></svg:path><svg:path fill-rule="evenodd" d="M13 24c6.075 0 11-4.925 11-11S19.075 2 13 2S2 6.925 2 13s4.925 11 11 11m0 2c7.18 0 13-5.82 13-13S20.18 0 13 0S0 5.82 0 13s5.82 13 13 13" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPopCupCircleOffIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopCupOffIcon],svg[pepicons-pop-cup-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M15.5 4h-12a1 1 0 0 0-1 1c0 4.918 3.061 9 7 9s7-4.082 7-9a1 1 0 0 0-1-1m-6 8c-2.455 0-4.596-2.57-4.949-6h9.898c-.353 3.43-2.494 6-4.949 6" clip-rule="evenodd"></svg:path><svg:path d="M4 14.5h11a1 1 0 1 1 0 2H4a1 1 0 1 1 0-2m10.024-3.69l.552-1.923c.257.074.539.113.831.113c1.107 0 1.893-.543 1.893-1s-.786-1-1.893-1V5C17.495 5 19.3 6.248 19.3 8s-1.805 3-3.893 3c-.477 0-.944-.065-1.383-.19"></svg:path><svg:path d="M1.293 2.707a1 1 0 0 1 1.414-1.414l16 16a1 1 0 0 1-1.414 1.414z"></svg:path></svg:g>`,
})
export class PepiconsPopCupOffIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopCvIcon],svg[pepicons-pop-cv-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M7.8 6.35c.56 0 1.01-.45 1.01-1.01S8.36 4.33 7.8 4.33s-1.01.45-1.01 1.01s.45 1.01 1.01 1.01"></svg:path><svg:path fill-rule="evenodd" d="M9.83 8.55c0-1.08-.91-1.86-2.03-1.86s-2.03.78-2.03 1.86v.51c0 .09.04.18.1.24s.15.1.24.1h3.38c.09 0 .18-.04.24-.1s.1-.15.1-.24zM5.75 11.5a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 0 1.5h-7a.75.75 0 0 1-.75-.75m0 3a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 0 1.5h-7a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M2.5 2.5c0-1.102.898-2 2-2h6.69c.562 0 1.092.238 1.465.631l.006.007l4.312 4.702c.359.383.527.884.527 1.36v10.3c0 1.102-.898 2-2 2h-11c-1.102 0-2-.898-2-2zm8.689 0H4.5v15h11V7.192l-4.296-4.685l-.003-.001z" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M11.19.5a1 1 0 0 1 1 1v4.7h4.31a1 1 0 1 1 0 2h-5.31a1 1 0 0 1-1-1V1.5a1 1 0 0 1 1-1" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPopCvIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopCvCircleIcon],svg[pepicons-pop-cv-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M10.8 9.35c.56 0 1.01-.45 1.01-1.01s-.45-1.01-1.01-1.01s-1.01.45-1.01 1.01s.45 1.01 1.01 1.01"></svg:path><svg:path fill-rule="evenodd" d="M12.83 11.55c0-1.08-.91-1.86-2.03-1.86s-2.03.78-2.03 1.86v.51c0 .09.04.18.1.24s.15.1.24.1h3.38c.09 0 .18-.04.24-.1s.1-.15.1-.24zM8.75 14.5a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 0 1.5h-7a.75.75 0 0 1-.75-.75m0 3a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 0 1.5h-7a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M5.5 5.5c0-1.102.898-2 2-2h6.69c.562 0 1.092.238 1.465.631l.006.007l4.312 4.702c.359.383.527.884.527 1.36v10.3c0 1.102-.898 2-2 2h-11c-1.102 0-2-.898-2-2zm8.689 0H7.5v15h11V10.192l-4.296-4.685l-.003-.001z" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M14.19 3.5a1 1 0 0 1 1 1v4.7h4.31a1 1 0 1 1 0 2h-5.31a1 1 0 0 1-1-1V4.5a1 1 0 0 1 1-1" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M13 24c6.075 0 11-4.925 11-11S19.075 2 13 2S2 6.925 2 13s4.925 11 11 11m0 2c7.18 0 13-5.82 13-13S20.18 0 13 0S0 5.82 0 13s5.82 13 13 13" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPopCvCircleIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopCvCircleFilledIcon],svg[pepicons-pop-cv-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPopCvCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:g fill="#000"><svg:path d="M10.8 9.35c.56 0 1.01-.45 1.01-1.01s-.45-1.01-1.01-1.01s-1.01.45-1.01 1.01s.45 1.01 1.01 1.01"></svg:path><svg:path fill-rule="evenodd" d="M12.83 11.55c0-1.08-.91-1.86-2.03-1.86s-2.03.78-2.03 1.86v.51c0 .09.04.18.1.24s.15.1.24.1h3.38c.09 0 .18-.04.24-.1s.1-.15.1-.24zM8.75 14.5a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 0 1.5h-7a.75.75 0 0 1-.75-.75m0 3a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 0 1.5h-7a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M5.5 5.5c0-1.102.898-2 2-2h6.69c.562 0 1.092.238 1.465.631l.006.007l4.312 4.702c.359.383.527.884.527 1.36v10.3c0 1.102-.898 2-2 2h-11c-1.102 0-2-.898-2-2zm8.689 0H7.5v15h11V10.192l-4.296-4.685l-.003-.001z" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M14.19 3.5a1 1 0 0 1 1 1v4.7h4.31a1 1 0 1 1 0 2h-5.31a1 1 0 0 1-1-1V4.5a1 1 0 0 1 1-1" clip-rule="evenodd"></svg:path></svg:g></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPopCvCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPopCvCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopCvCircleOffIcon],svg[pepicons-pop-cv-circle-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M10.8 9.35c.56 0 1.01-.45 1.01-1.01s-.45-1.01-1.01-1.01s-1.01.45-1.01 1.01s.45 1.01 1.01 1.01"></svg:path><svg:path fill-rule="evenodd" d="M12.83 11.55c0-1.08-.91-1.86-2.03-1.86s-2.03.78-2.03 1.86v.51c0 .09.04.18.1.24s.15.1.24.1h3.38c.09 0 .18-.04.24-.1s.1-.15.1-.24zM8.75 14.5a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 0 1.5h-7a.75.75 0 0 1-.75-.75m0 3a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 0 1.5h-7a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M5.5 5.5c0-1.102.898-2 2-2h6.69c.562 0 1.092.238 1.465.631l.006.007l4.312 4.702c.359.383.527.884.527 1.36v10.3c0 1.102-.898 2-2 2h-11c-1.102 0-2-.898-2-2zm8.689 0H7.5v15h11V10.192l-4.296-4.685l-.003-.001z" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M14.19 3.5a1 1 0 0 1 1 1v4.7h4.31a1 1 0 1 1 0 2h-5.31a1 1 0 0 1-1-1V4.5a1 1 0 0 1 1-1" clip-rule="evenodd"></svg:path><svg:path d="M4.293 5.707a1 1 0 0 1 1.414-1.414l16 16a1 1 0 0 1-1.414 1.414z"></svg:path><svg:path fill-rule="evenodd" d="M13 24c6.075 0 11-4.925 11-11S19.075 2 13 2S2 6.925 2 13s4.925 11 11 11m0 2c7.18 0 13-5.82 13-13S20.18 0 13 0S0 5.82 0 13s5.82 13 13 13" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPopCvCircleOffIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopCvOffIcon],svg[pepicons-pop-cv-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M7.8 6.35c.56 0 1.01-.45 1.01-1.01S8.36 4.33 7.8 4.33s-1.01.45-1.01 1.01s.45 1.01 1.01 1.01"></svg:path><svg:path fill-rule="evenodd" d="M9.83 8.55c0-1.08-.91-1.86-2.03-1.86s-2.03.78-2.03 1.86v.51c0 .09.04.18.1.24s.15.1.24.1h3.38c.09 0 .18-.04.24-.1s.1-.15.1-.24zM5.75 11.5a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 0 1.5h-7a.75.75 0 0 1-.75-.75m0 3a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 0 1.5h-7a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M2.5 2.5c0-1.102.898-2 2-2h6.69c.562 0 1.092.238 1.465.631l.006.007l4.312 4.702c.359.383.527.884.527 1.36v10.3c0 1.102-.898 2-2 2h-11c-1.102 0-2-.898-2-2zm8.689 0H4.5v15h11V7.192l-4.296-4.685l-.003-.001z" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M11.19.5a1 1 0 0 1 1 1v4.7h4.31a1 1 0 1 1 0 2h-5.31a1 1 0 0 1-1-1V1.5a1 1 0 0 1 1-1" clip-rule="evenodd"></svg:path><svg:path d="M1.293 2.707a1 1 0 0 1 1.414-1.414l16 16a1 1 0 0 1-1.414 1.414z"></svg:path></svg:g>`,
})
export class PepiconsPopCvOffIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopDatabaseIcon],svg[pepicons-pop-database-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M4.204 3.98c.24.139.609.293 1.118.437c1.156.327 2.81.542 4.678.542s3.522-.215 4.678-.542c.51-.144.879-.298 1.118-.437c-.24-.14-.609-.294-1.118-.438C13.522 3.215 11.868 3 10 3s-3.522.215-4.678.542c-.51.144-.879.298-1.118.438M16 6.085q-.372.142-.778.256c-1.378.39-3.224.618-5.222.618s-3.844-.228-5.222-.618A9 9 0 0 1 4 6.085V16H2V3.98c0-.786.554-1.308.994-1.602c.477-.32 1.102-.568 1.784-.76C6.156 1.228 8.002 1 10 1s3.844.228 5.222.618c.682.192 1.307.44 1.784.76c.44.294.994.816.994 1.602V16h-2zm.041-2.284l.008-.01zm-12.082 0l-.008-.01z"></svg:path><svg:path d="M3.99 15.858A1 1 0 0 0 2 16c0 .784.548 1.308.99 1.607c.478.323 1.103.574 1.786.769C6.154 18.77 8 19 10 19s3.846-.23 5.225-.624c.682-.195 1.307-.446 1.785-.769c.442-.299.99-.823.99-1.607a1 1 0 0 0-1.99-.142a1 1 0 0 1-.12.092c-.23.156-.63.336-1.215.503c-1.155.33-2.808.547-4.675.547s-3.52-.217-4.675-.547c-.584-.167-.984-.347-1.215-.503a1 1 0 0 1-.12-.092m12.055-.038l-.006.01zm-12.084.01l-.006-.01zm.029-5.972A1 1 0 0 0 2 10c0 .784.548 1.308.99 1.607c.478.323 1.103.574 1.786.769C6.154 12.77 8 13 10 13s3.846-.23 5.225-.624c.682-.195 1.307-.446 1.785-.769c.442-.299.99-.823.99-1.607a1 1 0 0 0-1.99-.142a1 1 0 0 1-.12.092c-.23.156-.63.336-1.215.503c-1.155.33-2.808.547-4.675.547s-3.52-.217-4.675-.547c-.584-.167-.984-.347-1.215-.503a1 1 0 0 1-.12-.092m12.055-.038l-.006.01zm-12.084.01l-.006-.01z"></svg:path></svg:g>`,
})
export class PepiconsPopDatabaseIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopDatabaseCircleIcon],svg[pepicons-pop-database-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M7.204 6.98c.24.139.609.293 1.118.437c1.156.327 2.81.542 4.678.542s3.522-.215 4.678-.542c.51-.144.879-.298 1.118-.437c-.24-.14-.609-.294-1.118-.438C16.522 6.215 14.868 6 13 6s-3.522.215-4.678.542c-.509.144-.879.298-1.118.438M19 9.085q-.372.142-.778.256c-1.378.39-3.224.618-5.222.618s-3.844-.228-5.222-.618A9 9 0 0 1 7 9.085V19H5V6.98c0-.786.554-1.308.994-1.602c.477-.32 1.102-.568 1.784-.76C9.156 4.228 11.002 4 13 4s3.844.228 5.222.618c.682.192 1.306.44 1.784.76c.44.294.994.816.994 1.602V19h-2zm.041-2.284l.008-.01zm-12.082 0l-.008-.01z"></svg:path><svg:path d="M6.99 18.858A1 1 0 0 0 5 19c0 .784.548 1.308.99 1.607c.478.323 1.103.574 1.786.769C9.154 21.77 11 22 13 22s3.846-.23 5.224-.624c.683-.195 1.308-.446 1.786-.769c.442-.299.99-.823.99-1.607a1 1 0 0 0-1.99-.142a1 1 0 0 1-.12.092c-.23.156-.63.336-1.215.503c-1.155.33-2.808.547-4.675.547s-3.52-.217-4.675-.547c-.584-.167-.984-.347-1.215-.503a1 1 0 0 1-.12-.092m12.055-.038l-.006.01zm-12.084.01l-.006-.01zm.029-5.972A1 1 0 0 0 5 13c0 .784.548 1.308.99 1.607c.478.323 1.103.574 1.786.769C9.154 15.77 11 16 13 16s3.846-.23 5.224-.624c.683-.195 1.308-.446 1.786-.769c.442-.299.99-.823.99-1.607a1 1 0 0 0-1.99-.142a1 1 0 0 1-.12.092c-.23.156-.63.336-1.215.503c-1.155.33-2.808.547-4.675.547s-3.52-.217-4.675-.547c-.584-.167-.984-.347-1.215-.503a1 1 0 0 1-.12-.092m12.055-.038l-.006.01zm-12.084.01l-.006-.01z"></svg:path><svg:path d="M13 24c6.075 0 11-4.925 11-11S19.075 2 13 2S2 6.925 2 13s4.925 11 11 11m0 2c7.18 0 13-5.82 13-13S20.18 0 13 0S0 5.82 0 13s5.82 13 13 13"></svg:path></svg:g>`,
})
export class PepiconsPopDatabaseCircleIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopDatabaseCircleFilledIcon],svg[pepicons-pop-database-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPopDatabaseCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:g fill="#000" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M7.204 6.98c.24.139.609.293 1.118.437c1.156.327 2.81.542 4.678.542s3.522-.215 4.678-.542c.51-.144.879-.298 1.118-.437c-.24-.14-.609-.294-1.118-.438C16.522 6.215 14.868 6 13 6s-3.522.215-4.678.542c-.509.144-.879.298-1.118.438M19 9.085q-.372.142-.778.256c-1.378.39-3.224.618-5.222.618s-3.844-.228-5.222-.618A9 9 0 0 1 7 9.085V19H5V6.98c0-.786.554-1.308.994-1.602c.477-.32 1.102-.568 1.784-.76C9.156 4.228 11.002 4 13 4s3.844.228 5.222.618c.682.192 1.306.44 1.784.76c.44.294.994.816.994 1.602V19h-2zm.041-2.284l.008-.01zm-12.082 0l-.008-.01z"></svg:path><svg:path d="M6.99 18.858A1 1 0 0 0 5 19c0 .784.548 1.308.99 1.607c.478.323 1.103.574 1.786.769C9.154 21.77 11 22 13 22s3.846-.23 5.224-.624c.683-.195 1.308-.446 1.786-.769c.442-.299.99-.823.99-1.607a1 1 0 0 0-1.99-.142a1 1 0 0 1-.12.092c-.23.156-.63.336-1.215.503c-1.155.33-2.808.547-4.675.547s-3.52-.217-4.675-.547c-.584-.167-.984-.347-1.215-.503a1 1 0 0 1-.12-.092m12.055-.038l-.006.01zm-12.084.01l-.006-.01zm.029-5.972A1 1 0 0 0 5 13c0 .784.548 1.308.99 1.607c.478.323 1.103.574 1.786.769C9.154 15.77 11 16 13 16s3.846-.23 5.224-.624c.683-.195 1.308-.446 1.786-.769c.442-.299.99-.823.99-1.607a1 1 0 0 0-1.99-.142a1 1 0 0 1-.12.092c-.23.156-.63.336-1.215.503c-1.155.33-2.808.547-4.675.547s-3.52-.217-4.675-.547c-.584-.167-.984-.347-1.215-.503a1 1 0 0 1-.12-.092m12.055-.038l-.006.01zm-12.084.01l-.006-.01z"></svg:path></svg:g></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPopDatabaseCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPopDatabaseCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopDatabaseCircleOffIcon],svg[pepicons-pop-database-circle-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M7.204 6.98c.24.139.609.293 1.118.437c1.156.327 2.81.542 4.678.542s3.522-.215 4.678-.542c.51-.144.879-.298 1.118-.437c-.24-.14-.609-.294-1.118-.438C16.522 6.215 14.868 6 13 6s-3.522.215-4.678.542c-.509.144-.879.298-1.118.438M19 9.085q-.372.142-.778.256c-1.378.39-3.224.618-5.222.618s-3.844-.228-5.222-.618A9 9 0 0 1 7 9.085V19H5V6.98c0-.786.554-1.308.994-1.602c.477-.32 1.102-.568 1.784-.76C9.156 4.228 11.002 4 13 4s3.844.228 5.222.618c.682.192 1.306.44 1.784.76c.44.294.994.816.994 1.602V19h-2zm.041-2.284l.008-.01zm-12.082 0l-.008-.01z" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M6.99 18.858A1 1 0 0 0 5 19c0 .784.548 1.308.99 1.607c.478.323 1.103.574 1.786.769C9.154 21.77 11 22 13 22s3.846-.23 5.224-.624c.683-.195 1.308-.446 1.786-.769c.442-.299.99-.823.99-1.607a1 1 0 0 0-1.99-.142a1 1 0 0 1-.12.092c-.23.156-.63.336-1.215.503c-1.155.33-2.808.547-4.675.547s-3.52-.217-4.675-.547c-.584-.167-.984-.347-1.215-.503a1 1 0 0 1-.12-.092m12.055-.038l-.006.01zm-12.084.01l-.006-.01zm.029-5.972A1 1 0 0 0 5 13c0 .784.548 1.308.99 1.607c.478.323 1.103.574 1.786.769C9.154 15.77 11 16 13 16s3.846-.23 5.224-.624c.683-.195 1.308-.446 1.786-.769c.442-.299.99-.823.99-1.607a1 1 0 0 0-1.99-.142a1 1 0 0 1-.12.092c-.23.156-.63.336-1.215.503c-1.155.33-2.808.547-4.675.547s-3.52-.217-4.675-.547c-.584-.167-.984-.347-1.215-.503a1 1 0 0 1-.12-.092m12.055-.038l-.006.01zm-12.084.01l-.006-.01z" clip-rule="evenodd"></svg:path><svg:path d="M4.293 5.707a1 1 0 0 1 1.414-1.414l16 16a1 1 0 0 1-1.414 1.414z"></svg:path><svg:path fill-rule="evenodd" d="M13 24c6.075 0 11-4.925 11-11S19.075 2 13 2S2 6.925 2 13s4.925 11 11 11m0 2c7.18 0 13-5.82 13-13S20.18 0 13 0S0 5.82 0 13s5.82 13 13 13" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPopDatabaseCircleOffIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopDatabaseOffIcon],svg[pepicons-pop-database-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M4.204 3.98c.24.139.609.293 1.118.437c1.156.327 2.81.542 4.678.542s3.522-.215 4.678-.542c.51-.144.879-.298 1.118-.437c-.24-.14-.609-.294-1.118-.438C13.522 3.215 11.868 3 10 3s-3.522.215-4.678.542c-.51.144-.879.298-1.118.438M16 6.085q-.372.142-.778.256c-1.378.39-3.224.618-5.222.618s-3.844-.228-5.222-.618A9 9 0 0 1 4 6.085V16H2V3.98c0-.786.554-1.308.994-1.602c.477-.32 1.102-.568 1.784-.76C6.156 1.228 8.002 1 10 1s3.844.228 5.222.618c.682.192 1.307.44 1.784.76c.44.294.994.816.994 1.602V16h-2zm.041-2.284l.008-.01zm-12.082 0l-.008-.01z" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M3.99 15.858A1 1 0 0 0 2 16c0 .784.548 1.308.99 1.607c.478.323 1.103.574 1.786.769C6.154 18.77 8 19 10 19s3.846-.23 5.225-.624c.682-.195 1.307-.446 1.785-.769c.442-.299.99-.823.99-1.607a1 1 0 0 0-1.99-.142a1 1 0 0 1-.12.092c-.23.156-.63.336-1.215.503c-1.155.33-2.808.547-4.675.547s-3.52-.217-4.675-.547c-.584-.167-.984-.347-1.215-.503a1 1 0 0 1-.12-.092m12.055-.038l-.006.01zm-12.084.01l-.006-.01zm.029-5.972A1 1 0 0 0 2 10c0 .784.548 1.308.99 1.607c.478.323 1.103.574 1.786.769C6.154 12.77 8 13 10 13s3.846-.23 5.225-.624c.682-.195 1.307-.446 1.785-.769c.442-.299.99-.823.99-1.607a1 1 0 0 0-1.99-.142a1 1 0 0 1-.12.092c-.23.156-.63.336-1.215.503c-1.155.33-2.808.547-4.675.547s-3.52-.217-4.675-.547c-.584-.167-.984-.347-1.215-.503a1 1 0 0 1-.12-.092m12.055-.038l-.006.01zm-12.084.01l-.006-.01z" clip-rule="evenodd"></svg:path><svg:path d="M1.293 2.707a1 1 0 0 1 1.414-1.414l16 16a1 1 0 0 1-1.414 1.414z"></svg:path></svg:g>`,
})
export class PepiconsPopDatabaseOffIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopDivisionIcon],svg[pepicons-pop-division-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M5 11a1 1 0 1 1 0-2h10a1 1 0 1 1 0 2z"></svg:path><svg:circle cx="10" cy="5.5" r="1.5"></svg:circle><svg:circle cx="10" cy="14.5" r="1.5"></svg:circle></svg:g>`,
})
export class PepiconsPopDivisionIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopDivisionCircleIcon],svg[pepicons-pop-division-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:g transform="translate(3 3)"><svg:path d="M5 11a1 1 0 1 1 0-2h10a1 1 0 1 1 0 2z"></svg:path><svg:circle cx="10" cy="5.5" r="1.5"></svg:circle><svg:circle cx="10" cy="14.5" r="1.5"></svg:circle></svg:g><svg:path fill-rule="evenodd" d="M13 24c6.075 0 11-4.925 11-11S19.075 2 13 2S2 6.925 2 13s4.925 11 11 11m0 2c7.18 0 13-5.82 13-13S20.18 0 13 0S0 5.82 0 13s5.82 13 13 13" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPopDivisionCircleIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopDivisionCircleFilledIcon],svg[pepicons-pop-division-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPopDivisionCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:g fill="#000" transform="translate(3 3)"><svg:path d="M5 11a1 1 0 1 1 0-2h10a1 1 0 1 1 0 2z"></svg:path><svg:circle cx="10" cy="5.5" r="1.5"></svg:circle><svg:circle cx="10" cy="14.5" r="1.5"></svg:circle></svg:g></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPopDivisionCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPopDivisionCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopDivisionCircleOffIcon],svg[pepicons-pop-division-circle-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:g transform="translate(3 3)"><svg:path d="M5 11a1 1 0 1 1 0-2h10a1 1 0 1 1 0 2z"></svg:path><svg:circle cx="10" cy="5.5" r="1.5"></svg:circle><svg:circle cx="10" cy="14.5" r="1.5"></svg:circle><svg:path d="M1.293 2.707a1 1 0 0 1 1.414-1.414l16 16a1 1 0 0 1-1.414 1.414z"></svg:path></svg:g><svg:path fill-rule="evenodd" d="M13 24c6.075 0 11-4.925 11-11S19.075 2 13 2S2 6.925 2 13s4.925 11 11 11m0 2c7.18 0 13-5.82 13-13S20.18 0 13 0S0 5.82 0 13s5.82 13 13 13" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPopDivisionCircleOffIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopDivisionOffIcon],svg[pepicons-pop-division-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M5 11a1 1 0 1 1 0-2h10a1 1 0 1 1 0 2z"></svg:path><svg:circle cx="10" cy="5.5" r="1.5"></svg:circle><svg:circle cx="10" cy="14.5" r="1.5"></svg:circle><svg:path d="M1.293 2.707a1 1 0 0 1 1.414-1.414l16 16a1 1 0 0 1-1.414 1.414z"></svg:path></svg:g>`,
})
export class PepiconsPopDivisionOffIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopDollarIcon],svg[pepicons-pop-dollar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M7.897 5.7c-.551.413-.8.908-.8 1.37s.249.958.8 1.372c.552.414 1.36.7 2.295.7a1 1 0 1 1 0 2c-1.326 0-2.565-.402-3.495-1.1s-1.6-1.738-1.6-2.971s.67-2.274 1.6-2.972C7.627 3.402 8.867 3 10.192 3c2.053 0 3.994.983 4.766 2.62a1 1 0 0 1-1.81.853C12.798 5.726 11.706 5 10.193 5c-.935 0-1.743.286-2.295.7"></svg:path><svg:path d="M12.157 14.583c.551-.413.799-.908.799-1.37s-.248-.959-.8-1.372c-.551-.414-1.36-.7-2.294-.7a1 1 0 1 1 0-2c1.326 0 2.565.402 3.495 1.1s1.599 1.738 1.599 2.971s-.669 2.274-1.6 2.971c-.93.698-2.168 1.1-3.494 1.1c-2.053 0-3.995-.983-4.766-2.621a1 1 0 0 1 1.809-.853c.352.748 1.444 1.474 2.957 1.474c.935 0 1.743-.286 2.295-.7M10 1a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0V2a1 1 0 0 1 1-1"></svg:path><svg:path d="M10 16a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0v-1a1 1 0 0 1 1-1"></svg:path></svg:g>`,
})
export class PepiconsPopDollarIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopDollarCircleIcon],svg[pepicons-pop-dollar-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M10.897 8.7c-.551.413-.8.908-.8 1.37s.249.958.8 1.372c.552.414 1.36.7 2.295.7a1 1 0 1 1 0 2c-1.326 0-2.565-.402-3.495-1.1s-1.6-1.738-1.6-2.971s.67-2.274 1.6-2.972C10.627 6.402 11.867 6 13.192 6c2.053 0 3.994.983 4.766 2.62a1 1 0 0 1-1.81.853C15.798 8.726 14.706 8 13.193 8c-.935 0-1.743.286-2.295.7"></svg:path><svg:path d="M15.157 17.583c.551-.413.799-.908.799-1.37c0-.464-.248-.959-.8-1.372c-.551-.414-1.36-.7-2.294-.7a1 1 0 1 1 0-2c1.326 0 2.565.402 3.495 1.1s1.599 1.738 1.599 2.971s-.669 2.274-1.6 2.971c-.93.698-2.168 1.1-3.494 1.1c-2.053 0-3.995-.983-4.766-2.621a1 1 0 0 1 1.809-.853c.352.748 1.444 1.474 2.957 1.474c.935 0 1.743-.286 2.295-.7M13 4a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0V5a1 1 0 0 1 1-1"></svg:path><svg:path d="M13 19a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0v-1a1 1 0 0 1 1-1"></svg:path><svg:path d="M13 24c6.075 0 11-4.925 11-11S19.075 2 13 2S2 6.925 2 13s4.925 11 11 11m0 2c7.18 0 13-5.82 13-13S20.18 0 13 0S0 5.82 0 13s5.82 13 13 13"></svg:path></svg:g>`,
})
export class PepiconsPopDollarCircleIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopDollarCircleFilledIcon],svg[pepicons-pop-dollar-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPopDollarCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:g fill="#000" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M10.897 8.7c-.551.413-.8.908-.8 1.37s.249.958.8 1.372c.552.414 1.36.7 2.295.7a1 1 0 1 1 0 2c-1.326 0-2.565-.402-3.495-1.1s-1.6-1.738-1.6-2.971s.67-2.274 1.6-2.972C10.627 6.402 11.867 6 13.192 6c2.053 0 3.994.983 4.766 2.62a1 1 0 0 1-1.81.853C15.798 8.726 14.706 8 13.193 8c-.935 0-1.743.286-2.295.7"></svg:path><svg:path d="M15.157 17.583c.551-.413.799-.908.799-1.37c0-.464-.248-.959-.8-1.372c-.551-.414-1.36-.7-2.294-.7a1 1 0 1 1 0-2c1.326 0 2.565.402 3.495 1.1s1.599 1.738 1.599 2.971s-.669 2.274-1.6 2.971c-.93.698-2.168 1.1-3.494 1.1c-2.053 0-3.995-.983-4.766-2.621a1 1 0 0 1 1.809-.853c.352.748 1.444 1.474 2.957 1.474c.935 0 1.743-.286 2.295-.7M13 4a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0V5a1 1 0 0 1 1-1"></svg:path><svg:path d="M13 19a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0v-1a1 1 0 0 1 1-1"></svg:path></svg:g></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPopDollarCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPopDollarCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopDollarCircleOffIcon],svg[pepicons-pop-dollar-circle-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M10.897 8.7c-.551.413-.8.908-.8 1.37s.249.958.8 1.372c.552.414 1.36.7 2.295.7a1 1 0 1 1 0 2c-1.326 0-2.565-.402-3.495-1.1s-1.6-1.738-1.6-2.971s.67-2.274 1.6-2.972C10.627 6.402 11.867 6 13.192 6c2.053 0 3.994.983 4.766 2.62a1 1 0 0 1-1.81.853C15.798 8.726 14.706 8 13.193 8c-.935 0-1.743.286-2.295.7" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M15.157 17.583c.551-.413.799-.908.799-1.37c0-.464-.248-.959-.8-1.372c-.551-.414-1.36-.7-2.294-.7a1 1 0 1 1 0-2c1.326 0 2.565.402 3.495 1.1s1.599 1.738 1.599 2.971s-.669 2.274-1.6 2.971c-.93.698-2.168 1.1-3.494 1.1c-2.053 0-3.995-.983-4.766-2.621a1 1 0 0 1 1.809-.853c.352.748 1.444 1.474 2.957 1.474c.935 0 1.743-.286 2.295-.7M13 4a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0V5a1 1 0 0 1 1-1" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M13 19a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0v-1a1 1 0 0 1 1-1" clip-rule="evenodd"></svg:path><svg:path d="M4.293 5.707a1 1 0 0 1 1.414-1.414l16 16a1 1 0 0 1-1.414 1.414z"></svg:path><svg:path fill-rule="evenodd" d="M13 24c6.075 0 11-4.925 11-11S19.075 2 13 2S2 6.925 2 13s4.925 11 11 11m0 2c7.18 0 13-5.82 13-13S20.18 0 13 0S0 5.82 0 13s5.82 13 13 13" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPopDollarCircleOffIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopDollarOffIcon],svg[pepicons-pop-dollar-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M7.897 5.7c-.551.413-.8.908-.8 1.37s.249.958.8 1.372c.552.414 1.36.7 2.295.7a1 1 0 1 1 0 2c-1.326 0-2.565-.402-3.495-1.1s-1.6-1.738-1.6-2.971s.67-2.274 1.6-2.972C7.627 3.402 8.867 3 10.192 3c2.053 0 3.994.983 4.766 2.62a1 1 0 0 1-1.81.853C12.798 5.726 11.706 5 10.193 5c-.935 0-1.743.286-2.295.7" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M12.157 14.583c.551-.413.799-.908.799-1.37s-.248-.959-.8-1.372c-.551-.414-1.36-.7-2.294-.7a1 1 0 1 1 0-2c1.326 0 2.565.402 3.495 1.1s1.599 1.738 1.599 2.971s-.669 2.274-1.6 2.971c-.93.698-2.168 1.1-3.494 1.1c-2.053 0-3.995-.983-4.766-2.621a1 1 0 0 1 1.809-.853c.352.748 1.444 1.474 2.957 1.474c.935 0 1.743-.286 2.295-.7M10 1a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0V2a1 1 0 0 1 1-1" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M10 16a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0v-1a1 1 0 0 1 1-1" clip-rule="evenodd"></svg:path><svg:path d="M1.293 2.707a1 1 0 0 1 1.414-1.414l16 16a1 1 0 0 1-1.414 1.414z"></svg:path></svg:g>`,
})
export class PepiconsPopDollarOffIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopDotsXIcon],svg[pepicons-pop-dots-x-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:circle cx="5" cy="10" r="2"></svg:circle><svg:circle cx="10" cy="10" r="2"></svg:circle><svg:circle cx="15" cy="10" r="2"></svg:circle></svg:g>`,
})
export class PepiconsPopDotsXIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopDotsXCircleIcon],svg[pepicons-pop-dots-x-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:g transform="translate(3 3)"><svg:circle cx="5" cy="10" r="2"></svg:circle><svg:circle cx="10" cy="10" r="2"></svg:circle><svg:circle cx="15" cy="10" r="2"></svg:circle></svg:g><svg:path fill-rule="evenodd" d="M13 24c6.075 0 11-4.925 11-11S19.075 2 13 2S2 6.925 2 13s4.925 11 11 11m0 2c7.18 0 13-5.82 13-13S20.18 0 13 0S0 5.82 0 13s5.82 13 13 13" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPopDotsXCircleIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopDotsXCircleFilledIcon],svg[pepicons-pop-dots-x-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPopDotsXCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:g fill="#000" transform="translate(3 3)"><svg:circle cx="5" cy="10" r="2"></svg:circle><svg:circle cx="10" cy="10" r="2"></svg:circle><svg:circle cx="15" cy="10" r="2"></svg:circle></svg:g></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPopDotsXCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPopDotsXCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopDotsXCircleOffIcon],svg[pepicons-pop-dots-x-circle-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:g transform="translate(3 3)"><svg:circle cx="5" cy="10" r="2"></svg:circle><svg:circle cx="10" cy="10" r="2"></svg:circle><svg:circle cx="15" cy="10" r="2"></svg:circle><svg:path d="M1.293 2.707a1 1 0 0 1 1.414-1.414l16 16a1 1 0 0 1-1.414 1.414z"></svg:path></svg:g><svg:path fill-rule="evenodd" d="M13 24c6.075 0 11-4.925 11-11S19.075 2 13 2S2 6.925 2 13s4.925 11 11 11m0 2c7.18 0 13-5.82 13-13S20.18 0 13 0S0 5.82 0 13s5.82 13 13 13" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPopDotsXCircleOffIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopDotsXOffIcon],svg[pepicons-pop-dots-x-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:circle cx="5" cy="10" r="2"></svg:circle><svg:circle cx="10" cy="10" r="2"></svg:circle><svg:circle cx="15" cy="10" r="2"></svg:circle><svg:path d="M1.293 2.707a1 1 0 0 1 1.414-1.414l16 16a1 1 0 0 1-1.414 1.414z"></svg:path></svg:g>`,
})
export class PepiconsPopDotsXOffIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopDotsYIcon],svg[pepicons-pop-dots-y-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:circle cx="10" cy="15" r="2"></svg:circle><svg:circle cx="10" cy="10" r="2"></svg:circle><svg:circle cx="10" cy="5" r="2"></svg:circle></svg:g>`,
})
export class PepiconsPopDotsYIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopDotsYCircleIcon],svg[pepicons-pop-dots-y-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:g transform="translate(3 3)"><svg:circle cx="10" cy="15" r="2"></svg:circle><svg:circle cx="10" cy="10" r="2"></svg:circle><svg:circle cx="10" cy="5" r="2"></svg:circle></svg:g><svg:path fill-rule="evenodd" d="M13 24c6.075 0 11-4.925 11-11S19.075 2 13 2S2 6.925 2 13s4.925 11 11 11m0 2c7.18 0 13-5.82 13-13S20.18 0 13 0S0 5.82 0 13s5.82 13 13 13" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPopDotsYCircleIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopDotsYCircleFilledIcon],svg[pepicons-pop-dots-y-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPopDotsYCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:g fill="#000" transform="translate(3 3)"><svg:circle cx="10" cy="15" r="2"></svg:circle><svg:circle cx="10" cy="10" r="2"></svg:circle><svg:circle cx="10" cy="5" r="2"></svg:circle></svg:g></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPopDotsYCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPopDotsYCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopDotsYCircleOffIcon],svg[pepicons-pop-dots-y-circle-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:g transform="translate(3 3)"><svg:circle cx="10" cy="15" r="2"></svg:circle><svg:circle cx="10" cy="10" r="2"></svg:circle><svg:circle cx="10" cy="5" r="2"></svg:circle><svg:path d="M1.293 2.707a1 1 0 0 1 1.414-1.414l16 16a1 1 0 0 1-1.414 1.414z"></svg:path></svg:g><svg:path fill-rule="evenodd" d="M13 24c6.075 0 11-4.925 11-11S19.075 2 13 2S2 6.925 2 13s4.925 11 11 11m0 2c7.18 0 13-5.82 13-13S20.18 0 13 0S0 5.82 0 13s5.82 13 13 13" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPopDotsYCircleOffIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopDotsYOffIcon],svg[pepicons-pop-dots-y-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:circle cx="10" cy="15" r="2"></svg:circle><svg:circle cx="10" cy="10" r="2"></svg:circle><svg:circle cx="10" cy="5" r="2"></svg:circle><svg:path d="M1.293 2.707a1 1 0 0 1 1.414-1.414l16 16a1 1 0 0 1-1.414 1.414z"></svg:path></svg:g>`,
})
export class PepiconsPopDotsYOffIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopDownLeftIcon],svg[pepicons-pop-down-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M7.707 16.707a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 0-1.414l4-4a1 1 0 0 1 1.414 1.414L4.414 12l3.293 3.293a1 1 0 0 1 0 1.414"></svg:path><svg:path d="M12.75 11c.595 0 1.166-.238 1.588-.663A2.28 2.28 0 0 0 15 8.727V3a1 1 0 1 1 2 0v5.727a4.3 4.3 0 0 1-1.242 3.02A4.24 4.24 0 0 1 12.75 13H3a1 1 0 1 1 0-2z"></svg:path></svg:g>`,
})
export class PepiconsPopDownLeftIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopDownLeftCircleIcon],svg[pepicons-pop-down-left-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M10.707 19.707a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 0-1.414l4-4a1 1 0 0 1 1.414 1.414L7.414 15l3.293 3.293a1 1 0 0 1 0 1.414"></svg:path><svg:path d="M15.75 14c.595 0 1.166-.238 1.588-.663a2.28 2.28 0 0 0 .662-1.61V6a1 1 0 1 1 2 0v5.727a4.3 4.3 0 0 1-1.242 3.02A4.24 4.24 0 0 1 15.75 16H6a1 1 0 1 1 0-2z"></svg:path><svg:path d="M13 24c6.075 0 11-4.925 11-11S19.075 2 13 2S2 6.925 2 13s4.925 11 11 11m0 2c7.18 0 13-5.82 13-13S20.18 0 13 0S0 5.82 0 13s5.82 13 13 13"></svg:path></svg:g>`,
})
export class PepiconsPopDownLeftCircleIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopDownLeftCircleFilledIcon],svg[pepicons-pop-down-left-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPopDownLeftCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:g fill="#000" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M10.707 19.707a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 0-1.414l4-4a1 1 0 0 1 1.414 1.414L7.414 15l3.293 3.293a1 1 0 0 1 0 1.414"></svg:path><svg:path d="M15.75 14c.595 0 1.166-.238 1.588-.663a2.28 2.28 0 0 0 .662-1.61V6a1 1 0 1 1 2 0v5.727a4.3 4.3 0 0 1-1.242 3.02A4.24 4.24 0 0 1 15.75 16H6a1 1 0 1 1 0-2z"></svg:path></svg:g></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPopDownLeftCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPopDownLeftCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopDownLeftCircleOffIcon],svg[pepicons-pop-down-left-circle-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M10.707 19.707a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 0-1.414l4-4a1 1 0 0 1 1.414 1.414L7.414 15l3.293 3.293a1 1 0 0 1 0 1.414" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M15.75 14c.595 0 1.166-.238 1.588-.663a2.28 2.28 0 0 0 .662-1.61V6a1 1 0 1 1 2 0v5.727a4.3 4.3 0 0 1-1.242 3.02A4.24 4.24 0 0 1 15.75 16H6a1 1 0 1 1 0-2z" clip-rule="evenodd"></svg:path><svg:path d="M4.293 5.707a1 1 0 0 1 1.414-1.414l16 16a1 1 0 0 1-1.414 1.414z"></svg:path><svg:path fill-rule="evenodd" d="M13 24c6.075 0 11-4.925 11-11S19.075 2 13 2S2 6.925 2 13s4.925 11 11 11m0 2c7.18 0 13-5.82 13-13S20.18 0 13 0S0 5.82 0 13s5.82 13 13 13" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPopDownLeftCircleOffIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopDownLeftOffIcon],svg[pepicons-pop-down-left-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M7.707 16.707a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 0-1.414l4-4a1 1 0 0 1 1.414 1.414L4.414 12l3.293 3.293a1 1 0 0 1 0 1.414" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M12.75 11c.595 0 1.166-.238 1.588-.663A2.28 2.28 0 0 0 15 8.727V3a1 1 0 1 1 2 0v5.727a4.3 4.3 0 0 1-1.242 3.02A4.24 4.24 0 0 1 12.75 13H3a1 1 0 1 1 0-2z" clip-rule="evenodd"></svg:path><svg:path d="M1.293 2.707a1 1 0 0 1 1.414-1.414l16 16a1 1 0 0 1-1.414 1.414z"></svg:path></svg:g>`,
})
export class PepiconsPopDownLeftOffIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopDownUpIcon],svg[pepicons-pop-down-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M10.293 7.707a1 1 0 0 1 0-1.414l3-3a1 1 0 1 1 1.414 1.414l-3 3a1 1 0 0 1-1.414 0"></svg:path><svg:path d="M17.707 7.707a1 1 0 0 1-1.414 0l-3-3a1 1 0 0 1 1.414-1.414l3 3a1 1 0 0 1 0 1.414"></svg:path><svg:path d="M14 5a1 1 0 0 1 1 1v8a1 1 0 1 1-2 0V6a1 1 0 0 1 1-1m-4.293 7.293a1 1 0 0 1 0 1.414l-3 3a1 1 0 0 1-1.414-1.414l3-3a1 1 0 0 1 1.414 0"></svg:path><svg:path d="M2.293 12.293a1 1 0 0 1 1.414 0l3 3a1 1 0 1 1-1.414 1.414l-3-3a1 1 0 0 1 0-1.414"></svg:path><svg:path d="M6 15a1 1 0 0 1-1-1V6a1 1 0 1 1 2 0v8a1 1 0 0 1-1 1"></svg:path></svg:g>`,
})
export class PepiconsPopDownUpIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopDownUpCircleIcon],svg[pepicons-pop-down-up-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M13.293 10.707a1 1 0 0 1 0-1.414l3-3a1 1 0 1 1 1.414 1.414l-3 3a1 1 0 0 1-1.414 0"></svg:path><svg:path d="M20.707 10.707a1 1 0 0 1-1.414 0l-3-3a1 1 0 0 1 1.414-1.414l3 3a1 1 0 0 1 0 1.414"></svg:path><svg:path d="M17 8a1 1 0 0 1 1 1v8a1 1 0 1 1-2 0V9a1 1 0 0 1 1-1m-4.293 7.293a1 1 0 0 1 0 1.414l-3 3a1 1 0 0 1-1.414-1.414l3-3a1 1 0 0 1 1.414 0"></svg:path><svg:path d="M5.293 15.293a1 1 0 0 1 1.414 0l3 3a1 1 0 1 1-1.414 1.414l-3-3a1 1 0 0 1 0-1.414"></svg:path><svg:path d="M9 18a1 1 0 0 1-1-1V9a1 1 0 1 1 2 0v8a1 1 0 0 1-1 1"></svg:path><svg:path d="M13 24c6.075 0 11-4.925 11-11S19.075 2 13 2S2 6.925 2 13s4.925 11 11 11m0 2c7.18 0 13-5.82 13-13S20.18 0 13 0S0 5.82 0 13s5.82 13 13 13"></svg:path></svg:g>`,
})
export class PepiconsPopDownUpCircleIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopDownUpCircleFilledIcon],svg[pepicons-pop-down-up-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPopDownUpCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:g fill="#000" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M13.293 10.707a1 1 0 0 1 0-1.414l3-3a1 1 0 1 1 1.414 1.414l-3 3a1 1 0 0 1-1.414 0"></svg:path><svg:path d="M20.707 10.707a1 1 0 0 1-1.414 0l-3-3a1 1 0 0 1 1.414-1.414l3 3a1 1 0 0 1 0 1.414"></svg:path><svg:path d="M17 8a1 1 0 0 1 1 1v8a1 1 0 1 1-2 0V9a1 1 0 0 1 1-1m-4.293 7.293a1 1 0 0 1 0 1.414l-3 3a1 1 0 0 1-1.414-1.414l3-3a1 1 0 0 1 1.414 0"></svg:path><svg:path d="M5.293 15.293a1 1 0 0 1 1.414 0l3 3a1 1 0 1 1-1.414 1.414l-3-3a1 1 0 0 1 0-1.414"></svg:path><svg:path d="M9 18a1 1 0 0 1-1-1V9a1 1 0 1 1 2 0v8a1 1 0 0 1-1 1"></svg:path></svg:g></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPopDownUpCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPopDownUpCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopDownUpCircleOffIcon],svg[pepicons-pop-down-up-circle-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M13.293 10.707a1 1 0 0 1 0-1.414l3-3a1 1 0 1 1 1.414 1.414l-3 3a1 1 0 0 1-1.414 0" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M20.707 10.707a1 1 0 0 1-1.414 0l-3-3a1 1 0 0 1 1.414-1.414l3 3a1 1 0 0 1 0 1.414" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M17 8a1 1 0 0 1 1 1v8a1 1 0 1 1-2 0V9a1 1 0 0 1 1-1m-4.293 7.293a1 1 0 0 1 0 1.414l-3 3a1 1 0 0 1-1.414-1.414l3-3a1 1 0 0 1 1.414 0" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M5.293 15.293a1 1 0 0 1 1.414 0l3 3a1 1 0 1 1-1.414 1.414l-3-3a1 1 0 0 1 0-1.414" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M9 18a1 1 0 0 1-1-1V9a1 1 0 1 1 2 0v8a1 1 0 0 1-1 1" clip-rule="evenodd"></svg:path><svg:path d="M4.293 5.707a1 1 0 0 1 1.414-1.414l16 16a1 1 0 0 1-1.414 1.414z"></svg:path><svg:path fill-rule="evenodd" d="M13 24c6.075 0 11-4.925 11-11S19.075 2 13 2S2 6.925 2 13s4.925 11 11 11m0 2c7.18 0 13-5.82 13-13S20.18 0 13 0S0 5.82 0 13s5.82 13 13 13" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPopDownUpCircleOffIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopDownUpOffIcon],svg[pepicons-pop-down-up-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M10.293 7.707a1 1 0 0 1 0-1.414l3-3a1 1 0 1 1 1.414 1.414l-3 3a1 1 0 0 1-1.414 0" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M17.707 7.707a1 1 0 0 1-1.414 0l-3-3a1 1 0 0 1 1.414-1.414l3 3a1 1 0 0 1 0 1.414" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M14 5a1 1 0 0 1 1 1v8a1 1 0 1 1-2 0V6a1 1 0 0 1 1-1m-4.293 7.293a1 1 0 0 1 0 1.414l-3 3a1 1 0 0 1-1.414-1.414l3-3a1 1 0 0 1 1.414 0" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M2.293 12.293a1 1 0 0 1 1.414 0l3 3a1 1 0 1 1-1.414 1.414l-3-3a1 1 0 0 1 0-1.414" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M6 15a1 1 0 0 1-1-1V6a1 1 0 1 1 2 0v8a1 1 0 0 1-1 1" clip-rule="evenodd"></svg:path><svg:path d="M1.293 2.707a1 1 0 0 1 1.414-1.414l16 16a1 1 0 0 1-1.414 1.414z"></svg:path></svg:g>`,
})
export class PepiconsPopDownUpOffIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopDressIcon],svg[pepicons-pop-dress-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="m10 2.702l-.354-.108A2.628 2.628 0 0 0 6.272 5.45l.19 1.442A3 3 0 0 0 9.436 9.5h1.127a3 3 0 0 0 2.974-2.609l.19-1.442a2.628 2.628 0 0 0-3.374-2.855zM8.795 4.484a.6.6 0 0 1 .265.023l.938.287l.939-.288a.628.628 0 0 1 .806.683l-.19 1.441a1 1 0 0 1-.991.87H9.436a1 1 0 0 1-.991-.87l-.19-1.441a.63.63 0 0 1 .54-.705" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M11.994 8H7.767a3 3 0 0 0-1.534.421q-2.547 1.515-3.765 3.41c-.26.404-.522.773-.768 1.117c-1.07 1.499-1.813 2.538-.495 4.041C2.825 18.84 6.26 20 9.63 20s6.726-.685 8.905-3.01c1.613-1.723.943-2.49-.1-3.685c-.366-.419-.778-.89-1.153-1.474q-1.265-1.968-3.783-3.427A3 3 0 0 0 11.994 8m3.605 4.912a11 11 0 0 0 .996 1.315c.282.334.646.764.823.99a5 5 0 0 1-.344.405C15.557 17.242 13.041 18 9.63 18c-2.908 0-5.757-1.003-6.92-2.33c-.195-.221-.21-.226-.21-.23l.001-.001c.03-.118.146-.343.394-.712l.294-.418c.27-.383.648-.918.812-1.166q.077-.116.15-.23C4.783 11.93 5.809 11 7.256 10.14a1 1 0 0 1 .512-.14h4.227a1 1 0 0 1 .502.135c1.417.821 2.442 1.75 3.102 2.777" clip-rule="evenodd"></svg:path><svg:path d="M5.804 1.279A.75.75 0 0 1 7.196.72l1 2.5a.75.75 0 0 1-1.392.558zm7-.558a.75.75 0 0 1 1.392.558l-1 2.5a.75.75 0 0 1-1.392-.558zM9.5 12.5a.5.5 0 0 1 1 0v4a.5.5 0 0 1-1 0zm-2.447-.223a.5.5 0 1 1 .894.446l-1.5 3.008a.5.5 0 0 1-.894-.447zm5.894-.001a.5.5 0 1 0-.894.448l1.5 3a.5.5 0 1 0 .894-.448z"></svg:path></svg:g>`,
})
export class PepiconsPopDressIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopDressCircleIcon],svg[pepicons-pop-dress-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="m13 5.702l-.354-.108A2.628 2.628 0 0 0 9.272 8.45l.19 1.442a3 3 0 0 0 2.974 2.609h1.127a3 3 0 0 0 2.974-2.609l.19-1.442a2.628 2.628 0 0 0-3.374-2.855zm-1.204 1.782a.6.6 0 0 1 .265.023l.938.287l.939-.288a.628.628 0 0 1 .806.683l-.19 1.441a1 1 0 0 1-.991.87h-1.127a1 1 0 0 1-.991-.87l-.19-1.441a.63.63 0 0 1 .54-.705" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M14.994 11h-4.227a3 3 0 0 0-1.534.421q-2.547 1.515-3.765 3.41c-.26.404-.522.773-.768 1.117c-1.07 1.499-1.813 2.538-.495 4.041C5.825 21.84 9.26 23 12.63 23s6.726-.685 8.905-3.01c1.613-1.723.943-2.49-.1-3.685c-.366-.419-.778-.89-1.153-1.474q-1.264-1.968-3.783-3.427A3 3 0 0 0 14.994 11m3.605 4.912a11 11 0 0 0 .996 1.315c.282.334.646.764.823.99a5 5 0 0 1-.344.405C18.557 20.242 16.041 21 12.63 21c-2.908 0-5.757-1.003-6.92-2.33c-.195-.221-.21-.226-.21-.23l.001-.001c.03-.118.146-.343.394-.712l.294-.418c.27-.383.648-.918.812-1.166q.077-.116.15-.23c.632-.982 1.658-1.912 3.105-2.773a1 1 0 0 1 .512-.14h4.227a1 1 0 0 1 .502.135c1.417.821 2.442 1.75 3.103 2.777" clip-rule="evenodd"></svg:path><svg:path d="M8.804 4.279a.75.75 0 0 1 1.392-.558l1 2.5a.75.75 0 0 1-1.392.558zm7-.558a.75.75 0 0 1 1.392.558l-1 2.5a.75.75 0 0 1-1.392-.558zM12.5 15.5a.5.5 0 0 1 1 0v4a.5.5 0 0 1-1 0zm-2.447-.223a.5.5 0 1 1 .894.446l-1.5 3.008a.5.5 0 0 1-.894-.447zm5.894-.001a.5.5 0 1 0-.894.448l1.5 3a.5.5 0 1 0 .894-.448z"></svg:path><svg:path fill-rule="evenodd" d="M13 24c6.075 0 11-4.925 11-11S19.075 2 13 2S2 6.925 2 13s4.925 11 11 11m0 2c7.18 0 13-5.82 13-13S20.18 0 13 0S0 5.82 0 13s5.82 13 13 13" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPopDressCircleIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopDressCircleFilledIcon],svg[pepicons-pop-dress-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPopDressCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:g fill="#000"><svg:path fill-rule="evenodd" d="m13 5.702l-.354-.108A2.628 2.628 0 0 0 9.272 8.45l.19 1.442a3 3 0 0 0 2.974 2.609h1.127a3 3 0 0 0 2.974-2.609l.19-1.442a2.628 2.628 0 0 0-3.374-2.855zm-1.204 1.782a.6.6 0 0 1 .265.023l.938.287l.939-.288a.628.628 0 0 1 .806.683l-.19 1.441a1 1 0 0 1-.991.87h-1.127a1 1 0 0 1-.991-.87l-.19-1.441a.63.63 0 0 1 .54-.705" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M14.994 11h-4.227a3 3 0 0 0-1.534.421q-2.547 1.515-3.765 3.41c-.26.404-.522.773-.768 1.117c-1.07 1.499-1.813 2.538-.495 4.041C5.825 21.84 9.26 23 12.63 23s6.726-.685 8.905-3.01c1.613-1.723.943-2.49-.1-3.685c-.366-.419-.778-.89-1.153-1.474q-1.264-1.968-3.783-3.427A3 3 0 0 0 14.994 11m3.605 4.912a11 11 0 0 0 .996 1.315c.282.334.646.764.823.99a5 5 0 0 1-.344.405C18.557 20.242 16.041 21 12.63 21c-2.908 0-5.757-1.003-6.92-2.33c-.195-.221-.21-.226-.21-.23l.001-.001c.03-.118.146-.343.394-.712l.294-.418c.27-.383.648-.918.812-1.166q.077-.116.15-.23c.632-.982 1.658-1.912 3.105-2.773a1 1 0 0 1 .512-.14h4.227a1 1 0 0 1 .502.135c1.417.821 2.442 1.75 3.103 2.777" clip-rule="evenodd"></svg:path><svg:path d="M8.804 4.279a.75.75 0 0 1 1.392-.558l1 2.5a.75.75 0 0 1-1.392.558zm7-.558a.75.75 0 0 1 1.392.558l-1 2.5a.75.75 0 0 1-1.392-.558zM12.5 15.5a.5.5 0 0 1 1 0v4a.5.5 0 0 1-1 0zm-2.447-.223a.5.5 0 1 1 .894.446l-1.5 3.008a.5.5 0 0 1-.894-.447zm5.894-.001a.5.5 0 1 0-.894.448l1.5 3a.5.5 0 1 0 .894-.448z"></svg:path></svg:g></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPopDressCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPopDressCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopDressCircleOffIcon],svg[pepicons-pop-dress-circle-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="m13 5.702l-.354-.108A2.628 2.628 0 0 0 9.272 8.45l.19 1.442a3 3 0 0 0 2.974 2.609h1.127a3 3 0 0 0 2.974-2.609l.19-1.442a2.628 2.628 0 0 0-3.374-2.855zm-1.204 1.782a.6.6 0 0 1 .265.023l.938.287l.939-.288a.628.628 0 0 1 .806.683l-.19 1.441a1 1 0 0 1-.991.87h-1.127a1 1 0 0 1-.991-.87l-.19-1.441a.63.63 0 0 1 .54-.705" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M14.994 11h-4.227a3 3 0 0 0-1.534.421q-2.547 1.515-3.765 3.41c-.26.404-.522.773-.768 1.117c-1.07 1.499-1.813 2.538-.495 4.041C5.825 21.84 9.26 23 12.63 23s6.726-.685 8.905-3.01c1.613-1.723.943-2.49-.1-3.685c-.366-.419-.778-.89-1.153-1.474q-1.264-1.968-3.783-3.427A3 3 0 0 0 14.994 11m3.605 4.912a11 11 0 0 0 .996 1.315c.282.334.646.764.823.99a5 5 0 0 1-.344.405C18.557 20.242 16.041 21 12.63 21c-2.908 0-5.757-1.003-6.92-2.33c-.195-.221-.21-.226-.21-.23l.001-.001c.03-.118.146-.343.394-.712l.294-.418c.27-.383.648-.918.812-1.166q.077-.116.15-.23c.632-.982 1.658-1.912 3.105-2.773a1 1 0 0 1 .512-.14h4.227a1 1 0 0 1 .502.135c1.417.821 2.442 1.75 3.103 2.777" clip-rule="evenodd"></svg:path><svg:path d="M8.804 4.279a.75.75 0 0 1 1.392-.558l1 2.5a.75.75 0 0 1-1.392.558zm7-.558a.75.75 0 0 1 1.392.558l-1 2.5a.75.75 0 0 1-1.392-.558zM12.5 15.5a.5.5 0 0 1 1 0v4a.5.5 0 0 1-1 0zm-2.447-.223a.5.5 0 1 1 .894.446l-1.5 3.008a.5.5 0 0 1-.894-.447zm5.894-.001a.5.5 0 1 0-.894.448l1.5 3a.5.5 0 1 0 .894-.448z"></svg:path><svg:path d="M4.293 5.707a1 1 0 0 1 1.414-1.414l16 16a1 1 0 0 1-1.414 1.414z"></svg:path><svg:path fill-rule="evenodd" d="M13 24c6.075 0 11-4.925 11-11S19.075 2 13 2S2 6.925 2 13s4.925 11 11 11m0 2c7.18 0 13-5.82 13-13S20.18 0 13 0S0 5.82 0 13s5.82 13 13 13" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPopDressCircleOffIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopDressOffIcon],svg[pepicons-pop-dress-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="m10 2.702l-.354-.108A2.628 2.628 0 0 0 6.272 5.45l.19 1.442A3 3 0 0 0 9.436 9.5h1.127a3 3 0 0 0 2.974-2.609l.19-1.442a2.628 2.628 0 0 0-3.374-2.855zM8.795 4.484a.6.6 0 0 1 .265.023l.938.287l.939-.288a.628.628 0 0 1 .806.683l-.19 1.441a1 1 0 0 1-.991.87H9.436a1 1 0 0 1-.991-.87l-.19-1.441a.63.63 0 0 1 .54-.705" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M11.994 8H7.767a3 3 0 0 0-1.534.421q-2.547 1.515-3.765 3.41c-.26.404-.522.773-.768 1.117c-1.07 1.499-1.813 2.538-.495 4.041C2.825 18.84 6.26 20 9.63 20s6.726-.685 8.905-3.01c1.613-1.723.943-2.49-.1-3.685c-.366-.419-.778-.89-1.153-1.474q-1.265-1.968-3.783-3.427A3 3 0 0 0 11.994 8m3.605 4.912a11 11 0 0 0 .996 1.315c.282.334.646.764.823.99a5 5 0 0 1-.344.405C15.557 17.242 13.041 18 9.63 18c-2.908 0-5.757-1.003-6.92-2.33c-.195-.221-.21-.226-.21-.23l.001-.001c.03-.118.146-.343.394-.712l.294-.418c.27-.383.648-.918.812-1.166q.077-.116.15-.23C4.783 11.93 5.809 11 7.256 10.14a1 1 0 0 1 .512-.14h4.227a1 1 0 0 1 .502.135c1.417.821 2.442 1.75 3.102 2.777" clip-rule="evenodd"></svg:path><svg:path d="M5.804 1.279A.75.75 0 0 1 7.196.72l1 2.5a.75.75 0 0 1-1.392.558zm7-.558a.75.75 0 0 1 1.392.558l-1 2.5a.75.75 0 0 1-1.392-.558zM9.5 12.5a.5.5 0 0 1 1 0v4a.5.5 0 0 1-1 0zm-2.447-.223a.5.5 0 1 1 .894.446l-1.5 3.008a.5.5 0 0 1-.894-.447zm5.894-.001a.5.5 0 1 0-.894.448l1.5 3a.5.5 0 1 0 .894-.448z"></svg:path><svg:path d="M1.293 2.707a1 1 0 0 1 1.414-1.414l16 16a1 1 0 0 1-1.414 1.414z"></svg:path></svg:g>`,
})
export class PepiconsPopDressOffIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopDuplicateIcon],svg[pepicons-pop-duplicate-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M15.5 6.5h-8a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1m-7 8v-6h6v6z" clip-rule="evenodd"></svg:path><svg:path d="M6.5 13.5h-2a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v2h-2v-1h-6v6h1z"></svg:path></svg:g>`,
})
export class PepiconsPopDuplicateIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopDuplicateCircleIcon],svg[pepicons-pop-duplicate-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M18.5 9.5h-8a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1m-7 8v-6h6v6z" clip-rule="evenodd"></svg:path><svg:path d="M9.5 16.5h-2a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v2h-2v-1h-6v6h1z"></svg:path><svg:path fill-rule="evenodd" d="M13 24c6.075 0 11-4.925 11-11S19.075 2 13 2S2 6.925 2 13s4.925 11 11 11m0 2c7.18 0 13-5.82 13-13S20.18 0 13 0S0 5.82 0 13s5.82 13 13 13" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPopDuplicateCircleIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopDuplicateCircleFilledIcon],svg[pepicons-pop-duplicate-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPopDuplicateCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:g fill="#000"><svg:path fill-rule="evenodd" d="M18.5 9.5h-8a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1m-7 8v-6h6v6z" clip-rule="evenodd"></svg:path><svg:path d="M9.5 16.5h-2a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v2h-2v-1h-6v6h1z"></svg:path></svg:g></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPopDuplicateCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPopDuplicateCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopDuplicateCircleOffIcon],svg[pepicons-pop-duplicate-circle-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M18.5 9.5h-8a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1m-7 8v-6h6v6z" clip-rule="evenodd"></svg:path><svg:path d="M9.5 16.5h-2a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v2h-2v-1h-6v6h1z"></svg:path><svg:path d="M4.293 5.707a1 1 0 0 1 1.414-1.414l16 16a1 1 0 0 1-1.414 1.414z"></svg:path><svg:path fill-rule="evenodd" d="M13 24c6.075 0 11-4.925 11-11S19.075 2 13 2S2 6.925 2 13s4.925 11 11 11m0 2c7.18 0 13-5.82 13-13S20.18 0 13 0S0 5.82 0 13s5.82 13 13 13" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPopDuplicateCircleOffIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopDuplicateOffIcon],svg[pepicons-pop-duplicate-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M15.5 6.5h-8a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1m-7 8v-6h6v6z" clip-rule="evenodd"></svg:path><svg:path d="M6.5 13.5h-2a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v2h-2v-1h-6v6h1z"></svg:path><svg:path d="M1.293 2.707a1 1 0 0 1 1.414-1.414l16 16a1 1 0 0 1-1.414 1.414z"></svg:path></svg:g>`,
})
export class PepiconsPopDuplicateOffIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopEarthAmericasIcon],svg[pepicons-pop-earth-americas-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M8.702 2.918L9.83.665l1.342.67l-1.127 2.254a.25.25 0 0 0 .074.312l.341.256l.01.006h.004q.005.002.015-.002l.014-.008l.002-.004l.003-.01a1.53 1.53 0 0 1 2.48-.876l.964.803a1.75 1.75 0 0 1-.15 2.801l-.219.146a.3.3 0 0 0-.069.07l-.721 1.081a.25.25 0 0 0-.042.139v.283c0 .464-.184.91-.513 1.237l-.207.207a1.457 1.457 0 0 1-2.03.03l-.005.006l-.002.002v.005l.001.002l1.076 1.436c.752.799-.108 2.082-1.143 1.668l-1.132-.453a1.3 1.3 0 0 1-.326-.19l-2.338-1.871a1.8 1.8 0 0 1-.307-.316L4.686 8.83a1.75 1.75 0 0 1-.298-1.475l.306-1.224a.25.25 0 0 0-.01-.154l-.88-2.2l1.392-.557l.88 2.2c.137.342.162.718.073 1.075L5.843 7.72a.25.25 0 0 0 .043.21l1.138 1.518a.3.3 0 0 0 .044.046l1.597 1.278a1.51 1.51 0 0 1 .27-1.767l.035-.035A1.457 1.457 0 0 1 11 8.94l.177-.177a.25.25 0 0 0 .073-.177v-.283c0-.346.102-.683.294-.97l.721-1.083a1.8 1.8 0 0 1 .485-.485l.22-.146a.25.25 0 0 0 .021-.4l-.964-.803l-.011-.007h-.002q-.003-.002-.016.001l-.014.01q-.002 0-.002.002l-.004.011a1.53 1.53 0 0 1-2.418.924l-.342-.256a1.75 1.75 0 0 1-.516-2.183"></svg:path><svg:path d="M12.592 13.45a.25.25 0 0 0-.292.128l-.406.81a.25.25 0 0 0 0 .224l.576 1.15c.223.448.245.97.06 1.433l-.834 2.084l-1.392-.558l.833-2.083a.25.25 0 0 0-.009-.204l-.575-1.151a1.75 1.75 0 0 1 0-1.566l.405-.81a1.75 1.75 0 0 1 2.046-.9l.629.18c.367.104.69.327.919.632l.505.674l.024.027l.304.304c.64.64.686 1.662.107 2.358l-1.916 2.298l-1.152-.96l1.915-2.299a.25.25 0 0 0-.015-.336l-.304-.304a2 2 0 0 1-.163-.188l-.505-.674a.25.25 0 0 0-.132-.09z"></svg:path><svg:path d="M10 2a8 8 0 1 0 0 16a8 8 0 0 0 0-16M0 10C0 4.477 4.477 0 10 0s10 4.477 10 10s-4.477 10-10 10S0 15.523 0 10"></svg:path></svg:g>`,
})
export class PepiconsPopEarthAmericasIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopEarthAmericasCircleIcon],svg[pepicons-pop-earth-americas-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="m11.702 5.918l1.127-2.253l1.342.67l-1.127 2.254a.25.25 0 0 0 .074.312l.341.256l.01.006h.004q.005.002.015-.002l.014-.008l.002-.004l.003-.01a1.53 1.53 0 0 1 2.48-.876l.964.803a1.75 1.75 0 0 1-.15 2.8l-.219.147a.3.3 0 0 0-.069.07l-.721 1.081a.25.25 0 0 0-.042.139v.283c0 .464-.184.91-.513 1.237l-.207.207a1.457 1.457 0 0 1-2.03.03l-.005.006l-.002.002v.005l.001.002l1.076 1.436c.752.799-.108 2.082-1.143 1.668l-1.132-.453a1.3 1.3 0 0 1-.326-.19l-2.338-1.871a1.8 1.8 0 0 1-.307-.316L7.686 11.83a1.75 1.75 0 0 1-.298-1.475l.306-1.224a.25.25 0 0 0-.01-.154l-.88-2.2l1.392-.557l.88 2.2c.137.342.162.718.073 1.075l-.306 1.224a.25.25 0 0 0 .043.21l1.138 1.518a.3.3 0 0 0 .044.046l1.597 1.278a1.51 1.51 0 0 1 .27-1.767l.035-.035a1.457 1.457 0 0 1 2.03-.03l.177-.177a.25.25 0 0 0 .073-.177v-.283c0-.346.102-.683.294-.97l.721-1.083a1.8 1.8 0 0 1 .485-.485l.22-.146a.25.25 0 0 0 .021-.4l-.964-.803l-.011-.007h-.002q-.003-.002-.016.001l-.014.01q-.002 0-.002.002l-.004.011a1.53 1.53 0 0 1-2.418.924l-.342-.256a1.75 1.75 0 0 1-.516-2.183"></svg:path><svg:path d="M15.592 16.45a.25.25 0 0 0-.292.128l-.406.81a.25.25 0 0 0 0 .224l.576 1.15c.223.448.245.97.06 1.433l-.834 2.084l-1.392-.558l.833-2.083a.25.25 0 0 0-.009-.204l-.575-1.151a1.75 1.75 0 0 1 0-1.566l.405-.81a1.75 1.75 0 0 1 2.046-.9l.629.18c.367.104.69.327.919.632l.505.674l.024.027l.304.304c.64.64.686 1.662.107 2.358l-1.916 2.298l-1.152-.96l1.915-2.299a.25.25 0 0 0-.015-.336l-.304-.304a2 2 0 0 1-.163-.188l-.505-.674a.25.25 0 0 0-.131-.09z"></svg:path><svg:path d="M13 5a8 8 0 1 0 0 16a8 8 0 0 0 0-16M3 13C3 7.477 7.477 3 13 3s10 4.477 10 10s-4.477 10-10 10S3 18.523 3 13"></svg:path><svg:path d="M13 24c6.075 0 11-4.925 11-11S19.075 2 13 2S2 6.925 2 13s4.925 11 11 11m0 2c7.18 0 13-5.82 13-13S20.18 0 13 0S0 5.82 0 13s5.82 13 13 13"></svg:path></svg:g>`,
})
export class PepiconsPopEarthAmericasCircleIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopEarthAmericasCircleFilledIcon],svg[pepicons-pop-earth-americas-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPopEarthAmericasCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:g fill="#000" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="m11.702 5.918l1.127-2.253l1.342.67l-1.127 2.254a.25.25 0 0 0 .074.312l.341.256l.01.006h.004q.005.002.015-.002l.014-.008l.002-.004l.003-.01a1.53 1.53 0 0 1 2.48-.876l.964.803a1.75 1.75 0 0 1-.15 2.8l-.219.147a.3.3 0 0 0-.069.07l-.721 1.081a.25.25 0 0 0-.042.139v.283c0 .464-.184.91-.513 1.237l-.207.207a1.457 1.457 0 0 1-2.03.03l-.005.006l-.002.002v.005l.001.002l1.076 1.436c.752.799-.108 2.082-1.143 1.668l-1.132-.453a1.3 1.3 0 0 1-.326-.19l-2.338-1.871a1.8 1.8 0 0 1-.307-.316L7.686 11.83a1.75 1.75 0 0 1-.298-1.475l.306-1.224a.25.25 0 0 0-.01-.154l-.88-2.2l1.392-.557l.88 2.2c.137.342.162.718.073 1.075l-.306 1.224a.25.25 0 0 0 .043.21l1.138 1.518a.3.3 0 0 0 .044.046l1.597 1.278a1.51 1.51 0 0 1 .27-1.767l.035-.035a1.457 1.457 0 0 1 2.03-.03l.177-.177a.25.25 0 0 0 .073-.177v-.283c0-.346.102-.683.294-.97l.721-1.083a1.8 1.8 0 0 1 .485-.485l.22-.146a.25.25 0 0 0 .021-.4l-.964-.803l-.011-.007h-.002q-.003-.002-.016.001l-.014.01q-.002 0-.002.002l-.004.011a1.53 1.53 0 0 1-2.418.924l-.342-.256a1.75 1.75 0 0 1-.516-2.183"></svg:path><svg:path d="M15.592 16.45a.25.25 0 0 0-.292.128l-.406.81a.25.25 0 0 0 0 .224l.576 1.15c.223.448.245.97.06 1.433l-.834 2.084l-1.392-.558l.833-2.083a.25.25 0 0 0-.009-.204l-.575-1.151a1.75 1.75 0 0 1 0-1.566l.405-.81a1.75 1.75 0 0 1 2.046-.9l.629.18c.367.104.69.327.919.632l.505.674l.024.027l.304.304c.64.64.686 1.662.107 2.358l-1.916 2.298l-1.152-.96l1.915-2.299a.25.25 0 0 0-.015-.336l-.304-.304a2 2 0 0 1-.163-.188l-.505-.674a.25.25 0 0 0-.131-.09z"></svg:path><svg:path d="M13 5a8 8 0 1 0 0 16a8 8 0 0 0 0-16M3 13C3 7.477 7.477 3 13 3s10 4.477 10 10s-4.477 10-10 10S3 18.523 3 13"></svg:path></svg:g></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPopEarthAmericasCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPopEarthAmericasCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopEarthAmericasCircleOffIcon],svg[pepicons-pop-earth-americas-circle-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:g fill-rule="evenodd" clip-rule="evenodd"><svg:path d="m11.702 5.918l1.127-2.253l1.342.67l-1.127 2.254a.25.25 0 0 0 .074.312l.341.256l.01.006h.004q.005.002.015-.002l.014-.008l.002-.004l.003-.01a1.53 1.53 0 0 1 2.48-.876l.964.803a1.75 1.75 0 0 1-.15 2.8l-.219.147a.3.3 0 0 0-.069.07l-.721 1.081a.25.25 0 0 0-.042.139v.283c0 .464-.184.91-.513 1.237l-.207.207a1.457 1.457 0 0 1-2.03.03l-.005.006l-.002.002v.005l.001.002l1.076 1.436c.752.799-.108 2.082-1.143 1.668l-1.132-.453a1.3 1.3 0 0 1-.326-.19l-2.338-1.871a1.8 1.8 0 0 1-.307-.316L7.686 11.83a1.75 1.75 0 0 1-.298-1.475l.306-1.224a.25.25 0 0 0-.01-.154l-.88-2.2l1.392-.557l.88 2.2c.137.342.162.718.073 1.075l-.306 1.224a.25.25 0 0 0 .043.21l1.138 1.518a.3.3 0 0 0 .044.046l1.597 1.278a1.51 1.51 0 0 1 .27-1.767l.035-.035a1.457 1.457 0 0 1 2.03-.03l.177-.177a.25.25 0 0 0 .073-.177v-.283c0-.346.102-.683.294-.97l.721-1.083a1.8 1.8 0 0 1 .485-.485l.22-.146a.25.25 0 0 0 .021-.4l-.964-.803l-.011-.007h-.002q-.003-.002-.016.001l-.014.01q-.002 0-.002.002l-.004.011a1.53 1.53 0 0 1-2.418.924l-.342-.256a1.75 1.75 0 0 1-.516-2.183"></svg:path><svg:path d="M15.592 16.45a.25.25 0 0 0-.292.128l-.406.81a.25.25 0 0 0 0 .224l.576 1.15c.223.448.245.97.06 1.433l-.834 2.084l-1.392-.558l.833-2.083a.25.25 0 0 0-.009-.204l-.575-1.151a1.75 1.75 0 0 1 0-1.566l.405-.81a1.75 1.75 0 0 1 2.046-.9l.629.18c.367.104.69.327.919.632l.505.674l.024.027l.304.304c.64.64.686 1.662.107 2.358l-1.916 2.298l-1.152-.96l1.915-2.299a.25.25 0 0 0-.015-.336l-.304-.304a2 2 0 0 1-.163-.188l-.505-.674a.25.25 0 0 0-.131-.09z"></svg:path><svg:path d="M13 5a8 8 0 1 0 0 16a8 8 0 0 0 0-16M3 13C3 7.477 7.477 3 13 3s10 4.477 10 10s-4.477 10-10 10S3 18.523 3 13"></svg:path></svg:g><svg:path d="M4.293 5.707a1 1 0 0 1 1.414-1.414l16 16a1 1 0 0 1-1.414 1.414z"></svg:path><svg:path fill-rule="evenodd" d="M13 24c6.075 0 11-4.925 11-11S19.075 2 13 2S2 6.925 2 13s4.925 11 11 11m0 2c7.18 0 13-5.82 13-13S20.18 0 13 0S0 5.82 0 13s5.82 13 13 13" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPopEarthAmericasCircleOffIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopEarthAmericasOffIcon],svg[pepicons-pop-earth-americas-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:g fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M8.702 2.918L9.83.665l1.342.67l-1.127 2.254a.25.25 0 0 0 .074.312l.341.256l.01.006h.004q.005.002.015-.002l.014-.008l.002-.004l.003-.01a1.53 1.53 0 0 1 2.48-.876l.964.803a1.75 1.75 0 0 1-.15 2.801l-.219.146a.3.3 0 0 0-.069.07l-.721 1.081a.25.25 0 0 0-.042.139v.283c0 .464-.184.91-.513 1.237l-.207.207a1.457 1.457 0 0 1-2.03.03l-.005.006l-.002.002v.005l.001.002l1.076 1.436c.752.799-.108 2.082-1.143 1.668l-1.132-.453a1.3 1.3 0 0 1-.326-.19l-2.338-1.871a1.8 1.8 0 0 1-.307-.316L4.686 8.83a1.75 1.75 0 0 1-.298-1.475l.306-1.224a.25.25 0 0 0-.01-.154l-.88-2.2l1.392-.557l.88 2.2c.137.342.162.718.073 1.075L5.843 7.72a.25.25 0 0 0 .043.21l1.138 1.518a.3.3 0 0 0 .044.046l1.597 1.278a1.51 1.51 0 0 1 .27-1.767l.035-.035A1.457 1.457 0 0 1 11 8.94l.177-.177a.25.25 0 0 0 .073-.177v-.283c0-.346.102-.683.294-.97l.721-1.083a1.8 1.8 0 0 1 .485-.485l.22-.146a.25.25 0 0 0 .021-.4l-.964-.803l-.011-.007h-.002q-.003-.002-.016.001l-.014.01q-.002 0-.002.002l-.004.011a1.53 1.53 0 0 1-2.418.924l-.342-.256a1.75 1.75 0 0 1-.516-2.183"></svg:path><svg:path d="M12.592 13.45a.25.25 0 0 0-.292.128l-.406.81a.25.25 0 0 0 0 .224l.576 1.15c.223.448.245.97.06 1.433l-.834 2.084l-1.392-.558l.833-2.083a.25.25 0 0 0-.009-.204l-.575-1.151a1.75 1.75 0 0 1 0-1.566l.405-.81a1.75 1.75 0 0 1 2.046-.9l.629.18c.367.104.69.327.919.632l.505.674l.024.027l.304.304c.64.64.686 1.662.107 2.358l-1.916 2.298l-1.152-.96l1.915-2.299a.25.25 0 0 0-.015-.336l-.304-.304a2 2 0 0 1-.163-.188l-.505-.674a.25.25 0 0 0-.132-.09z"></svg:path><svg:path d="M10 2a8 8 0 1 0 0 16a8 8 0 0 0 0-16M0 10C0 4.477 4.477 0 10 0s10 4.477 10 10s-4.477 10-10 10S0 15.523 0 10"></svg:path></svg:g><svg:path d="M1.293 2.707a1 1 0 0 1 1.414-1.414l16 16a1 1 0 0 1-1.414 1.414z"></svg:path></svg:g>`,
})
export class PepiconsPopEarthAmericasOffIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopEarthAsiaIcon],svg[pepicons-pop-earth-asia-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M10 2a8 8 0 1 0 0 16a8 8 0 0 0 0-16M0 10C0 4.477 4.477 0 10 0s10 4.477 10 10s-4.477 10-10 10S0 15.523 0 10"></svg:path><svg:path d="m12.262 2.701l-.433-.866l1.342-.67l.433.865q.12.243.16.512l.161 1.13c.153 1.074-.877 1.768-1.749 1.504l.369.736c.17.34.197.733.077 1.093c-.363 1.09-1.798 1.327-2.494.416l-.075.15a.104.104 0 0 0 .046.14l.097.048q.249.125.445.321c.427.427.6 1.048.453 1.635l-.464 1.859c-.313 1.249-1.96 1.534-2.674.463a1.5 1.5 0 0 1-.22-.532l-.468-2.34l-.157-.627l-.165.496c-.573 1.718-3.058 1.542-3.382-.24l-.212-1.168a.25.25 0 0 0-.135-.179l-1.552-.776l.67-1.342l1.553.777c.493.246.84.71.94 1.252l.212 1.168a.23.23 0 0 0 .077.147c.035.03.088.053.15.057a.27.27 0 0 0 .159-.035a.23.23 0 0 0 .097-.135l.254-.762a1 1 0 0 1 .069-.166l.549-1.098c.45-.902 1.788-.61 1.853.364l.484 1.937l.46 2.303l.447-1.787a.22.22 0 0 0-.114-.25l-.096-.048A1.604 1.604 0 0 1 8.71 6.9l.105-.21A1.46 1.46 0 0 1 11 6.177l-.55-1.1a1.292 1.292 0 0 1 1.93-1.613l-.101-.71a.2.2 0 0 0-.017-.053m6.339 12.207l-2.152.293a1.75 1.75 0 0 1-1.02-.168l-.168-.085a.25.25 0 0 0-.263.024l-.875.662a1.8 1.8 0 0 1-.473.254l.447-.074a1.75 1.75 0 0 1 1.07.16l.71.355l-.671 1.342l-.71-.355a.25.25 0 0 0-.152-.023l-1.514.253a1.461 1.461 0 0 1-.568-2.866l.862-.198a.3.3 0 0 0 .094-.045l.876-.661a1.75 1.75 0 0 1 1.838-.17l.168.085a.25.25 0 0 0 .146.024l2.153-.293z"></svg:path><svg:path d="m16 4.343l.234-1.577l-1.484-.219l-.241 1.634a.25.25 0 0 1-.085.153l-.945.815c-.4.344-.545.899-.367 1.395c.394 1.095 1.93 1.13 2.374.056l.716-.404a1.8 1.8 0 0 0 .41-.318l.667-.702l-1.087-1.034zm-3.966 5.931a.82.82 0 0 1-.517-.78a.81.81 0 0 1 .534-.786l.104-.442c.183-.78 1.233-.925 1.62-.223c.074.132.111.28.11.43c.664.48.531 1.63-.38 1.85l-.666.163a.88.88 0 0 1-.805-.212m.832-1.202l-.001.003h.005zm-2.307 3.315l-.03.015c-.904.487-.584 1.887.473 1.887c.207 0 .4-.063.56-.17c.157.07.322.088.477.063c.231.092.5.085.736-.04l.529-.277a1.464 1.464 0 0 0-1.084-2.705l-.624.178c-.514.147-.9.551-1.037 1.049m3.468-.932a.987.987 0 0 1 1.53-.824l.3.198l.222-.029a1.085 1.085 0 0 1 .64 2.04l-.126.065a1.49 1.49 0 0 1-1.377-.005l-.078-.04a1.7 1.7 0 0 1-.396-.291l-.303-.301a.9.9 0 0 1-.412-.756z"></svg:path></svg:g>`,
})
export class PepiconsPopEarthAsiaIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopEarthAsiaCircleIcon],svg[pepicons-pop-earth-asia-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M13 5a8 8 0 1 0 0 16a8 8 0 0 0 0-16M3 13C3 7.477 7.477 3 13 3s10 4.477 10 10s-4.477 10-10 10S3 18.523 3 13"></svg:path><svg:path d="m15.262 5.701l-.433-.866l1.342-.67l.433.865q.12.243.16.512l.161 1.13c.153 1.074-.877 1.768-1.749 1.504l.369.736c.17.34.197.733.077 1.093c-.363 1.09-1.798 1.327-2.494.416l-.075.15a.104.104 0 0 0 .046.14l.097.048q.249.125.445.321c.427.427.6 1.048.453 1.635l-.464 1.859c-.313 1.249-1.96 1.534-2.674.463a1.5 1.5 0 0 1-.22-.532l-.468-2.34l-.157-.627l-.165.496c-.573 1.718-3.058 1.542-3.382-.24l-.212-1.168a.25.25 0 0 0-.135-.179l-1.552-.776l.67-1.342l1.553.777c.493.246.84.71.94 1.252l.212 1.168a.23.23 0 0 0 .077.147c.035.03.088.053.15.057a.27.27 0 0 0 .159-.035a.23.23 0 0 0 .097-.135l.254-.762a1 1 0 0 1 .069-.166l.549-1.098c.45-.902 1.788-.61 1.853.364l.484 1.937l.46 2.303l.447-1.787a.22.22 0 0 0-.114-.25l-.096-.048A1.604 1.604 0 0 1 11.71 9.9l.105-.21A1.46 1.46 0 0 1 14 9.177l-.55-1.1a1.292 1.292 0 0 1 1.93-1.613l-.101-.71a.2.2 0 0 0-.017-.053m6.339 12.207l-2.152.293a1.75 1.75 0 0 1-1.02-.168l-.168-.085a.25.25 0 0 0-.263.024l-.875.662a1.8 1.8 0 0 1-.473.254l.447-.074a1.75 1.75 0 0 1 1.07.16l.71.355l-.671 1.342l-.71-.355a.25.25 0 0 0-.152-.023l-1.514.253a1.461 1.461 0 0 1-.568-2.866l.862-.198a.3.3 0 0 0 .094-.045l.876-.661a1.75 1.75 0 0 1 1.838-.17l.168.085a.25.25 0 0 0 .146.024l2.153-.293z"></svg:path><svg:path d="m19 7.343l.234-1.577l-1.484-.219l-.241 1.634a.25.25 0 0 1-.084.153l-.946.815c-.4.344-.545.899-.367 1.395c.394 1.095 1.93 1.13 2.374.056l.716-.404a1.8 1.8 0 0 0 .41-.318l.667-.702l-1.087-1.034zm-3.966 5.931a.82.82 0 0 1-.517-.78a.81.81 0 0 1 .534-.786l.104-.442c.183-.78 1.233-.925 1.62-.223c.074.132.111.28.11.43c.663.48.531 1.63-.38 1.85l-.666.163a.88.88 0 0 1-.805-.212m.832-1.202l-.001.003h.005zm-2.307 3.315l-.03.015c-.904.487-.584 1.886.473 1.886c.207 0 .4-.062.56-.17c.157.072.322.09.477.064c.231.092.5.085.736-.04l.529-.277a1.464 1.464 0 0 0-1.084-2.705l-.624.178c-.514.147-.9.551-1.037 1.049m3.468-.932a.987.987 0 0 1 1.53-.824l.3.198l.222-.029a1.085 1.085 0 0 1 .64 2.04l-.126.065a1.49 1.49 0 0 1-1.378-.005l-.077-.04a1.7 1.7 0 0 1-.396-.291l-.303-.301a.9.9 0 0 1-.412-.756z"></svg:path><svg:path d="M13 24c6.075 0 11-4.925 11-11S19.075 2 13 2S2 6.925 2 13s4.925 11 11 11m0 2c7.18 0 13-5.82 13-13S20.18 0 13 0S0 5.82 0 13s5.82 13 13 13"></svg:path></svg:g>`,
})
export class PepiconsPopEarthAsiaCircleIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopEarthAsiaCircleFilledIcon],svg[pepicons-pop-earth-asia-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPopEarthAsiaCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:g fill="#000" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M13 5a8 8 0 1 0 0 16a8 8 0 0 0 0-16M3 13C3 7.477 7.477 3 13 3s10 4.477 10 10s-4.477 10-10 10S3 18.523 3 13"></svg:path><svg:path d="m15.262 5.701l-.433-.866l1.342-.67l.433.865q.12.243.16.512l.161 1.13c.153 1.074-.877 1.768-1.749 1.504l.369.736c.17.34.197.733.077 1.093c-.363 1.09-1.798 1.327-2.494.416l-.075.15a.104.104 0 0 0 .046.14l.097.048q.249.125.445.321c.427.427.6 1.048.453 1.635l-.464 1.859c-.313 1.249-1.96 1.534-2.674.463a1.5 1.5 0 0 1-.22-.532l-.468-2.34l-.157-.627l-.165.496c-.573 1.718-3.058 1.542-3.382-.24l-.212-1.168a.25.25 0 0 0-.135-.179l-1.552-.776l.67-1.342l1.553.777c.493.246.84.71.94 1.252l.212 1.168a.23.23 0 0 0 .077.147c.035.03.088.053.15.057a.27.27 0 0 0 .159-.035a.23.23 0 0 0 .097-.135l.254-.762a1 1 0 0 1 .069-.166l.549-1.098c.45-.902 1.788-.61 1.853.364l.484 1.937l.46 2.303l.447-1.787a.22.22 0 0 0-.114-.25l-.096-.048A1.604 1.604 0 0 1 11.71 9.9l.105-.21A1.46 1.46 0 0 1 14 9.177l-.55-1.1a1.292 1.292 0 0 1 1.93-1.613l-.101-.71a.2.2 0 0 0-.017-.053m6.339 12.207l-2.152.293a1.75 1.75 0 0 1-1.02-.168l-.168-.085a.25.25 0 0 0-.263.024l-.875.662a1.8 1.8 0 0 1-.473.254l.447-.074a1.75 1.75 0 0 1 1.07.16l.71.355l-.671 1.342l-.71-.355a.25.25 0 0 0-.152-.023l-1.514.253a1.461 1.461 0 0 1-.568-2.866l.862-.198a.3.3 0 0 0 .094-.045l.876-.661a1.75 1.75 0 0 1 1.838-.17l.168.085a.25.25 0 0 0 .146.024l2.153-.293z"></svg:path><svg:path d="m19 7.343l.234-1.577l-1.484-.219l-.241 1.634a.25.25 0 0 1-.084.153l-.946.815c-.4.344-.545.899-.367 1.395c.394 1.095 1.93 1.13 2.374.056l.716-.404a1.8 1.8 0 0 0 .41-.318l.667-.702l-1.087-1.034zm-3.966 5.931a.82.82 0 0 1-.517-.78a.81.81 0 0 1 .534-.786l.104-.442c.183-.78 1.233-.925 1.62-.223c.074.132.111.28.11.43c.663.48.531 1.63-.38 1.85l-.666.163a.88.88 0 0 1-.805-.212m.832-1.202l-.001.003h.005zm-2.307 3.315l-.03.015c-.904.487-.584 1.886.473 1.886c.207 0 .4-.062.56-.17c.157.072.322.09.477.064c.231.092.5.085.736-.04l.529-.277a1.464 1.464 0 0 0-1.084-2.705l-.624.178c-.514.147-.9.551-1.037 1.049m3.468-.932a.987.987 0 0 1 1.53-.824l.3.198l.222-.029a1.085 1.085 0 0 1 .64 2.04l-.126.065a1.49 1.49 0 0 1-1.378-.005l-.077-.04a1.7 1.7 0 0 1-.396-.291l-.303-.301a.9.9 0 0 1-.412-.756z"></svg:path></svg:g></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPopEarthAsiaCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPopEarthAsiaCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopEarthAsiaCircleOffIcon],svg[pepicons-pop-earth-asia-circle-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:g fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M13 5a8 8 0 1 0 0 16a8 8 0 0 0 0-16M3 13C3 7.477 7.477 3 13 3s10 4.477 10 10s-4.477 10-10 10S3 18.523 3 13"></svg:path><svg:path d="m15.262 5.701l-.433-.866l1.342-.67l.433.865q.12.243.16.512l.161 1.13c.153 1.074-.877 1.768-1.749 1.504l.369.736c.17.34.197.733.077 1.093c-.363 1.09-1.798 1.327-2.494.416l-.075.15a.104.104 0 0 0 .046.14l.097.048q.249.125.445.321c.427.427.6 1.048.453 1.635l-.464 1.859c-.313 1.249-1.96 1.534-2.674.463a1.5 1.5 0 0 1-.22-.532l-.468-2.34l-.157-.627l-.165.496c-.573 1.718-3.058 1.542-3.382-.24l-.212-1.168a.25.25 0 0 0-.135-.179l-1.552-.776l.67-1.342l1.553.777c.493.246.84.71.94 1.252l.212 1.168a.23.23 0 0 0 .077.147c.035.03.088.053.15.057a.27.27 0 0 0 .159-.035a.23.23 0 0 0 .097-.135l.254-.762a1 1 0 0 1 .069-.166l.549-1.098c.45-.902 1.788-.61 1.853.364l.484 1.937l.46 2.303l.447-1.787a.22.22 0 0 0-.114-.25l-.096-.048A1.604 1.604 0 0 1 11.71 9.9l.105-.21A1.46 1.46 0 0 1 14 9.177l-.55-1.1a1.292 1.292 0 0 1 1.93-1.613l-.101-.71a.2.2 0 0 0-.017-.053m6.339 12.207l-2.152.293a1.75 1.75 0 0 1-1.02-.168l-.168-.085a.25.25 0 0 0-.263.024l-.875.662a1.8 1.8 0 0 1-.473.254l.447-.074a1.75 1.75 0 0 1 1.07.16l.71.355l-.671 1.342l-.71-.355a.25.25 0 0 0-.152-.023l-1.514.253a1.461 1.461 0 0 1-.568-2.866l.862-.198a.3.3 0 0 0 .094-.045l.876-.661a1.75 1.75 0 0 1 1.838-.17l.168.085a.25.25 0 0 0 .146.024l2.153-.293z"></svg:path><svg:path d="m19 7.343l.234-1.577l-1.484-.219l-.241 1.634a.25.25 0 0 1-.084.153l-.946.815c-.4.344-.545.899-.367 1.395c.394 1.095 1.93 1.13 2.374.056l.716-.404a1.8 1.8 0 0 0 .41-.318l.667-.702l-1.087-1.034zm-3.966 5.931a.82.82 0 0 1-.517-.78a.81.81 0 0 1 .534-.786l.104-.442c.183-.78 1.233-.925 1.62-.223c.074.132.111.28.11.43c.663.48.531 1.63-.38 1.85l-.666.163a.88.88 0 0 1-.805-.212m.832-1.202l-.001.003h.005zm-2.307 3.315l-.03.015c-.904.487-.584 1.886.473 1.886c.207 0 .4-.062.56-.17c.157.072.322.09.477.064c.231.092.5.085.736-.04l.529-.277a1.464 1.464 0 0 0-1.084-2.705l-.624.178c-.514.147-.9.551-1.037 1.049m3.468-.932a.987.987 0 0 1 1.53-.824l.3.198l.222-.029a1.085 1.085 0 0 1 .64 2.04l-.126.065a1.49 1.49 0 0 1-1.378-.005l-.077-.04a1.7 1.7 0 0 1-.396-.291l-.303-.301a.9.9 0 0 1-.412-.756z"></svg:path></svg:g><svg:path d="M4.293 5.707a1 1 0 0 1 1.414-1.414l16 16a1 1 0 0 1-1.414 1.414z"></svg:path><svg:path fill-rule="evenodd" d="M13 24c6.075 0 11-4.925 11-11S19.075 2 13 2S2 6.925 2 13s4.925 11 11 11m0 2c7.18 0 13-5.82 13-13S20.18 0 13 0S0 5.82 0 13s5.82 13 13 13" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPopEarthAsiaCircleOffIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopEarthAsiaOffIcon],svg[pepicons-pop-earth-asia-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:g fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M10 2a8 8 0 1 0 0 16a8 8 0 0 0 0-16M0 10C0 4.477 4.477 0 10 0s10 4.477 10 10s-4.477 10-10 10S0 15.523 0 10"></svg:path><svg:path d="m12.262 2.701l-.433-.866l1.342-.67l.433.865q.12.243.16.512l.161 1.13c.153 1.074-.877 1.768-1.749 1.504l.369.736c.17.34.197.733.077 1.093c-.363 1.09-1.798 1.327-2.494.416l-.075.15a.104.104 0 0 0 .046.14l.097.048q.249.125.445.321c.427.427.6 1.048.453 1.635l-.464 1.859c-.313 1.249-1.96 1.534-2.674.463a1.5 1.5 0 0 1-.22-.532l-.468-2.34l-.157-.627l-.165.496c-.573 1.718-3.058 1.542-3.382-.24l-.212-1.168a.25.25 0 0 0-.135-.179l-1.552-.776l.67-1.342l1.553.777c.493.246.84.71.94 1.252l.212 1.168a.23.23 0 0 0 .077.147c.035.03.088.053.15.057a.27.27 0 0 0 .159-.035a.23.23 0 0 0 .097-.135l.254-.762a1 1 0 0 1 .069-.166l.549-1.098c.45-.902 1.788-.61 1.853.364l.484 1.937l.46 2.303l.447-1.787a.22.22 0 0 0-.114-.25l-.096-.048A1.604 1.604 0 0 1 8.71 6.9l.105-.21A1.46 1.46 0 0 1 11 6.177l-.55-1.1a1.292 1.292 0 0 1 1.93-1.613l-.101-.71a.2.2 0 0 0-.017-.053m6.339 12.207l-2.152.293a1.75 1.75 0 0 1-1.02-.168l-.168-.085a.25.25 0 0 0-.263.024l-.875.662a1.8 1.8 0 0 1-.473.254l.447-.074a1.75 1.75 0 0 1 1.07.16l.71.355l-.671 1.342l-.71-.355a.25.25 0 0 0-.152-.023l-1.514.253a1.461 1.461 0 0 1-.568-2.866l.862-.198a.3.3 0 0 0 .094-.045l.876-.661a1.75 1.75 0 0 1 1.838-.17l.168.085a.25.25 0 0 0 .146.024l2.153-.293z"></svg:path><svg:path d="m16 4.343l.234-1.577l-1.484-.219l-.241 1.634a.25.25 0 0 1-.085.153l-.945.815c-.4.344-.545.899-.367 1.395c.394 1.095 1.93 1.13 2.374.056l.716-.404a1.8 1.8 0 0 0 .41-.318l.667-.702l-1.087-1.034zm-3.966 5.931a.82.82 0 0 1-.517-.78a.81.81 0 0 1 .534-.786l.104-.442c.183-.78 1.233-.925 1.62-.223c.074.132.111.28.11.43c.664.48.531 1.63-.38 1.85l-.666.163a.88.88 0 0 1-.805-.212m.832-1.202l-.001.003h.005zm-2.307 3.315l-.03.015c-.904.487-.584 1.887.473 1.887c.207 0 .4-.063.56-.17c.157.07.322.088.477.063c.231.092.5.085.736-.04l.529-.277a1.464 1.464 0 0 0-1.084-2.705l-.624.178c-.514.147-.9.551-1.037 1.049m3.468-.932a.987.987 0 0 1 1.53-.824l.3.198l.222-.029a1.085 1.085 0 0 1 .64 2.04l-.126.065a1.49 1.49 0 0 1-1.377-.005l-.078-.04a1.7 1.7 0 0 1-.396-.291l-.303-.301a.9.9 0 0 1-.412-.756z"></svg:path></svg:g><svg:path d="M1.293 2.707a1 1 0 0 1 1.414-1.414l16 16a1 1 0 0 1-1.414 1.414z"></svg:path></svg:g>`,
})
export class PepiconsPopEarthAsiaOffIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopEarthEuropeIcon],svg[pepicons-pop-earth-europe-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M10 2a8 8 0 1 0 0 16a8 8 0 0 0 0-16M0 10C0 4.477 4.477 0 10 0s10 4.477 10 10s-4.477 10-10 10S0 15.523 0 10"></svg:path><svg:path d="m10.255 3.014l1.879-1.12l-.768-1.288L9.27 1.854c-.788.47-.86 1.55-.215 2.13l-.469.278a.3.3 0 0 1-.083.031l-1.81.322A1.75 1.75 0 0 0 5.25 6.338v.353a1.56 1.56 0 0 0 1.372 1.548a1.75 1.75 0 0 0-.994.717l-.507.76a1.75 1.75 0 0 0-.241 1.395l.4 1.599l.13.394a1.662 1.662 0 0 0 2.5.857a.16.16 0 0 1 .18 0l.773.516a.25.25 0 0 1 .085.096l.776 1.551a.25.25 0 0 1 .026.112v.787a1.75 1.75 0 0 0 2.4 1.625l.356-.143a1.75 1.75 0 0 0 1.066-1.968l-.236-1.183a.2.2 0 0 1 .056-.185l.03-.03l1.497-.599c.857-.343.718-1.528-.071-1.753l-.65-.65a.25.25 0 0 1-.061-.098l-.053-.159a1.69 1.69 0 0 0 2.03.401l.022-.01a1.717 1.717 0 0 0 .446-2.75l-.351-.35a.062.062 0 1 1 .095-.08l.253.38a1.75 1.75 0 0 0 1.456.779h.465v-1.5h-.465a.25.25 0 0 1-.208-.111l-.253-.38a1.562 1.562 0 1 0-2.404 1.972l.351.351a.217.217 0 0 1-.056.347l-.021.01a.19.19 0 0 1-.249-.072l-.347-.577c-.606-1.012-2.12-.846-2.493.273a1.38 1.38 0 0 0 0 .874l.359 1.076c.086.258.23.492.423.684l.314.315l-.635.254a1.3 1.3 0 0 0-.419.276l-.066.066a1.7 1.7 0 0 0-.466 1.54l.236 1.183a.25.25 0 0 1-.152.282l-.356.142a.25.25 0 0 1-.343-.232v-.787c0-.272-.063-.54-.185-.783l-.775-1.55a1.75 1.75 0 0 0-.595-.674l-.773-.516a1.66 1.66 0 0 0-1.844 0a.162.162 0 0 1-.244-.083l-.113-.34l-.386-1.543a.25.25 0 0 1 .034-.2l.507-.759a.25.25 0 0 1 .173-.109l2.562-.366a.25.25 0 0 1 .212.07l.137.138a1.75 1.75 0 0 0 2.02.327l.803-.4a1.75 1.75 0 0 0 .967-1.566v-.299c1.137-.35 1.342-1.902.3-2.528l-.484-.29a1.63 1.63 0 0 0-2.142.42l-.724.965a.25.25 0 0 1-.2.1H8.236c-.272 0-.54.063-.783.185l-.618.309a.06.06 0 0 1-.085-.053v-.353a.25.25 0 0 1 .206-.246l1.81-.322a1.8 1.8 0 0 0 .585-.217l.686-.407a1.333 1.333 0 0 0 .218-2.132m-2.788 5.09L9.4 7.828a1.75 1.75 0 0 1 1.485.495l.137.137a.25.25 0 0 0 .288.047l.803-.401a.25.25 0 0 0 .138-.224v-.378c0-.561.335-1.06.835-1.278l-.29-.175a.13.13 0 0 0-.17.033l-.725.966c-.33.44-.85.7-1.4.7H8.236a.25.25 0 0 0-.112.026l-.618.31z"></svg:path></svg:g>`,
})
export class PepiconsPopEarthEuropeIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopEarthEuropeCircleIcon],svg[pepicons-pop-earth-europe-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M13 5a8 8 0 1 0 0 16a8 8 0 0 0 0-16M3 13C3 7.477 7.477 3 13 3s10 4.477 10 10s-4.477 10-10 10S3 18.523 3 13"></svg:path><svg:path d="m13.255 6.014l1.879-1.12l-.768-1.288l-2.096 1.248c-.788.47-.86 1.55-.215 2.13l-.469.278a.3.3 0 0 1-.083.031l-1.81.322A1.75 1.75 0 0 0 8.25 9.338v.353a1.56 1.56 0 0 0 1.372 1.548a1.75 1.75 0 0 0-.994.717l-.507.76a1.75 1.75 0 0 0-.241 1.395l.4 1.599l.13.394a1.662 1.662 0 0 0 2.5.857a.16.16 0 0 1 .18 0l.773.516a.25.25 0 0 1 .085.096l.776 1.551a.25.25 0 0 1 .026.112v.787a1.75 1.75 0 0 0 2.4 1.625l.356-.143a1.75 1.75 0 0 0 1.066-1.968l-.236-1.183a.2.2 0 0 1 .056-.185l.03-.03l1.497-.599c.857-.343.718-1.528-.071-1.753l-.65-.65a.25.25 0 0 1-.061-.098l-.053-.159a1.69 1.69 0 0 0 2.03.401l.022-.01a1.717 1.717 0 0 0 .446-2.75l-.351-.35a.062.062 0 1 1 .095-.08l.253.38a1.75 1.75 0 0 0 1.456.779h.465v-1.5h-.465a.25.25 0 0 1-.208-.111l-.253-.38a1.562 1.562 0 1 0-2.404 1.972l.351.351a.217.217 0 0 1-.056.347l-.021.01a.19.19 0 0 1-.249-.072l-.346-.577c-.607-1.012-2.121-.846-2.494.273a1.38 1.38 0 0 0 0 .874l.359 1.076c.086.258.23.492.423.684l.314.315l-.635.254a1.3 1.3 0 0 0-.419.276l-.066.066a1.7 1.7 0 0 0-.466 1.54l.236 1.183a.25.25 0 0 1-.152.282l-.356.142a.25.25 0 0 1-.343-.232v-.787c0-.272-.063-.54-.185-.783l-.775-1.55a1.75 1.75 0 0 0-.595-.674l-.773-.516a1.66 1.66 0 0 0-1.844 0a.162.162 0 0 1-.244-.083l-.113-.34l-.386-1.543a.25.25 0 0 1 .034-.2l.507-.759a.25.25 0 0 1 .173-.109l2.562-.366a.25.25 0 0 1 .212.07l.137.138a1.75 1.75 0 0 0 2.02.327l.803-.4a1.75 1.75 0 0 0 .967-1.566v-.299c1.137-.35 1.342-1.902.3-2.528l-.484-.29a1.63 1.63 0 0 0-2.142.42l-.724.965a.25.25 0 0 1-.2.1h-2.264c-.272 0-.54.063-.783.185l-.618.309a.06.06 0 0 1-.085-.053v-.353a.25.25 0 0 1 .206-.246l1.81-.322a1.8 1.8 0 0 0 .585-.217l.686-.407a1.333 1.333 0 0 0 .218-2.132m-2.788 5.09l1.932-.276a1.75 1.75 0 0 1 1.485.495l.137.137a.25.25 0 0 0 .288.047l.803-.401a.25.25 0 0 0 .138-.224v-.378c0-.561.335-1.06.835-1.278l-.29-.175a.13.13 0 0 0-.17.033l-.725.966c-.33.44-.85.7-1.4.7h-2.264a.25.25 0 0 0-.112.026l-.618.31z"></svg:path><svg:path d="M13 24c6.075 0 11-4.925 11-11S19.075 2 13 2S2 6.925 2 13s4.925 11 11 11m0 2c7.18 0 13-5.82 13-13S20.18 0 13 0S0 5.82 0 13s5.82 13 13 13"></svg:path></svg:g>`,
})
export class PepiconsPopEarthEuropeCircleIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopEarthEuropeCircleFilledIcon],svg[pepicons-pop-earth-europe-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPopEarthEuropeCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:g fill="#000" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M13 5a8 8 0 1 0 0 16a8 8 0 0 0 0-16M3 13C3 7.477 7.477 3 13 3s10 4.477 10 10s-4.477 10-10 10S3 18.523 3 13"></svg:path><svg:path d="m13.255 6.014l1.879-1.12l-.768-1.288l-2.096 1.248c-.788.47-.86 1.55-.215 2.13l-.469.278a.3.3 0 0 1-.083.031l-1.81.322A1.75 1.75 0 0 0 8.25 9.338v.353a1.56 1.56 0 0 0 1.372 1.548a1.75 1.75 0 0 0-.994.717l-.507.76a1.75 1.75 0 0 0-.241 1.395l.4 1.599l.13.394a1.662 1.662 0 0 0 2.5.857a.16.16 0 0 1 .18 0l.773.516a.25.25 0 0 1 .085.096l.776 1.551a.25.25 0 0 1 .026.112v.787a1.75 1.75 0 0 0 2.4 1.625l.356-.143a1.75 1.75 0 0 0 1.066-1.968l-.236-1.183a.2.2 0 0 1 .056-.185l.03-.03l1.497-.599c.857-.343.718-1.528-.071-1.753l-.65-.65a.25.25 0 0 1-.061-.098l-.053-.159a1.69 1.69 0 0 0 2.03.401l.022-.01a1.717 1.717 0 0 0 .446-2.75l-.351-.35a.062.062 0 1 1 .095-.08l.253.38a1.75 1.75 0 0 0 1.456.779h.465v-1.5h-.465a.25.25 0 0 1-.208-.111l-.253-.38a1.562 1.562 0 1 0-2.404 1.972l.351.351a.217.217 0 0 1-.056.347l-.021.01a.19.19 0 0 1-.249-.072l-.346-.577c-.607-1.012-2.121-.846-2.494.273a1.38 1.38 0 0 0 0 .874l.359 1.076c.086.258.23.492.423.684l.314.315l-.635.254a1.3 1.3 0 0 0-.419.276l-.066.066a1.7 1.7 0 0 0-.466 1.54l.236 1.183a.25.25 0 0 1-.152.282l-.356.142a.25.25 0 0 1-.343-.232v-.787c0-.272-.063-.54-.185-.783l-.775-1.55a1.75 1.75 0 0 0-.595-.674l-.773-.516a1.66 1.66 0 0 0-1.844 0a.162.162 0 0 1-.244-.083l-.113-.34l-.386-1.543a.25.25 0 0 1 .034-.2l.507-.759a.25.25 0 0 1 .173-.109l2.562-.366a.25.25 0 0 1 .212.07l.137.138a1.75 1.75 0 0 0 2.02.327l.803-.4a1.75 1.75 0 0 0 .967-1.566v-.299c1.137-.35 1.342-1.902.3-2.528l-.484-.29a1.63 1.63 0 0 0-2.142.42l-.724.965a.25.25 0 0 1-.2.1h-2.264c-.272 0-.54.063-.783.185l-.618.309a.06.06 0 0 1-.085-.053v-.353a.25.25 0 0 1 .206-.246l1.81-.322a1.8 1.8 0 0 0 .585-.217l.686-.407a1.333 1.333 0 0 0 .218-2.132m-2.788 5.09l1.932-.276a1.75 1.75 0 0 1 1.485.495l.137.137a.25.25 0 0 0 .288.047l.803-.401a.25.25 0 0 0 .138-.224v-.378c0-.561.335-1.06.835-1.278l-.29-.175a.13.13 0 0 0-.17.033l-.725.966c-.33.44-.85.7-1.4.7h-2.264a.25.25 0 0 0-.112.026l-.618.31z"></svg:path></svg:g></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPopEarthEuropeCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPopEarthEuropeCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopEarthEuropeCircleOffIcon],svg[pepicons-pop-earth-europe-circle-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:g fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M13 5a8 8 0 1 0 0 16a8 8 0 0 0 0-16M3 13C3 7.477 7.477 3 13 3s10 4.477 10 10s-4.477 10-10 10S3 18.523 3 13"></svg:path><svg:path d="m13.255 6.014l1.879-1.12l-.768-1.288l-2.096 1.248c-.788.47-.86 1.55-.215 2.13l-.469.278a.3.3 0 0 1-.083.031l-1.81.322A1.75 1.75 0 0 0 8.25 9.338v.353a1.56 1.56 0 0 0 1.372 1.548a1.75 1.75 0 0 0-.994.717l-.507.76a1.75 1.75 0 0 0-.241 1.395l.4 1.599l.13.394a1.662 1.662 0 0 0 2.5.857a.16.16 0 0 1 .18 0l.773.516a.25.25 0 0 1 .085.096l.776 1.551a.25.25 0 0 1 .026.112v.787a1.75 1.75 0 0 0 2.4 1.625l.356-.143a1.75 1.75 0 0 0 1.066-1.968l-.236-1.183a.2.2 0 0 1 .056-.185l.03-.03l1.497-.599c.857-.343.718-1.528-.071-1.753l-.65-.65a.25.25 0 0 1-.061-.098l-.053-.159a1.69 1.69 0 0 0 2.03.401l.022-.01a1.717 1.717 0 0 0 .446-2.75l-.351-.35a.062.062 0 1 1 .095-.08l.253.38a1.75 1.75 0 0 0 1.456.779h.465v-1.5h-.465a.25.25 0 0 1-.208-.111l-.253-.38a1.562 1.562 0 1 0-2.404 1.972l.351.351a.217.217 0 0 1-.056.347l-.021.01a.19.19 0 0 1-.249-.072l-.346-.577c-.607-1.012-2.121-.846-2.494.273a1.38 1.38 0 0 0 0 .874l.359 1.076c.086.258.23.492.423.684l.314.315l-.635.254a1.3 1.3 0 0 0-.419.276l-.066.066a1.7 1.7 0 0 0-.466 1.54l.236 1.183a.25.25 0 0 1-.152.282l-.356.142a.25.25 0 0 1-.343-.232v-.787c0-.272-.063-.54-.185-.783l-.775-1.55a1.75 1.75 0 0 0-.595-.674l-.773-.516a1.66 1.66 0 0 0-1.844 0a.162.162 0 0 1-.244-.083l-.113-.34l-.386-1.543a.25.25 0 0 1 .034-.2l.507-.759a.25.25 0 0 1 .173-.109l2.562-.366a.25.25 0 0 1 .212.07l.137.138a1.75 1.75 0 0 0 2.02.327l.803-.4a1.75 1.75 0 0 0 .967-1.566v-.299c1.137-.35 1.342-1.902.3-2.528l-.484-.29a1.63 1.63 0 0 0-2.142.42l-.724.965a.25.25 0 0 1-.2.1h-2.264c-.272 0-.54.063-.783.185l-.618.309a.06.06 0 0 1-.085-.053v-.353a.25.25 0 0 1 .206-.246l1.81-.322a1.8 1.8 0 0 0 .585-.217l.686-.407a1.333 1.333 0 0 0 .218-2.132m-2.788 5.09l1.932-.276a1.75 1.75 0 0 1 1.485.495l.137.137a.25.25 0 0 0 .288.047l.803-.401a.25.25 0 0 0 .138-.224v-.378c0-.561.335-1.06.835-1.278l-.29-.175a.13.13 0 0 0-.17.033l-.725.966c-.33.44-.85.7-1.4.7h-2.264a.25.25 0 0 0-.112.026l-.618.31z"></svg:path></svg:g><svg:path d="M4.293 5.707a1 1 0 0 1 1.414-1.414l16 16a1 1 0 0 1-1.414 1.414z"></svg:path><svg:path fill-rule="evenodd" d="M13 24c6.075 0 11-4.925 11-11S19.075 2 13 2S2 6.925 2 13s4.925 11 11 11m0 2c7.18 0 13-5.82 13-13S20.18 0 13 0S0 5.82 0 13s5.82 13 13 13" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPopEarthEuropeCircleOffIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopEarthEuropeOffIcon],svg[pepicons-pop-earth-europe-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:g fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M10 2a8 8 0 1 0 0 16a8 8 0 0 0 0-16M0 10C0 4.477 4.477 0 10 0s10 4.477 10 10s-4.477 10-10 10S0 15.523 0 10"></svg:path><svg:path d="m10.255 3.014l1.879-1.12l-.768-1.288L9.27 1.854c-.788.47-.86 1.55-.215 2.13l-.469.278a.3.3 0 0 1-.083.031l-1.81.322A1.75 1.75 0 0 0 5.25 6.338v.353a1.56 1.56 0 0 0 1.372 1.548a1.75 1.75 0 0 0-.994.717l-.507.76a1.75 1.75 0 0 0-.241 1.395l.4 1.599l.13.394a1.662 1.662 0 0 0 2.5.857a.16.16 0 0 1 .18 0l.773.516a.25.25 0 0 1 .085.096l.776 1.551a.25.25 0 0 1 .026.112v.787a1.75 1.75 0 0 0 2.4 1.625l.356-.143a1.75 1.75 0 0 0 1.066-1.968l-.236-1.183a.2.2 0 0 1 .056-.185l.03-.03l1.497-.599c.857-.343.718-1.528-.071-1.753l-.65-.65a.25.25 0 0 1-.061-.098l-.053-.159a1.69 1.69 0 0 0 2.03.401l.022-.01a1.717 1.717 0 0 0 .446-2.75l-.351-.35a.062.062 0 1 1 .095-.08l.253.38a1.75 1.75 0 0 0 1.456.779h.465v-1.5h-.465a.25.25 0 0 1-.208-.111l-.253-.38a1.562 1.562 0 1 0-2.404 1.972l.351.351a.217.217 0 0 1-.056.347l-.021.01a.19.19 0 0 1-.249-.072l-.347-.577c-.606-1.012-2.12-.846-2.493.273a1.38 1.38 0 0 0 0 .874l.359 1.076c.086.258.23.492.423.684l.314.315l-.635.254a1.3 1.3 0 0 0-.419.276l-.066.066a1.7 1.7 0 0 0-.466 1.54l.236 1.183a.25.25 0 0 1-.152.282l-.356.142a.25.25 0 0 1-.343-.232v-.787c0-.272-.063-.54-.185-.783l-.775-1.55a1.75 1.75 0 0 0-.595-.674l-.773-.516a1.66 1.66 0 0 0-1.844 0a.162.162 0 0 1-.244-.083l-.113-.34l-.386-1.543a.25.25 0 0 1 .034-.2l.507-.759a.25.25 0 0 1 .173-.109l2.562-.366a.25.25 0 0 1 .212.07l.137.138a1.75 1.75 0 0 0 2.02.327l.803-.4a1.75 1.75 0 0 0 .967-1.566v-.299c1.137-.35 1.342-1.902.3-2.528l-.484-.29a1.63 1.63 0 0 0-2.142.42l-.724.965a.25.25 0 0 1-.2.1H8.236c-.272 0-.54.063-.783.185l-.618.309a.06.06 0 0 1-.085-.053v-.353a.25.25 0 0 1 .206-.246l1.81-.322a1.8 1.8 0 0 0 .585-.217l.686-.407a1.333 1.333 0 0 0 .218-2.132m-2.788 5.09L9.4 7.828a1.75 1.75 0 0 1 1.485.495l.137.137a.25.25 0 0 0 .288.047l.803-.401a.25.25 0 0 0 .138-.224v-.378c0-.561.335-1.06.835-1.278l-.29-.175a.13.13 0 0 0-.17.033l-.725.966c-.33.44-.85.7-1.4.7H8.236a.25.25 0 0 0-.112.026l-.618.31z"></svg:path></svg:g><svg:path d="M1.293 2.707a1 1 0 0 1 1.414-1.414l16 16a1 1 0 0 1-1.414 1.414z"></svg:path></svg:g>`,
})
export class PepiconsPopEarthEuropeOffIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopElectricityIcon],svg[pepicons-pop-electricity-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M15 8h-3.055l1.974-4.606A1 1 0 0 0 13 2H8a1 1 0 0 0-.92.606l-3 7A1 1 0 0 0 5 11h1.734l-2.662 6.627c-.4.995.835 1.836 1.614 1.1l5.024-4.742l4.94-4.225C16.356 9.156 15.93 8 15 8m-5.49.606A1 1 0 0 0 10.428 10h1.864l-2.92 2.498l-1.748 1.65l1.517-3.775A1 1 0 0 0 8.214 9H6.517l2.142-5h2.824z" clip-rule="evenodd"></svg:path>`,
})
export class PepiconsPopElectricityIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopElectricityCircleIcon],svg[pepicons-pop-electricity-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M18 11h-3.055l1.974-4.606A1 1 0 0 0 16 5h-5a1 1 0 0 0-.92.606l-3 7A1 1 0 0 0 8 14h1.734l-2.662 6.627c-.4.995.835 1.836 1.614 1.1l5.024-4.742l4.94-4.225c.706-.604.279-1.76-.65-1.76m-5.49.606A1 1 0 0 0 13.428 13h1.864l-2.92 2.498l-1.748 1.65l1.517-3.775A1 1 0 0 0 11.214 12H9.517l2.142-5h2.824z"></svg:path><svg:path d="M13 24c6.075 0 11-4.925 11-11S19.075 2 13 2S2 6.925 2 13s4.925 11 11 11m0 2c7.18 0 13-5.82 13-13S20.18 0 13 0S0 5.82 0 13s5.82 13 13 13"></svg:path></svg:g>`,
})
export class PepiconsPopElectricityCircleIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopElectricityCircleFilledIcon],svg[pepicons-pop-electricity-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPopElectricityCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:path fill="#000" fill-rule="evenodd" d="M18 11h-3.055l1.974-4.606A1 1 0 0 0 16 5h-5a1 1 0 0 0-.92.606l-3 7A1 1 0 0 0 8 14h1.734l-2.662 6.627c-.4.995.835 1.836 1.614 1.1l5.024-4.742l4.94-4.225c.706-.604.279-1.76-.65-1.76m-5.49.606A1 1 0 0 0 13.428 13h1.864l-2.92 2.498l-1.748 1.65l1.517-3.775A1 1 0 0 0 11.214 12H9.517l2.142-5h2.824z" clip-rule="evenodd"></svg:path></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPopElectricityCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPopElectricityCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopElectricityCircleOffIcon],svg[pepicons-pop-electricity-circle-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M18 11h-3.055l1.974-4.606A1 1 0 0 0 16 5h-5a1 1 0 0 0-.92.606l-3 7A1 1 0 0 0 8 14h1.734l-2.662 6.627c-.4.995.835 1.836 1.614 1.1l5.024-4.742l4.94-4.225c.706-.604.279-1.76-.65-1.76m-5.49.606A1 1 0 0 0 13.428 13h1.864l-2.92 2.498l-1.748 1.65l1.517-3.775A1 1 0 0 0 11.214 12H9.517l2.142-5h2.824z" clip-rule="evenodd"></svg:path><svg:path d="M4.293 5.707a1 1 0 0 1 1.414-1.414l16 16a1 1 0 0 1-1.414 1.414z"></svg:path><svg:path fill-rule="evenodd" d="M13 24c6.075 0 11-4.925 11-11S19.075 2 13 2S2 6.925 2 13s4.925 11 11 11m0 2c7.18 0 13-5.82 13-13S20.18 0 13 0S0 5.82 0 13s5.82 13 13 13" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPopElectricityCircleOffIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopElectricityOffIcon],svg[pepicons-pop-electricity-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M15 8h-3.055l1.974-4.606A1 1 0 0 0 13 2H8a1 1 0 0 0-.92.606l-3 7A1 1 0 0 0 5 11h1.734l-2.662 6.627c-.4.995.835 1.836 1.614 1.1l5.024-4.742l4.94-4.225C16.356 9.156 15.93 8 15 8m-5.49.606A1 1 0 0 0 10.428 10h1.864l-2.92 2.498l-1.748 1.65l1.517-3.775A1 1 0 0 0 8.214 9H6.517l2.142-5h2.824z" clip-rule="evenodd"></svg:path><svg:path d="M1.293 2.707a1 1 0 0 1 1.414-1.414l16 16a1 1 0 0 1-1.414 1.414z"></svg:path></svg:g>`,
})
export class PepiconsPopElectricityOffIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopEnterIcon],svg[pepicons-pop-enter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M8.226 7.232a1 1 0 0 1 1.409.128l2.083 2.5a1 1 0 1 1-1.536 1.28l-2.084-2.5a1 1 0 0 1 .128-1.408"></svg:path><svg:path d="M8.226 13.768a1 1 0 0 1-.128-1.408l2.084-2.5a1 1 0 1 1 1.536 1.28l-2.083 2.5a1 1 0 0 1-1.409.128"></svg:path><svg:path d="M10.7 10.5a1 1 0 0 1-1 1H3.2a1 1 0 1 1 0-2h6.5a1 1 0 0 1 1 1m5.55 7a1 1 0 0 1-1 1h-9a1 1 0 1 1 0-2h9a1 1 0 0 1 1 1m0-14a1 1 0 0 1-1 1h-9a1 1 0 1 1 0-2h9a1 1 0 0 1 1 1"></svg:path><svg:path d="M6.25 18.5a1 1 0 0 1-1-1v-4a1 1 0 1 1 2 0v4a1 1 0 0 1-1 1m0-10a1 1 0 0 1-1-1v-4a1 1 0 0 1 2 0v4a1 1 0 0 1-1 1m9.35 10a1 1 0 0 1-1-1v-14a1 1 0 1 1 2 0v14a1 1 0 0 1-1 1"></svg:path></svg:g>`,
})
export class PepiconsPopEnterIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopEnterCircleIcon],svg[pepicons-pop-enter-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M11.226 10.232a1 1 0 0 1 1.409.128l2.083 2.5a1 1 0 1 1-1.536 1.28l-2.084-2.5a1 1 0 0 1 .128-1.408"></svg:path><svg:path d="M11.226 16.768a1 1 0 0 1-.128-1.408l2.084-2.5a1 1 0 1 1 1.536 1.28l-2.083 2.5a1 1 0 0 1-1.409.128"></svg:path><svg:path d="M13.7 13.5a1 1 0 0 1-1 1H6.2a1 1 0 1 1 0-2h6.5a1 1 0 0 1 1 1m5.55 7a1 1 0 0 1-1 1h-9a1 1 0 1 1 0-2h9a1 1 0 0 1 1 1m0-14a1 1 0 0 1-1 1h-9a1 1 0 1 1 0-2h9a1 1 0 0 1 1 1"></svg:path><svg:path d="M9.25 21.5a1 1 0 0 1-1-1v-4a1 1 0 1 1 2 0v4a1 1 0 0 1-1 1m0-10a1 1 0 0 1-1-1v-4a1 1 0 0 1 2 0v4a1 1 0 0 1-1 1m9.35 10a1 1 0 0 1-1-1v-14a1 1 0 1 1 2 0v14a1 1 0 0 1-1 1"></svg:path><svg:path d="M13 24c6.075 0 11-4.925 11-11S19.075 2 13 2S2 6.925 2 13s4.925 11 11 11m0 2c7.18 0 13-5.82 13-13S20.18 0 13 0S0 5.82 0 13s5.82 13 13 13"></svg:path></svg:g>`,
})
export class PepiconsPopEnterCircleIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopEnterCircleFilledIcon],svg[pepicons-pop-enter-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPopEnterCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:g fill="#000" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M11.226 10.232a1 1 0 0 1 1.409.128l2.083 2.5a1 1 0 1 1-1.536 1.28l-2.084-2.5a1 1 0 0 1 .128-1.408"></svg:path><svg:path d="M11.226 16.768a1 1 0 0 1-.128-1.408l2.084-2.5a1 1 0 1 1 1.536 1.28l-2.083 2.5a1 1 0 0 1-1.409.128"></svg:path><svg:path d="M13.7 13.5a1 1 0 0 1-1 1H6.2a1 1 0 1 1 0-2h6.5a1 1 0 0 1 1 1m5.55 7a1 1 0 0 1-1 1h-9a1 1 0 1 1 0-2h9a1 1 0 0 1 1 1m0-14a1 1 0 0 1-1 1h-9a1 1 0 1 1 0-2h9a1 1 0 0 1 1 1"></svg:path><svg:path d="M9.25 21.5a1 1 0 0 1-1-1v-4a1 1 0 1 1 2 0v4a1 1 0 0 1-1 1m0-10a1 1 0 0 1-1-1v-4a1 1 0 0 1 2 0v4a1 1 0 0 1-1 1m9.35 10a1 1 0 0 1-1-1v-14a1 1 0 1 1 2 0v14a1 1 0 0 1-1 1"></svg:path></svg:g></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPopEnterCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPopEnterCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopEnterCircleOffIcon],svg[pepicons-pop-enter-circle-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M11.226 10.232a1 1 0 0 1 1.409.128l2.083 2.5a1 1 0 1 1-1.536 1.28l-2.084-2.5a1 1 0 0 1 .128-1.408" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M11.226 16.768a1 1 0 0 1-.128-1.408l2.084-2.5a1 1 0 1 1 1.536 1.28l-2.083 2.5a1 1 0 0 1-1.409.128" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M13.7 13.5a1 1 0 0 1-1 1H6.2a1 1 0 1 1 0-2h6.5a1 1 0 0 1 1 1m5.55 7a1 1 0 0 1-1 1h-9a1 1 0 1 1 0-2h9a1 1 0 0 1 1 1m0-14a1 1 0 0 1-1 1h-9a1 1 0 1 1 0-2h9a1 1 0 0 1 1 1" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M9.25 21.5a1 1 0 0 1-1-1v-4a1 1 0 1 1 2 0v4a1 1 0 0 1-1 1m0-10a1 1 0 0 1-1-1v-4a1 1 0 0 1 2 0v4a1 1 0 0 1-1 1m9.35 10a1 1 0 0 1-1-1v-14a1 1 0 1 1 2 0v14a1 1 0 0 1-1 1" clip-rule="evenodd"></svg:path><svg:path d="M4.293 5.707a1 1 0 0 1 1.414-1.414l16 16a1 1 0 0 1-1.414 1.414z"></svg:path><svg:path fill-rule="evenodd" d="M13 24c6.075 0 11-4.925 11-11S19.075 2 13 2S2 6.925 2 13s4.925 11 11 11m0 2c7.18 0 13-5.82 13-13S20.18 0 13 0S0 5.82 0 13s5.82 13 13 13" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPopEnterCircleOffIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopEnterOffIcon],svg[pepicons-pop-enter-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M8.226 7.232a1 1 0 0 1 1.409.128l2.083 2.5a1 1 0 1 1-1.536 1.28l-2.084-2.5a1 1 0 0 1 .128-1.408" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M8.226 13.768a1 1 0 0 1-.128-1.408l2.084-2.5a1 1 0 1 1 1.536 1.28l-2.083 2.5a1 1 0 0 1-1.409.128" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M10.7 10.5a1 1 0 0 1-1 1H3.2a1 1 0 1 1 0-2h6.5a1 1 0 0 1 1 1m5.55 7a1 1 0 0 1-1 1h-9a1 1 0 1 1 0-2h9a1 1 0 0 1 1 1m0-14a1 1 0 0 1-1 1h-9a1 1 0 1 1 0-2h9a1 1 0 0 1 1 1" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M6.25 18.5a1 1 0 0 1-1-1v-4a1 1 0 1 1 2 0v4a1 1 0 0 1-1 1m0-10a1 1 0 0 1-1-1v-4a1 1 0 0 1 2 0v4a1 1 0 0 1-1 1m9.35 10a1 1 0 0 1-1-1v-14a1 1 0 1 1 2 0v14a1 1 0 0 1-1 1" clip-rule="evenodd"></svg:path><svg:path d="M1.293 2.707a1 1 0 0 1 1.414-1.414l16 16a1 1 0 0 1-1.414 1.414z"></svg:path></svg:g>`,
})
export class PepiconsPopEnterOffIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopEqualIcon],svg[pepicons-pop-equal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4 7a1 1 0 0 1 1-1h10a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1m0 6a1 1 0 0 1 1-1h10a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1" clip-rule="evenodd"></svg:path>`,
})
export class PepiconsPopEqualIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopEqualCircleIcon],svg[pepicons-pop-equal-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M7 10a1 1 0 0 1 1-1h10a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1m0 6a1 1 0 0 1 1-1h10a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1"></svg:path><svg:path d="M13 24c6.075 0 11-4.925 11-11S19.075 2 13 2S2 6.925 2 13s4.925 11 11 11m0 2c7.18 0 13-5.82 13-13S20.18 0 13 0S0 5.82 0 13s5.82 13 13 13"></svg:path></svg:g>`,
})
export class PepiconsPopEqualCircleIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopEqualCircleFilledIcon],svg[pepicons-pop-equal-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPopEqualCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:path fill="#000" fill-rule="evenodd" d="M7 10a1 1 0 0 1 1-1h10a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1m0 6a1 1 0 0 1 1-1h10a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1" clip-rule="evenodd"></svg:path></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPopEqualCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPopEqualCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopEqualCircleOffIcon],svg[pepicons-pop-equal-circle-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M7 10a1 1 0 0 1 1-1h10a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1m0 6a1 1 0 0 1 1-1h10a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1" clip-rule="evenodd"></svg:path><svg:path d="M4.293 5.707a1 1 0 0 1 1.414-1.414l16 16a1 1 0 0 1-1.414 1.414z"></svg:path><svg:path fill-rule="evenodd" d="M13 24c6.075 0 11-4.925 11-11S19.075 2 13 2S2 6.925 2 13s4.925 11 11 11m0 2c7.18 0 13-5.82 13-13S20.18 0 13 0S0 5.82 0 13s5.82 13 13 13" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPopEqualCircleOffIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopEqualOffIcon],svg[pepicons-pop-equal-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M4 7a1 1 0 0 1 1-1h10a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1m0 6a1 1 0 0 1 1-1h10a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1" clip-rule="evenodd"></svg:path><svg:path d="M1.293 2.707a1 1 0 0 1 1.414-1.414l16 16a1 1 0 0 1-1.414 1.414z"></svg:path></svg:g>`,
})
export class PepiconsPopEqualOffIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopEuroIcon],svg[pepicons-pop-euro-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M12.489 4C9.43 4 7 6.213 7 9.5c0 3.387 2.527 6 5.489 6c.743 0 1.451-.161 2.098-.454a1 1 0 1 1 .826 1.821a7.1 7.1 0 0 1-2.924.633C8.283 17.5 5 13.845 5 9.5C5 5.055 8.38 2 12.489 2q1.855.001 3.574 1.174a1 1 0 1 1-1.126 1.652C14.08 4.242 13.274 4 12.489 4"></svg:path><svg:path d="M3 8a1 1 0 0 1 1-1h9a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1m0 3.5a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1"></svg:path></svg:g>`,
})
export class PepiconsPopEuroIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopEuroCircleIcon],svg[pepicons-pop-euro-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M15.489 7C12.43 7 10 9.213 10 12.5c0 3.387 2.527 6 5.489 6c.743 0 1.451-.161 2.098-.454a1 1 0 1 1 .826 1.821a7.1 7.1 0 0 1-2.924.633C11.283 20.5 8 16.846 8 12.5C8 8.055 11.38 5 15.489 5q1.855.001 3.574 1.174a1 1 0 1 1-1.126 1.652C17.079 7.242 16.274 7 15.489 7"></svg:path><svg:path d="M6 11a1 1 0 0 1 1-1h9a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1m0 3.5a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1"></svg:path><svg:path d="M13 24c6.075 0 11-4.925 11-11S19.075 2 13 2S2 6.925 2 13s4.925 11 11 11m0 2c7.18 0 13-5.82 13-13S20.18 0 13 0S0 5.82 0 13s5.82 13 13 13"></svg:path></svg:g>`,
})
export class PepiconsPopEuroCircleIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopEuroCircleFilledIcon],svg[pepicons-pop-euro-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPopEuroCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:g fill="#000" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M15.489 7C12.43 7 10 9.213 10 12.5c0 3.387 2.527 6 5.489 6c.743 0 1.451-.161 2.098-.454a1 1 0 1 1 .826 1.821a7.1 7.1 0 0 1-2.924.633C11.283 20.5 8 16.846 8 12.5C8 8.055 11.38 5 15.489 5q1.855.001 3.574 1.174a1 1 0 1 1-1.126 1.652C17.079 7.242 16.274 7 15.489 7"></svg:path><svg:path d="M6 11a1 1 0 0 1 1-1h9a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1m0 3.5a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1"></svg:path></svg:g></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPopEuroCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPopEuroCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopEuroCircleOffIcon],svg[pepicons-pop-euro-circle-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M15.489 7C12.43 7 10 9.213 10 12.5c0 3.387 2.527 6 5.489 6c.743 0 1.451-.161 2.098-.454a1 1 0 1 1 .826 1.821a7.1 7.1 0 0 1-2.924.633C11.283 20.5 8 16.846 8 12.5C8 8.055 11.38 5 15.489 5q1.855.001 3.574 1.174a1 1 0 1 1-1.126 1.652C17.079 7.242 16.274 7 15.489 7" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M6 11a1 1 0 0 1 1-1h9a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1m0 3.5a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1" clip-rule="evenodd"></svg:path><svg:path d="M4.293 5.707a1 1 0 0 1 1.414-1.414l16 16a1 1 0 0 1-1.414 1.414z"></svg:path><svg:path fill-rule="evenodd" d="M13 24c6.075 0 11-4.925 11-11S19.075 2 13 2S2 6.925 2 13s4.925 11 11 11m0 2c7.18 0 13-5.82 13-13S20.18 0 13 0S0 5.82 0 13s5.82 13 13 13" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPopEuroCircleOffIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopEuroOffIcon],svg[pepicons-pop-euro-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M12.489 4C9.43 4 7 6.213 7 9.5c0 3.387 2.527 6 5.489 6c.743 0 1.451-.161 2.098-.454a1 1 0 1 1 .826 1.821a7.1 7.1 0 0 1-2.924.633C8.283 17.5 5 13.845 5 9.5C5 5.055 8.38 2 12.489 2q1.855.001 3.574 1.174a1 1 0 1 1-1.126 1.652C14.08 4.242 13.274 4 12.489 4" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M3 8a1 1 0 0 1 1-1h9a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1m0 3.5a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1" clip-rule="evenodd"></svg:path><svg:path d="M1.293 2.707a1 1 0 0 1 1.414-1.414l16 16a1 1 0 0 1-1.414 1.414z"></svg:path></svg:g>`,
})
export class PepiconsPopEuroOffIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopExclamationIcon],svg[pepicons-pop-exclamation-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M10 2a2 2 0 0 1 2 2v7a2 2 0 1 1-4 0V4a2 2 0 0 1 2-2" clip-rule="evenodd"></svg:path><svg:path d="M12 16a2 2 0 1 1-4 0a2 2 0 0 1 4 0"></svg:path></svg:g>`,
})
export class PepiconsPopExclamationIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopExclamationCircleIcon],svg[pepicons-pop-exclamation-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M13 5a2 2 0 0 1 2 2v7a2 2 0 1 1-4 0V7a2 2 0 0 1 2-2" clip-rule="evenodd"></svg:path><svg:path d="M15 19a2 2 0 1 1-4 0a2 2 0 0 1 4 0"></svg:path><svg:path fill-rule="evenodd" d="M13 24c6.075 0 11-4.925 11-11S19.075 2 13 2S2 6.925 2 13s4.925 11 11 11m0 2c7.18 0 13-5.82 13-13S20.18 0 13 0S0 5.82 0 13s5.82 13 13 13" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPopExclamationCircleIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopExclamationCircleFilledIcon],svg[pepicons-pop-exclamation-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPopExclamationCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:g fill="#000"><svg:path fill-rule="evenodd" d="M13 5a2 2 0 0 1 2 2v7a2 2 0 1 1-4 0V7a2 2 0 0 1 2-2" clip-rule="evenodd"></svg:path><svg:path d="M15 19a2 2 0 1 1-4 0a2 2 0 0 1 4 0"></svg:path></svg:g></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPopExclamationCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPopExclamationCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopExclamationCircleOffIcon],svg[pepicons-pop-exclamation-circle-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M13 5a2 2 0 0 1 2 2v7a2 2 0 1 1-4 0V7a2 2 0 0 1 2-2" clip-rule="evenodd"></svg:path><svg:path d="M15 19a2 2 0 1 1-4 0a2 2 0 0 1 4 0M4.293 5.707a1 1 0 0 1 1.414-1.414l16 16a1 1 0 0 1-1.414 1.414z"></svg:path><svg:path fill-rule="evenodd" d="M13 24c6.075 0 11-4.925 11-11S19.075 2 13 2S2 6.925 2 13s4.925 11 11 11m0 2c7.18 0 13-5.82 13-13S20.18 0 13 0S0 5.82 0 13s5.82 13 13 13" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPopExclamationCircleOffIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopExclamationFilledIcon],svg[pepicons-pop-exclamation-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10 18a8 8 0 1 1 0-16a8 8 0 0 1 0 16Zm0-12a1 1 0 0 0-1 1v4a1 1 0 1 0 2 0V7a1 1 0 0 0-1-1Zm0 9a1 1 0 1 0 0-2a1 1 0 0 0 0 2Z" clip-rule="evenodd"></svg:path>`,
})
export class PepiconsPopExclamationFilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopExclamationOffIcon],svg[pepicons-pop-exclamation-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M10 2a2 2 0 0 1 2 2v7a2 2 0 1 1-4 0V4a2 2 0 0 1 2-2" clip-rule="evenodd"></svg:path><svg:path d="M12 16a2 2 0 1 1-4 0a2 2 0 0 1 4 0M1.293 2.707a1 1 0 0 1 1.414-1.414l16 16a1 1 0 0 1-1.414 1.414z"></svg:path></svg:g>`,
})
export class PepiconsPopExclamationOffIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopExpandIcon],svg[pepicons-pop-expand-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M5.707 15.707a1 1 0 0 1-1.414-1.414l4-4a1 1 0 1 1 1.414 1.414z"></svg:path><svg:path d="M5 16a1 1 0 1 1 0-2h4a1 1 0 1 1 0 2z"></svg:path><svg:path d="M6 15a1 1 0 1 1-2 0v-4a1 1 0 1 1 2 0zm5.707-5.293a1 1 0 0 1-1.414-1.414l4-4a1 1 0 1 1 1.414 1.414z"></svg:path><svg:path d="M16 9a1 1 0 1 1-2 0V5a1 1 0 1 1 2 0z"></svg:path><svg:path d="M11 6a1 1 0 1 1 0-2h4a1 1 0 1 1 0 2z"></svg:path></svg:g>`,
})
export class PepiconsPopExpandIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopExpandCircleIcon],svg[pepicons-pop-expand-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M8.707 18.707a1 1 0 0 1-1.414-1.414l4-4a1 1 0 1 1 1.414 1.414z"></svg:path><svg:path d="M8 19a1 1 0 1 1 0-2h4a1 1 0 1 1 0 2z"></svg:path><svg:path d="M9 18a1 1 0 1 1-2 0v-4a1 1 0 1 1 2 0zm5.707-5.293a1 1 0 0 1-1.414-1.414l4-4a1 1 0 1 1 1.414 1.414z"></svg:path><svg:path d="M19 12a1 1 0 1 1-2 0V8a1 1 0 1 1 2 0z"></svg:path><svg:path d="M14 9a1 1 0 1 1 0-2h4a1 1 0 1 1 0 2z"></svg:path><svg:path fill-rule="evenodd" d="M13 24c6.075 0 11-4.925 11-11S19.075 2 13 2S2 6.925 2 13s4.925 11 11 11m0 2c7.18 0 13-5.82 13-13S20.18 0 13 0S0 5.82 0 13s5.82 13 13 13" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPopExpandCircleIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopExpandCircleFilledIcon],svg[pepicons-pop-expand-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPopExpandCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:g fill="#000"><svg:path d="M8.707 18.707a1 1 0 0 1-1.414-1.414l4-4a1 1 0 1 1 1.414 1.414z"></svg:path><svg:path d="M8 19a1 1 0 1 1 0-2h4a1 1 0 1 1 0 2z"></svg:path><svg:path d="M9 18a1 1 0 1 1-2 0v-4a1 1 0 1 1 2 0zm5.707-5.293a1 1 0 0 1-1.414-1.414l4-4a1 1 0 1 1 1.414 1.414z"></svg:path><svg:path d="M19 12a1 1 0 1 1-2 0V8a1 1 0 1 1 2 0z"></svg:path><svg:path d="M14 9a1 1 0 1 1 0-2h4a1 1 0 1 1 0 2z"></svg:path></svg:g></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPopExpandCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPopExpandCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopExpandCircleOffIcon],svg[pepicons-pop-expand-circle-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M8.707 18.707a1 1 0 0 1-1.414-1.414l4-4a1 1 0 1 1 1.414 1.414z"></svg:path><svg:path d="M8 19a1 1 0 1 1 0-2h4a1 1 0 1 1 0 2z"></svg:path><svg:path d="M9 18a1 1 0 1 1-2 0v-4a1 1 0 1 1 2 0zm5.707-5.293a1 1 0 0 1-1.414-1.414l4-4a1 1 0 1 1 1.414 1.414z"></svg:path><svg:path d="M19 12a1 1 0 1 1-2 0V8a1 1 0 1 1 2 0z"></svg:path><svg:path d="M14 9a1 1 0 1 1 0-2h4a1 1 0 1 1 0 2zM4.293 5.707a1 1 0 0 1 1.414-1.414l16 16a1 1 0 0 1-1.414 1.414z"></svg:path><svg:path fill-rule="evenodd" d="M13 24c6.075 0 11-4.925 11-11S19.075 2 13 2S2 6.925 2 13s4.925 11 11 11m0 2c7.18 0 13-5.82 13-13S20.18 0 13 0S0 5.82 0 13s5.82 13 13 13" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPopExpandCircleOffIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopExpandOffIcon],svg[pepicons-pop-expand-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M5.707 15.707a1 1 0 0 1-1.414-1.414l4-4a1 1 0 1 1 1.414 1.414z"></svg:path><svg:path d="M5 16a1 1 0 1 1 0-2h4a1 1 0 1 1 0 2z"></svg:path><svg:path d="M6 15a1 1 0 1 1-2 0v-4a1 1 0 1 1 2 0zm5.707-5.293a1 1 0 0 1-1.414-1.414l4-4a1 1 0 1 1 1.414 1.414z"></svg:path><svg:path d="M16 9a1 1 0 1 1-2 0V5a1 1 0 1 1 2 0z"></svg:path><svg:path d="M11 6a1 1 0 1 1 0-2h4a1 1 0 1 1 0 2zM1.293 2.707a1 1 0 0 1 1.414-1.414l16 16a1 1 0 0 1-1.414 1.414z"></svg:path></svg:g>`,
})
export class PepiconsPopExpandOffIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopEyeIcon],svg[pepicons-pop-eye-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M10 16.5c4.897 0 9-2.308 9-5.5s-4.103-5.5-9-5.5S1 7.808 1 11s4.103 5.5 9 5.5m0-9c3.94 0 7 1.722 7 3.5s-3.06 3.5-7 3.5s-7-1.722-7-3.5s3.06-3.5 7-3.5" clip-rule="evenodd"></svg:path><svg:path d="M9 3.5a1 1 0 0 1 2 0v3a1 1 0 1 1-2 0zm4.02.304a1 1 0 0 1 1.96.392l-.5 2.5a1 1 0 0 1-1.96-.392zm-6.04 0a1 1 0 0 0-1.96.392l.5 2.5a1 1 0 0 0 1.96-.392zM2.857 4.986a1 1 0 1 0-1.714 1.029l1.5 2.5a1 1 0 1 0 1.714-1.03zm14.286 0a1 1 0 0 1 1.715 1.029l-1.5 2.5a1 1 0 0 1-1.716-1.03z"></svg:path><svg:path fill-rule="evenodd" d="M10 14a3.5 3.5 0 1 0 0-7a3.5 3.5 0 0 0 0 7m0-5a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPopEyeIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopEyeCircleIcon],svg[pepicons-pop-eye-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M13 19.5c4.897 0 9-2.308 9-5.5s-4.103-5.5-9-5.5s-9 2.308-9 5.5s4.103 5.5 9 5.5m0-9c3.94 0 7 1.722 7 3.5s-3.06 3.5-7 3.5s-7-1.722-7-3.5s3.06-3.5 7-3.5" clip-rule="evenodd"></svg:path><svg:path d="M12 6.5a1 1 0 0 1 2 0v3a1 1 0 1 1-2 0zm4.02.304a1 1 0 0 1 1.96.392l-.5 2.5a1 1 0 0 1-1.96-.392zm-6.04 0a1 1 0 0 0-1.96.392l.5 2.5a1 1 0 0 0 1.96-.392zM5.857 7.986a1 1 0 1 0-1.714 1.029l1.5 2.5a1 1 0 1 0 1.714-1.03zm14.286 0a1 1 0 0 1 1.715 1.029l-1.5 2.5a1 1 0 0 1-1.716-1.03z"></svg:path><svg:path fill-rule="evenodd" d="M13 17a3.5 3.5 0 1 0 0-7a3.5 3.5 0 0 0 0 7m0-5a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M13 24c6.075 0 11-4.925 11-11S19.075 2 13 2S2 6.925 2 13s4.925 11 11 11m0 2c7.18 0 13-5.82 13-13S20.18 0 13 0S0 5.82 0 13s5.82 13 13 13" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPopEyeCircleIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopEyeCircleFilledIcon],svg[pepicons-pop-eye-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPopEyeCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:g fill="#000"><svg:path fill-rule="evenodd" d="M13 19.5c4.897 0 9-2.308 9-5.5s-4.103-5.5-9-5.5s-9 2.308-9 5.5s4.103 5.5 9 5.5m0-9c3.94 0 7 1.722 7 3.5s-3.06 3.5-7 3.5s-7-1.722-7-3.5s3.06-3.5 7-3.5" clip-rule="evenodd"></svg:path><svg:path d="M12 6.5a1 1 0 0 1 2 0v3a1 1 0 1 1-2 0zm4.02.304a1 1 0 0 1 1.96.392l-.5 2.5a1 1 0 0 1-1.96-.392zm-6.04 0a1 1 0 0 0-1.96.392l.5 2.5a1 1 0 0 0 1.96-.392zM5.857 7.986a1 1 0 1 0-1.714 1.029l1.5 2.5a1 1 0 1 0 1.714-1.03zm14.286 0a1 1 0 0 1 1.715 1.029l-1.5 2.5a1 1 0 0 1-1.716-1.03z"></svg:path><svg:path fill-rule="evenodd" d="M13 17a3.5 3.5 0 1 0 0-7a3.5 3.5 0 0 0 0 7m0-5a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3" clip-rule="evenodd"></svg:path></svg:g></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPopEyeCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPopEyeCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopEyeCircleOffIcon],svg[pepicons-pop-eye-circle-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M13 19.5c4.897 0 9-2.308 9-5.5s-4.103-5.5-9-5.5s-9 2.308-9 5.5s4.103 5.5 9 5.5m0-9c3.94 0 7 1.722 7 3.5s-3.06 3.5-7 3.5s-7-1.722-7-3.5s3.06-3.5 7-3.5" clip-rule="evenodd"></svg:path><svg:path d="M12 6.5a1 1 0 0 1 2 0v3a1 1 0 1 1-2 0zm4.02.304a1 1 0 0 1 1.96.392l-.5 2.5a1 1 0 0 1-1.96-.392zm-6.04 0a1 1 0 0 0-1.96.392l.5 2.5a1 1 0 0 0 1.96-.392zM5.857 7.986a1 1 0 1 0-1.714 1.029l1.5 2.5a1 1 0 1 0 1.714-1.03zm14.286 0a1 1 0 0 1 1.715 1.029l-1.5 2.5a1 1 0 0 1-1.716-1.03z"></svg:path><svg:path fill-rule="evenodd" d="M13 17a3.5 3.5 0 1 0 0-7a3.5 3.5 0 0 0 0 7m0-5a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3" clip-rule="evenodd"></svg:path><svg:path d="M4.293 5.707a1 1 0 0 1 1.414-1.414l16 16a1 1 0 0 1-1.414 1.414z"></svg:path><svg:path fill-rule="evenodd" d="M13 24c6.075 0 11-4.925 11-11S19.075 2 13 2S2 6.925 2 13s4.925 11 11 11m0 2c7.18 0 13-5.82 13-13S20.18 0 13 0S0 5.82 0 13s5.82 13 13 13" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPopEyeCircleOffIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopEyeClosedIcon],svg[pepicons-pop-eye-closed-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M1.688 8.306a1 1 0 1 1 1.624-1.167c.304.423.773.827 1.38 1.177C5.985 9.062 7.777 9.5 9.704 9.5c1.928 0 3.72-.437 5.013-1.184c.607-.35 1.076-.754 1.38-1.177a1 1 0 1 1 1.624 1.167c-.48.669-1.164 1.257-2.004 1.742c-1.612.93-3.748 1.452-6.013 1.452s-4.4-.522-6.012-1.452c-.84-.485-1.524-1.073-2.004-1.742"></svg:path><svg:path d="M11 11a1 1 0 1 0-2 0v2.5a1 1 0 1 0 2 0zm-5.47-.242a1 1 0 0 1 1.94.485l-.5 2a1 1 0 1 1-1.94-.486zm8.44 0a1 1 0 0 0-1.94.485l.5 2a1 1 0 1 0 1.94-.486zm2.555-2.465a1 1 0 1 0-1.414 1.414l2 2a1 1 0 0 0 1.414-1.414zm-13.447.034a1 1 0 0 1 1.48 1.346l-1.818 2a1 1 0 1 1-1.48-1.346z"></svg:path></svg:g>`,
})
export class PepiconsPopEyeClosedIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopEyeClosedCircleIcon],svg[pepicons-pop-eye-closed-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M4.688 11.306a1 1 0 1 1 1.624-1.167c.304.423.773.827 1.38 1.177c1.293.746 3.085 1.184 5.012 1.184c1.928 0 3.72-.437 5.013-1.184c.607-.35 1.076-.754 1.38-1.177a1 1 0 1 1 1.624 1.167c-.48.669-1.164 1.257-2.004 1.742c-1.612.93-3.748 1.452-6.013 1.452s-4.4-.522-6.012-1.452c-.84-.485-1.524-1.073-2.004-1.742"></svg:path><svg:path d="M14 14a1 1 0 1 0-2 0v2.5a1 1 0 1 0 2 0zm-5.47-.242a1 1 0 0 1 1.94.485l-.5 2a1 1 0 1 1-1.94-.485zm8.44 0a1 1 0 0 0-1.94.485l.5 2a1 1 0 1 0 1.94-.485zm2.555-2.465a1 1 0 1 0-1.414 1.414l2 2a1 1 0 0 0 1.414-1.414zm-13.447.034a1 1 0 0 1 1.48 1.346l-1.818 2a1 1 0 1 1-1.48-1.346z"></svg:path><svg:path fill-rule="evenodd" d="M13 24c6.075 0 11-4.925 11-11S19.075 2 13 2S2 6.925 2 13s4.925 11 11 11m0 2c7.18 0 13-5.82 13-13S20.18 0 13 0S0 5.82 0 13s5.82 13 13 13" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPopEyeClosedCircleIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopEyeClosedCircleFilledIcon],svg[pepicons-pop-eye-closed-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPopEyeClosedCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:g fill="#000"><svg:path d="M4.688 11.306a1 1 0 1 1 1.624-1.167c.304.423.773.827 1.38 1.177c1.293.746 3.085 1.184 5.012 1.184c1.928 0 3.72-.437 5.013-1.184c.607-.35 1.076-.754 1.38-1.177a1 1 0 1 1 1.624 1.167c-.48.669-1.164 1.257-2.004 1.742c-1.612.93-3.748 1.452-6.013 1.452s-4.4-.522-6.012-1.452c-.84-.485-1.524-1.073-2.004-1.742"></svg:path><svg:path d="M14 14a1 1 0 1 0-2 0v2.5a1 1 0 1 0 2 0zm-5.47-.242a1 1 0 0 1 1.94.485l-.5 2a1 1 0 1 1-1.94-.485zm8.44 0a1 1 0 0 0-1.94.485l.5 2a1 1 0 1 0 1.94-.485zm2.555-2.465a1 1 0 1 0-1.414 1.414l2 2a1 1 0 0 0 1.414-1.414zm-13.447.034a1 1 0 0 1 1.48 1.346l-1.818 2a1 1 0 1 1-1.48-1.346z"></svg:path></svg:g></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPopEyeClosedCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPopEyeClosedCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopEyeClosedCircleOffIcon],svg[pepicons-pop-eye-closed-circle-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M4.688 11.306a1 1 0 1 1 1.624-1.167c.304.423.773.827 1.38 1.177c1.293.746 3.085 1.184 5.012 1.184c1.928 0 3.72-.437 5.013-1.184c.607-.35 1.076-.754 1.38-1.177a1 1 0 1 1 1.624 1.167c-.48.669-1.164 1.257-2.004 1.742c-1.612.93-3.748 1.452-6.013 1.452s-4.4-.522-6.012-1.452c-.84-.485-1.524-1.073-2.004-1.742"></svg:path><svg:path d="M14 14a1 1 0 1 0-2 0v2.5a1 1 0 1 0 2 0zm-5.47-.242a1 1 0 0 1 1.94.485l-.5 2a1 1 0 1 1-1.94-.485zm8.44 0a1 1 0 0 0-1.94.485l.5 2a1 1 0 1 0 1.94-.485zm2.555-2.465a1 1 0 1 0-1.414 1.414l2 2a1 1 0 0 0 1.414-1.414zm-13.447.034a1 1 0 0 1 1.48 1.346l-1.818 2a1 1 0 1 1-1.48-1.346z"></svg:path><svg:path d="M4.293 5.707a1 1 0 0 1 1.414-1.414l16 16a1 1 0 0 1-1.414 1.414z"></svg:path><svg:path fill-rule="evenodd" d="M13 24c6.075 0 11-4.925 11-11S19.075 2 13 2S2 6.925 2 13s4.925 11 11 11m0 2c7.18 0 13-5.82 13-13S20.18 0 13 0S0 5.82 0 13s5.82 13 13 13" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPopEyeClosedCircleOffIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopEyeClosedOffIcon],svg[pepicons-pop-eye-closed-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M1.688 8.306a1 1 0 1 1 1.624-1.167c.304.423.773.827 1.38 1.177C5.985 9.062 7.777 9.5 9.704 9.5c1.928 0 3.72-.437 5.013-1.184c.607-.35 1.076-.754 1.38-1.177a1 1 0 1 1 1.624 1.167c-.48.669-1.164 1.257-2.004 1.742c-1.612.93-3.748 1.452-6.013 1.452s-4.4-.522-6.012-1.452c-.84-.485-1.524-1.073-2.004-1.742"></svg:path><svg:path d="M11 11a1 1 0 1 0-2 0v2.5a1 1 0 1 0 2 0zm-5.47-.242a1 1 0 0 1 1.94.485l-.5 2a1 1 0 1 1-1.94-.486zm8.44 0a1 1 0 0 0-1.94.485l.5 2a1 1 0 1 0 1.94-.486zm2.555-2.465a1 1 0 1 0-1.414 1.414l2 2a1 1 0 0 0 1.414-1.414zm-13.447.034a1 1 0 0 1 1.48 1.346l-1.818 2a1 1 0 1 1-1.48-1.346z"></svg:path><svg:path d="M1.293 2.707a1 1 0 0 1 1.414-1.414l16 16a1 1 0 0 1-1.414 1.414z"></svg:path></svg:g>`,
})
export class PepiconsPopEyeClosedOffIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopEyeFrameIcon],svg[pepicons-pop-eye-frame-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M7.07 12.082c.7.393 1.733.668 2.928.668c1.196 0 2.229-.275 2.928-.668c.73-.41.906-.822.906-1.05c0-.23-.176-.64-.906-1.052c-.7-.393-1.732-.668-2.928-.668s-2.228.275-2.927.668c-.73.411-.906.822-.906 1.051c0 .23.176.64.906 1.051m-.98 1.743c-1.019-.573-1.925-1.521-1.925-2.794c0-1.272.906-2.22 1.925-2.794c1.05-.59 2.434-.925 3.908-.925s2.858.334 3.908.925c1.02.573 1.926 1.522 1.926 2.794s-.907 2.221-1.926 2.794c-1.05.591-2.434.925-3.908.925s-2.857-.334-3.908-.925"></svg:path><svg:path d="M9.998 5.5a1 1 0 0 1 1 1v1.813a1 1 0 0 1-2 0V6.5a1 1 0 0 1 1-1m2.613.321a1 1 0 0 1 .785 1.177l-.302 1.51a1 1 0 0 1-1.962-.392l.303-1.51a1 1 0 0 1 1.176-.785m-5.225 0A1 1 0 0 0 6.6 6.998l.302 1.51a1 1 0 0 0 1.961-.392l-.302-1.51a1 1 0 0 0-1.176-.785"></svg:path><svg:path d="M4.65 6.85a1 1 0 0 0-.342 1.373l.906 1.51a1 1 0 0 0 1.715-1.029l-.907-1.51a1 1 0 0 0-1.371-.343m10.695-.001a1 1 0 0 1 .343 1.373l-.906 1.51a1 1 0 1 1-1.715-1.029l.906-1.51a1 1 0 0 1 1.372-.343M9.488 10.73a.51.51 0 1 0 1.02 0a.51.51 0 0 0-1.02 0m.51 2.51a2.51 2.51 0 1 1 0-5.021a2.51 2.51 0 0 1 0 5.02M1.5 4A2.5 2.5 0 0 1 4 1.5h1.962a1 1 0 0 1 0 2H4a.5.5 0 0 0-.5.5v2.25a1 1 0 0 1-2 0zm11.25-1.5a1 1 0 0 1 1-1H16A2.5 2.5 0 0 1 18.5 4v2.25a1 1 0 1 1-2 0V4a.5.5 0 0 0-.5-.5h-2.25a1 1 0 0 1-1-1M2.5 12.462a1 1 0 0 1 1 1V16a.5.5 0 0 0 .5.5h2.25a1 1 0 1 1 0 2H4A2.5 2.5 0 0 1 1.5 16v-2.539a1 1 0 0 1 1-1m15 .288a1 1 0 0 1 1 1V16a2.5 2.5 0 0 1-2.5 2.5h-2.25a1 1 0 1 1 0-2H16a.5.5 0 0 0 .5-.5v-2.25a1 1 0 0 1 1-1"></svg:path></svg:g>`,
})
export class PepiconsPopEyeFrameIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopEyeFrameCircleIcon],svg[pepicons-pop-eye-frame-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M10.07 15.082c.7.393 1.733.668 2.928.668c1.196 0 2.229-.275 2.928-.668c.73-.41.906-.822.906-1.05c0-.23-.176-.64-.906-1.052c-.7-.393-1.732-.668-2.928-.668s-2.228.275-2.927.668c-.73.411-.906.822-.906 1.051c0 .23.176.64.906 1.051m-.98 1.743c-1.019-.573-1.925-1.521-1.925-2.794c0-1.272.906-2.22 1.925-2.794c1.05-.59 2.434-.925 3.908-.925s2.858.334 3.908.925c1.02.573 1.926 1.522 1.926 2.794s-.907 2.221-1.926 2.794c-1.05.591-2.434.925-3.908.925s-2.857-.334-3.908-.925"></svg:path><svg:path d="M12.998 8.5a1 1 0 0 1 1 1v1.813a1 1 0 0 1-2 0V9.5a1 1 0 0 1 1-1m2.613.321a1 1 0 0 1 .785 1.177l-.302 1.51a1 1 0 0 1-1.962-.392l.303-1.51a1 1 0 0 1 1.176-.785m-5.225 0A1 1 0 0 0 9.6 9.998l.302 1.51a1 1 0 0 0 1.961-.392l-.302-1.51a1 1 0 0 0-1.176-.785"></svg:path><svg:path d="M7.65 9.85a1 1 0 0 0-.342 1.373l.906 1.51a1 1 0 0 0 1.715-1.029l-.906-1.51A1 1 0 0 0 7.65 9.85m10.696 0a1 1 0 0 1 .343 1.373l-.906 1.51a1 1 0 1 1-1.715-1.029l.906-1.51a1 1 0 0 1 1.372-.343m-5.858 3.879a.51.51 0 1 0 1.02 0a.51.51 0 0 0-1.02 0m.51 2.51a2.51 2.51 0 1 1 0-5.021a2.51 2.51 0 0 1 0 5.02M4.5 7A2.5 2.5 0 0 1 7 4.5h1.962a1 1 0 0 1 0 2H7a.5.5 0 0 0-.5.5v2.25a1 1 0 0 1-2 0zm11.25-1.5a1 1 0 0 1 1-1H19A2.5 2.5 0 0 1 21.5 7v2.25a1 1 0 1 1-2 0V7a.5.5 0 0 0-.5-.5h-2.25a1 1 0 0 1-1-1M5.5 15.462a1 1 0 0 1 1 1V19a.5.5 0 0 0 .5.5h2.25a1 1 0 1 1 0 2H7A2.5 2.5 0 0 1 4.5 19v-2.538a1 1 0 0 1 1-1m15 .288a1 1 0 0 1 1 1V19a2.5 2.5 0 0 1-2.5 2.5h-2.25a1 1 0 1 1 0-2H19a.5.5 0 0 0 .5-.5v-2.25a1 1 0 0 1 1-1"></svg:path><svg:path d="M13 24c6.075 0 11-4.925 11-11S19.075 2 13 2S2 6.925 2 13s4.925 11 11 11m0 2c7.18 0 13-5.82 13-13S20.18 0 13 0S0 5.82 0 13s5.82 13 13 13"></svg:path></svg:g>`,
})
export class PepiconsPopEyeFrameCircleIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopEyeFrameCircleFilledIcon],svg[pepicons-pop-eye-frame-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPopEyeFrameCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:g fill="#000" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M10.07 15.082c.7.393 1.733.668 2.928.668c1.196 0 2.229-.275 2.928-.668c.73-.41.906-.822.906-1.05c0-.23-.176-.64-.906-1.052c-.7-.393-1.732-.668-2.928-.668s-2.228.275-2.927.668c-.73.411-.906.822-.906 1.051c0 .23.176.64.906 1.051m-.98 1.743c-1.019-.573-1.925-1.521-1.925-2.794c0-1.272.906-2.22 1.925-2.794c1.05-.59 2.434-.925 3.908-.925s2.858.334 3.908.925c1.02.573 1.926 1.522 1.926 2.794s-.907 2.221-1.926 2.794c-1.05.591-2.434.925-3.908.925s-2.857-.334-3.908-.925"></svg:path><svg:path d="M12.998 8.5a1 1 0 0 1 1 1v1.813a1 1 0 0 1-2 0V9.5a1 1 0 0 1 1-1m2.613.321a1 1 0 0 1 .785 1.177l-.302 1.51a1 1 0 0 1-1.962-.392l.303-1.51a1 1 0 0 1 1.176-.785m-5.225 0A1 1 0 0 0 9.6 9.998l.302 1.51a1 1 0 0 0 1.961-.392l-.302-1.51a1 1 0 0 0-1.176-.785"></svg:path><svg:path d="M7.65 9.85a1 1 0 0 0-.342 1.373l.906 1.51a1 1 0 0 0 1.715-1.029l-.906-1.51A1 1 0 0 0 7.65 9.85m10.696 0a1 1 0 0 1 .343 1.373l-.906 1.51a1 1 0 1 1-1.715-1.029l.906-1.51a1 1 0 0 1 1.372-.343m-5.858 3.879a.51.51 0 1 0 1.02 0a.51.51 0 0 0-1.02 0m.51 2.51a2.51 2.51 0 1 1 0-5.021a2.51 2.51 0 0 1 0 5.02M4.5 7A2.5 2.5 0 0 1 7 4.5h1.962a1 1 0 0 1 0 2H7a.5.5 0 0 0-.5.5v2.25a1 1 0 0 1-2 0zm11.25-1.5a1 1 0 0 1 1-1H19A2.5 2.5 0 0 1 21.5 7v2.25a1 1 0 1 1-2 0V7a.5.5 0 0 0-.5-.5h-2.25a1 1 0 0 1-1-1M5.5 15.462a1 1 0 0 1 1 1V19a.5.5 0 0 0 .5.5h2.25a1 1 0 1 1 0 2H7A2.5 2.5 0 0 1 4.5 19v-2.538a1 1 0 0 1 1-1m15 .288a1 1 0 0 1 1 1V19a2.5 2.5 0 0 1-2.5 2.5h-2.25a1 1 0 1 1 0-2H19a.5.5 0 0 0 .5-.5v-2.25a1 1 0 0 1 1-1"></svg:path></svg:g></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPopEyeFrameCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPopEyeFrameCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopEyeFrameCircleOffIcon],svg[pepicons-pop-eye-frame-circle-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M10.07 15.082c.7.393 1.733.668 2.928.668c1.196 0 2.229-.275 2.928-.668c.73-.41.906-.822.906-1.05c0-.23-.176-.64-.906-1.052c-.7-.393-1.732-.668-2.928-.668s-2.228.275-2.927.668c-.73.411-.906.822-.906 1.051c0 .23.176.64.906 1.051m-.98 1.743c-1.019-.573-1.925-1.521-1.925-2.794c0-1.272.906-2.22 1.925-2.794c1.05-.59 2.434-.925 3.908-.925s2.858.334 3.908.925c1.02.573 1.926 1.522 1.926 2.794s-.907 2.221-1.926 2.794c-1.05.591-2.434.925-3.908.925s-2.857-.334-3.908-.925" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M12.998 8.5a1 1 0 0 1 1 1v1.813a1 1 0 0 1-2 0V9.5a1 1 0 0 1 1-1m2.613.321a1 1 0 0 1 .785 1.177l-.302 1.51a1 1 0 0 1-1.962-.392l.303-1.51a1 1 0 0 1 1.176-.785m-5.225 0A1 1 0 0 0 9.6 9.998l.302 1.51a1 1 0 0 0 1.961-.392l-.302-1.51a1 1 0 0 0-1.176-.785" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M7.65 9.85a1 1 0 0 0-.342 1.373l.906 1.51a1 1 0 0 0 1.715-1.029l-.906-1.51A1 1 0 0 0 7.65 9.85m10.696 0a1 1 0 0 1 .343 1.373l-.906 1.51a1 1 0 1 1-1.715-1.029l.906-1.51a1 1 0 0 1 1.372-.343m-5.858 3.879a.51.51 0 1 0 1.02 0a.51.51 0 0 0-1.02 0m.51 2.51a2.51 2.51 0 1 1 0-5.021a2.51 2.51 0 0 1 0 5.02M4.5 7A2.5 2.5 0 0 1 7 4.5h1.962a1 1 0 0 1 0 2H7a.5.5 0 0 0-.5.5v2.25a1 1 0 0 1-2 0zm11.25-1.5a1 1 0 0 1 1-1H19A2.5 2.5 0 0 1 21.5 7v2.25a1 1 0 1 1-2 0V7a.5.5 0 0 0-.5-.5h-2.25a1 1 0 0 1-1-1M5.5 15.462a1 1 0 0 1 1 1V19a.5.5 0 0 0 .5.5h2.25a1 1 0 1 1 0 2H7A2.5 2.5 0 0 1 4.5 19v-2.538a1 1 0 0 1 1-1m15 .288a1 1 0 0 1 1 1V19a2.5 2.5 0 0 1-2.5 2.5h-2.25a1 1 0 1 1 0-2H19a.5.5 0 0 0 .5-.5v-2.25a1 1 0 0 1 1-1" clip-rule="evenodd"></svg:path><svg:path d="M4.293 5.707a1 1 0 0 1 1.414-1.414l16 16a1 1 0 0 1-1.414 1.414z"></svg:path><svg:path fill-rule="evenodd" d="M13 24c6.075 0 11-4.925 11-11S19.075 2 13 2S2 6.925 2 13s4.925 11 11 11m0 2c7.18 0 13-5.82 13-13S20.18 0 13 0S0 5.82 0 13s5.82 13 13 13" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPopEyeFrameCircleOffIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopEyeFrameOffIcon],svg[pepicons-pop-eye-frame-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M7.07 12.082c.7.393 1.733.668 2.928.668c1.196 0 2.229-.275 2.928-.668c.73-.41.906-.822.906-1.05c0-.23-.176-.64-.906-1.052c-.7-.393-1.732-.668-2.928-.668s-2.228.275-2.927.668c-.73.411-.906.822-.906 1.051c0 .23.176.64.906 1.051m-.98 1.743c-1.019-.573-1.925-1.521-1.925-2.794c0-1.272.906-2.22 1.925-2.794c1.05-.59 2.434-.925 3.908-.925s2.858.334 3.908.925c1.02.573 1.926 1.522 1.926 2.794s-.907 2.221-1.926 2.794c-1.05.591-2.434.925-3.908.925s-2.857-.334-3.908-.925" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M9.998 5.5a1 1 0 0 1 1 1v1.813a1 1 0 0 1-2 0V6.5a1 1 0 0 1 1-1m2.613.321a1 1 0 0 1 .785 1.177l-.302 1.51a1 1 0 0 1-1.962-.392l.303-1.51a1 1 0 0 1 1.176-.785m-5.225 0A1 1 0 0 0 6.6 6.998l.302 1.51a1 1 0 0 0 1.961-.392l-.302-1.51a1 1 0 0 0-1.176-.785" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M4.65 6.85a1 1 0 0 0-.342 1.373l.906 1.51a1 1 0 0 0 1.715-1.029l-.907-1.51a1 1 0 0 0-1.371-.343m10.695-.001a1 1 0 0 1 .343 1.373l-.906 1.51a1 1 0 1 1-1.715-1.029l.906-1.51a1 1 0 0 1 1.372-.343M9.488 10.73a.51.51 0 1 0 1.02 0a.51.51 0 0 0-1.02 0m.51 2.51a2.51 2.51 0 1 1 0-5.021a2.51 2.51 0 0 1 0 5.02M1.5 4A2.5 2.5 0 0 1 4 1.5h1.962a1 1 0 0 1 0 2H4a.5.5 0 0 0-.5.5v2.25a1 1 0 0 1-2 0zm11.25-1.5a1 1 0 0 1 1-1H16A2.5 2.5 0 0 1 18.5 4v2.25a1 1 0 1 1-2 0V4a.5.5 0 0 0-.5-.5h-2.25a1 1 0 0 1-1-1M2.5 12.462a1 1 0 0 1 1 1V16a.5.5 0 0 0 .5.5h2.25a1 1 0 1 1 0 2H4A2.5 2.5 0 0 1 1.5 16v-2.539a1 1 0 0 1 1-1m15 .288a1 1 0 0 1 1 1V16a2.5 2.5 0 0 1-2.5 2.5h-2.25a1 1 0 1 1 0-2H16a.5.5 0 0 0 .5-.5v-2.25a1 1 0 0 1 1-1" clip-rule="evenodd"></svg:path><svg:path d="M1.293 2.707a1 1 0 0 1 1.414-1.414l16 16a1 1 0 0 1-1.414 1.414z"></svg:path></svg:g>`,
})
export class PepiconsPopEyeFrameOffIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopEyeOffIcon],svg[pepicons-pop-eye-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M10 16.5c4.897 0 9-2.308 9-5.5s-4.103-5.5-9-5.5S1 7.808 1 11s4.103 5.5 9 5.5m0-9c3.94 0 7 1.722 7 3.5s-3.06 3.5-7 3.5s-7-1.722-7-3.5s3.06-3.5 7-3.5" clip-rule="evenodd"></svg:path><svg:path d="M9 3.5a1 1 0 0 1 2 0v3a1 1 0 1 1-2 0zm4.02.304a1 1 0 0 1 1.96.392l-.5 2.5a1 1 0 0 1-1.96-.392zm-6.04 0a1 1 0 0 0-1.96.392l.5 2.5a1 1 0 0 0 1.96-.392zM2.857 4.986a1 1 0 1 0-1.714 1.029l1.5 2.5a1 1 0 1 0 1.714-1.03zm14.286 0a1 1 0 0 1 1.715 1.029l-1.5 2.5a1 1 0 0 1-1.716-1.03z"></svg:path><svg:path fill-rule="evenodd" d="M10 14a3.5 3.5 0 1 0 0-7a3.5 3.5 0 0 0 0 7m0-5a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3" clip-rule="evenodd"></svg:path><svg:path d="M1.293 2.707a1 1 0 0 1 1.414-1.414l16 16a1 1 0 0 1-1.414 1.414z"></svg:path></svg:g>`,
})
export class PepiconsPopEyeOffIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopFaceFrowningIcon],svg[pepicons-pop-face-frowning-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M10 17.5a7.5 7.5 0 1 0 0-15a7.5 7.5 0 0 0 0 15m0 2a9.5 9.5 0 1 0 0-19a9.5 9.5 0 0 0 0 19" clip-rule="evenodd"></svg:path><svg:path d="M8.5 7.25a1.25 1.25 0 1 1-2.5 0a1.25 1.25 0 0 1 2.5 0m5.5 0a1.25 1.25 0 1 1-2.5 0a1.25 1.25 0 0 1 2.5 0"></svg:path><svg:path fill-rule="evenodd" d="M12.221 14.628A1 1 0 0 0 13.8 13.4l-.8.6l.8-.601l-.002-.001l-.002-.003l-.003-.005l-.01-.011l-.08-.095a3 3 0 0 0-.191-.188a3.6 3.6 0 0 0-.698-.478C12.192 12.286 11.28 12 10 12s-2.192.286-2.814.618a3.6 3.6 0 0 0-.698.478a3 3 0 0 0-.272.283l-.009.011l-.003.005l-.002.003H6.2c0 .002 0 .002.8.602l-.8-.6a1 1 0 0 0 1.579 1.227l.038-.036c.05-.044.15-.123.31-.209C8.442 14.214 9.029 14 10 14c.97 0 1.558.214 1.873.382a1.6 1.6 0 0 1 .348.245" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPopFaceFrowningIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopFaceFrowningCircleIcon],svg[pepicons-pop-face-frowning-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M13 20.5a7.5 7.5 0 1 0 0-15a7.5 7.5 0 0 0 0 15m0 2a9.5 9.5 0 1 0 0-19a9.5 9.5 0 0 0 0 19" clip-rule="evenodd"></svg:path><svg:path d="M11.5 10.25a1.25 1.25 0 1 1-2.5 0a1.25 1.25 0 0 1 2.5 0m5.5 0a1.25 1.25 0 1 1-2.5 0a1.25 1.25 0 0 1 2.5 0"></svg:path><svg:path fill-rule="evenodd" d="M15.221 17.627A1 1 0 0 0 16.8 16.4l-.8.6l.8-.601l-.002-.001l-.001-.003l-.004-.005l-.01-.011l-.08-.095a3 3 0 0 0-.191-.188a3.6 3.6 0 0 0-.698-.478C15.192 15.286 14.28 15 13 15s-2.192.286-2.814.618a3.6 3.6 0 0 0-.698.478a3 3 0 0 0-.272.283l-.009.011l-.003.005l-.002.003H9.2c0 .001-.001.002.799.602l-.8-.6a1 1 0 0 0 1.579 1.227l.038-.036c.05-.044.15-.123.31-.209c.315-.168.902-.382 1.873-.382c.97 0 1.558.214 1.873.382a1.6 1.6 0 0 1 .348.245" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M13 24c6.075 0 11-4.925 11-11S19.075 2 13 2S2 6.925 2 13s4.925 11 11 11m0 2c7.18 0 13-5.82 13-13S20.18 0 13 0S0 5.82 0 13s5.82 13 13 13" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPopFaceFrowningCircleIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopFaceFrowningCircleFilledIcon],svg[pepicons-pop-face-frowning-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPopFaceFrowningCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:g fill="#000"><svg:path fill-rule="evenodd" d="M13 20.5a7.5 7.5 0 1 0 0-15a7.5 7.5 0 0 0 0 15m0 2a9.5 9.5 0 1 0 0-19a9.5 9.5 0 0 0 0 19" clip-rule="evenodd"></svg:path><svg:path d="M11.5 10.25a1.25 1.25 0 1 1-2.5 0a1.25 1.25 0 0 1 2.5 0m5.5 0a1.25 1.25 0 1 1-2.5 0a1.25 1.25 0 0 1 2.5 0"></svg:path><svg:path fill-rule="evenodd" d="M15.221 17.627A1 1 0 0 0 16.8 16.4l-.8.6l.8-.601l-.002-.001l-.001-.003l-.004-.005l-.01-.011l-.08-.095a3 3 0 0 0-.191-.188a3.6 3.6 0 0 0-.698-.478C15.192 15.286 14.28 15 13 15s-2.192.286-2.814.618a3.6 3.6 0 0 0-.698.478a3 3 0 0 0-.272.283l-.009.011l-.003.005l-.002.003H9.2c0 .001-.001.002.799.602l-.8-.6a1 1 0 0 0 1.579 1.227l.038-.036c.05-.044.15-.123.31-.209c.315-.168.902-.382 1.873-.382c.97 0 1.558.214 1.873.382a1.6 1.6 0 0 1 .348.245" clip-rule="evenodd"></svg:path></svg:g></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPopFaceFrowningCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPopFaceFrowningCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopFaceFrowningCircleOffIcon],svg[pepicons-pop-face-frowning-circle-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M13 20.5a7.5 7.5 0 1 0 0-15a7.5 7.5 0 0 0 0 15m0 2a9.5 9.5 0 1 0 0-19a9.5 9.5 0 0 0 0 19" clip-rule="evenodd"></svg:path><svg:path d="M11.5 10.25a1.25 1.25 0 1 1-2.5 0a1.25 1.25 0 0 1 2.5 0m5.5 0a1.25 1.25 0 1 1-2.5 0a1.25 1.25 0 0 1 2.5 0"></svg:path><svg:path fill-rule="evenodd" d="M15.221 17.627A1 1 0 0 0 16.8 16.4l-.8.6l.8-.601l-.002-.001l-.001-.003l-.004-.005l-.01-.011l-.08-.095a3 3 0 0 0-.191-.188a3.6 3.6 0 0 0-.698-.478C15.192 15.286 14.28 15 13 15s-2.192.286-2.814.618a3.6 3.6 0 0 0-.698.478a3 3 0 0 0-.272.283l-.009.011l-.003.005l-.002.003H9.2c0 .001-.001.002.799.602l-.8-.6a1 1 0 0 0 1.579 1.227l.038-.036c.05-.044.15-.123.31-.209c.315-.168.902-.382 1.873-.382c.97 0 1.558.214 1.873.382a1.6 1.6 0 0 1 .348.245" clip-rule="evenodd"></svg:path><svg:path d="M4.293 5.707a1 1 0 0 1 1.414-1.414l16 16a1 1 0 0 1-1.414 1.414z"></svg:path><svg:path fill-rule="evenodd" d="M13 24c6.075 0 11-4.925 11-11S19.075 2 13 2S2 6.925 2 13s4.925 11 11 11m0 2c7.18 0 13-5.82 13-13S20.18 0 13 0S0 5.82 0 13s5.82 13 13 13" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPopFaceFrowningCircleOffIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopFaceFrowningOffIcon],svg[pepicons-pop-face-frowning-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M10 17.5a7.5 7.5 0 1 0 0-15a7.5 7.5 0 0 0 0 15m0 2a9.5 9.5 0 1 0 0-19a9.5 9.5 0 0 0 0 19" clip-rule="evenodd"></svg:path><svg:path d="M8.5 7.25a1.25 1.25 0 1 1-2.5 0a1.25 1.25 0 0 1 2.5 0m5.5 0a1.25 1.25 0 1 1-2.5 0a1.25 1.25 0 0 1 2.5 0"></svg:path><svg:path fill-rule="evenodd" d="M12.221 14.628A1 1 0 0 0 13.8 13.4l-.8.6l.8-.601l-.002-.001l-.002-.003l-.003-.005l-.01-.011l-.08-.095a3 3 0 0 0-.191-.188a3.6 3.6 0 0 0-.698-.478C12.192 12.286 11.28 12 10 12s-2.192.286-2.814.618a3.6 3.6 0 0 0-.698.478a3 3 0 0 0-.272.283l-.009.011l-.003.005l-.002.003H6.2c0 .002 0 .002.8.602l-.8-.6a1 1 0 0 0 1.579 1.227l.038-.036c.05-.044.15-.123.31-.209C8.442 14.214 9.029 14 10 14c.97 0 1.558.214 1.873.382a1.6 1.6 0 0 1 .348.245" clip-rule="evenodd"></svg:path><svg:path d="M1.293 2.707a1 1 0 0 1 1.414-1.414l16 16a1 1 0 0 1-1.414 1.414z"></svg:path></svg:g>`,
})
export class PepiconsPopFaceFrowningOffIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopFaceGrinningIcon],svg[pepicons-pop-face-grinning-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M10 17.5a7.5 7.5 0 1 0 0-15a7.5 7.5 0 0 0 0 15m0 2a9.5 9.5 0 1 0 0-19a9.5 9.5 0 0 0 0 19" clip-rule="evenodd"></svg:path><svg:path d="M8.5 7.25a1.25 1.25 0 1 1-2.5 0a1.25 1.25 0 0 1 2.5 0m5.5 0a1.25 1.25 0 1 1-2.5 0a1.25 1.25 0 0 1 2.5 0"></svg:path><svg:path fill-rule="evenodd" d="M5.409 11.538A.75.75 0 0 1 6 11.25h8a.75.75 0 0 1 .728.932L14 12l.728.182l-.001.003l-.001.004l-.004.013a4 4 0 0 1-.053.188a8.5 8.5 0 0 1-.908 2.008c-.68 1.087-1.878 2.352-3.761 2.352s-3.081-1.265-3.761-2.352a8.5 8.5 0 0 1-.962-2.196l-.003-.013v-.004l-.001-.002L6 12l-.728.182a.75.75 0 0 1 .137-.644m1.654 1.212c.117.265.265.56.448.852c.57.913 1.372 1.648 2.489 1.648s1.919-.735 2.489-1.648c.183-.292.33-.587.448-.852z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPopFaceGrinningIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopFaceGrinningCircleIcon],svg[pepicons-pop-face-grinning-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M13 20.5a7.5 7.5 0 1 0 0-15a7.5 7.5 0 0 0 0 15m0 2a9.5 9.5 0 1 0 0-19a9.5 9.5 0 0 0 0 19" clip-rule="evenodd"></svg:path><svg:path d="M11.5 10.25a1.25 1.25 0 1 1-2.5 0a1.25 1.25 0 0 1 2.5 0m5.5 0a1.25 1.25 0 1 1-2.5 0a1.25 1.25 0 0 1 2.5 0"></svg:path><svg:path fill-rule="evenodd" d="M8.409 14.538A.75.75 0 0 1 9 14.25h8a.75.75 0 0 1 .728.932L17 15l.728.182l-.001.003l-.001.004l-.003.013a4 4 0 0 1-.054.188a8.5 8.5 0 0 1-.908 2.008c-.68 1.087-1.878 2.352-3.761 2.352s-3.081-1.265-3.761-2.352a8.5 8.5 0 0 1-.962-2.196l-.003-.013v-.004l-.001-.002L9 15l-.728.182a.75.75 0 0 1 .137-.644m1.654 1.212c.117.265.265.56.448.852c.57.913 1.372 1.648 2.489 1.648s1.919-.735 2.489-1.648c.183-.292.33-.587.448-.852z" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M13 24c6.075 0 11-4.925 11-11S19.075 2 13 2S2 6.925 2 13s4.925 11 11 11m0 2c7.18 0 13-5.82 13-13S20.18 0 13 0S0 5.82 0 13s5.82 13 13 13" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPopFaceGrinningCircleIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopFaceGrinningCircleFilledIcon],svg[pepicons-pop-face-grinning-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPopFaceGrinningCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:g fill="#000"><svg:path fill-rule="evenodd" d="M13 20.5a7.5 7.5 0 1 0 0-15a7.5 7.5 0 0 0 0 15m0 2a9.5 9.5 0 1 0 0-19a9.5 9.5 0 0 0 0 19" clip-rule="evenodd"></svg:path><svg:path d="M11.5 10.25a1.25 1.25 0 1 1-2.5 0a1.25 1.25 0 0 1 2.5 0m5.5 0a1.25 1.25 0 1 1-2.5 0a1.25 1.25 0 0 1 2.5 0"></svg:path><svg:path fill-rule="evenodd" d="M8.409 14.538A.75.75 0 0 1 9 14.25h8a.75.75 0 0 1 .728.932L17 15l.728.182l-.001.003l-.001.004l-.003.013a4 4 0 0 1-.054.188a8.5 8.5 0 0 1-.908 2.008c-.68 1.087-1.878 2.352-3.761 2.352s-3.081-1.265-3.761-2.352a8.5 8.5 0 0 1-.962-2.196l-.003-.013v-.004l-.001-.002L9 15l-.728.182a.75.75 0 0 1 .137-.644m1.654 1.212c.117.265.265.56.448.852c.57.913 1.372 1.648 2.489 1.648s1.919-.735 2.489-1.648c.183-.292.33-.587.448-.852z" clip-rule="evenodd"></svg:path></svg:g></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPopFaceGrinningCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPopFaceGrinningCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopFaceGrinningCircleOffIcon],svg[pepicons-pop-face-grinning-circle-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M13 20.5a7.5 7.5 0 1 0 0-15a7.5 7.5 0 0 0 0 15m0 2a9.5 9.5 0 1 0 0-19a9.5 9.5 0 0 0 0 19" clip-rule="evenodd"></svg:path><svg:path d="M11.5 10.25a1.25 1.25 0 1 1-2.5 0a1.25 1.25 0 0 1 2.5 0m5.5 0a1.25 1.25 0 1 1-2.5 0a1.25 1.25 0 0 1 2.5 0"></svg:path><svg:path fill-rule="evenodd" d="M8.409 14.538A.75.75 0 0 1 9 14.25h8a.75.75 0 0 1 .728.932L17 15l.728.182l-.001.003l-.001.004l-.003.013a4 4 0 0 1-.054.188a8.5 8.5 0 0 1-.908 2.008c-.68 1.087-1.878 2.352-3.761 2.352s-3.081-1.265-3.761-2.352a8.5 8.5 0 0 1-.962-2.196l-.003-.013v-.004l-.001-.002L9 15l-.728.182a.75.75 0 0 1 .137-.644m1.654 1.212c.117.265.265.56.448.852c.57.913 1.372 1.648 2.489 1.648s1.919-.735 2.489-1.648c.183-.292.33-.587.448-.852z" clip-rule="evenodd"></svg:path><svg:path d="M4.293 5.707a1 1 0 0 1 1.414-1.414l16 16a1 1 0 0 1-1.414 1.414z"></svg:path><svg:path fill-rule="evenodd" d="M13 24c6.075 0 11-4.925 11-11S19.075 2 13 2S2 6.925 2 13s4.925 11 11 11m0 2c7.18 0 13-5.82 13-13S20.18 0 13 0S0 5.82 0 13s5.82 13 13 13" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPopFaceGrinningCircleOffIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopFaceGrinningOffIcon],svg[pepicons-pop-face-grinning-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M10 17.5a7.5 7.5 0 1 0 0-15a7.5 7.5 0 0 0 0 15m0 2a9.5 9.5 0 1 0 0-19a9.5 9.5 0 0 0 0 19" clip-rule="evenodd"></svg:path><svg:path d="M8.5 7.25a1.25 1.25 0 1 1-2.5 0a1.25 1.25 0 0 1 2.5 0m5.5 0a1.25 1.25 0 1 1-2.5 0a1.25 1.25 0 0 1 2.5 0"></svg:path><svg:path fill-rule="evenodd" d="M5.409 11.538A.75.75 0 0 1 6 11.25h8a.75.75 0 0 1 .728.932L14 12l.728.182l-.001.003l-.001.004l-.004.013a4 4 0 0 1-.053.188a8.5 8.5 0 0 1-.908 2.008c-.68 1.087-1.878 2.352-3.761 2.352s-3.081-1.265-3.761-2.352a8.5 8.5 0 0 1-.962-2.196l-.003-.013v-.004l-.001-.002L6 12l-.728.182a.75.75 0 0 1 .137-.644m1.654 1.212c.117.265.265.56.448.852c.57.913 1.372 1.648 2.489 1.648s1.919-.735 2.489-1.648c.183-.292.33-.587.448-.852z" clip-rule="evenodd"></svg:path><svg:path d="M1.293 2.707a1 1 0 0 1 1.414-1.414l16 16a1 1 0 0 1-1.414 1.414z"></svg:path></svg:g>`,
})
export class PepiconsPopFaceGrinningOffIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopFaceSmilingIcon],svg[pepicons-pop-face-smiling-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M10 17.5a7.5 7.5 0 1 0 0-15a7.5 7.5 0 0 0 0 15m0 2a9.5 9.5 0 1 0 0-19a9.5 9.5 0 0 0 0 19" clip-rule="evenodd"></svg:path><svg:path d="M8.5 7.25a1.25 1.25 0 1 1-2.5 0a1.25 1.25 0 0 1 2.5 0m5.5 0a1.25 1.25 0 1 1-2.5 0a1.25 1.25 0 0 1 2.5 0"></svg:path><svg:path fill-rule="evenodd" d="M14.447 12.106a1 1 0 0 1 .447 1.341L14 13l.894.448v.001l-.002.003l-.003.005l-.006.013a2 2 0 0 1-.077.135q-.073.122-.21.307a4.8 4.8 0 0 1-.846.869C12.96 15.412 11.743 16 10 16s-2.96-.588-3.75-1.22a4.8 4.8 0 0 1-.847-.867a4 4 0 0 1-.286-.443l-.006-.013l-.003-.005l-.001-.003c-.001-.001-.001-.002.893-.449l-.894.447a1 1 0 1 1 1.798-.88q.025.046.1.146c.098.13.26.317.496.506c.46.369 1.243.781 2.5.781s2.04-.412 2.5-.78a2.8 2.8 0 0 0 .497-.508a2 2 0 0 0 .114-.17a1 1 0 0 1 1.336-.437" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPopFaceSmilingIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopFaceSmilingCircleIcon],svg[pepicons-pop-face-smiling-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M13 20.5a7.5 7.5 0 1 0 0-15a7.5 7.5 0 0 0 0 15m0 2a9.5 9.5 0 1 0 0-19a9.5 9.5 0 0 0 0 19" clip-rule="evenodd"></svg:path><svg:path d="M11.5 10.25a1.25 1.25 0 1 1-2.5 0a1.25 1.25 0 0 1 2.5 0m5.5 0a1.25 1.25 0 1 1-2.5 0a1.25 1.25 0 0 1 2.5 0"></svg:path><svg:path fill-rule="evenodd" d="M17.447 15.106a1 1 0 0 1 .447 1.341L17 16l.894.448v.001l-.002.003l-.003.005l-.006.013a2 2 0 0 1-.077.135q-.073.122-.21.308a4.8 4.8 0 0 1-.846.868C15.96 18.413 14.743 19 13 19s-2.96-.587-3.75-1.22a4.8 4.8 0 0 1-.847-.867a4 4 0 0 1-.286-.443l-.006-.013l-.003-.005l-.001-.003c-.001-.001-.001-.002.893-.449l-.894.447a1 1 0 1 1 1.798-.88q.025.046.1.146c.098.13.26.317.496.506c.46.368 1.243.781 2.5.781s2.04-.413 2.5-.78a2.8 2.8 0 0 0 .497-.507a2 2 0 0 0 .114-.172a1 1 0 0 1 1.336-.436" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M13 24c6.075 0 11-4.925 11-11S19.075 2 13 2S2 6.925 2 13s4.925 11 11 11m0 2c7.18 0 13-5.82 13-13S20.18 0 13 0S0 5.82 0 13s5.82 13 13 13" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPopFaceSmilingCircleIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopFaceSmilingCircleFilledIcon],svg[pepicons-pop-face-smiling-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPopFaceSmilingCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:g fill="#000"><svg:path fill-rule="evenodd" d="M13 20.5a7.5 7.5 0 1 0 0-15a7.5 7.5 0 0 0 0 15m0 2a9.5 9.5 0 1 0 0-19a9.5 9.5 0 0 0 0 19" clip-rule="evenodd"></svg:path><svg:path d="M11.5 10.25a1.25 1.25 0 1 1-2.5 0a1.25 1.25 0 0 1 2.5 0m5.5 0a1.25 1.25 0 1 1-2.5 0a1.25 1.25 0 0 1 2.5 0"></svg:path><svg:path fill-rule="evenodd" d="M17.447 15.106a1 1 0 0 1 .447 1.341L17 16l.894.448v.001l-.002.003l-.003.005l-.006.013a2 2 0 0 1-.077.135q-.073.122-.21.308a4.8 4.8 0 0 1-.846.868C15.96 18.413 14.743 19 13 19s-2.96-.587-3.75-1.22a4.8 4.8 0 0 1-.847-.867a4 4 0 0 1-.286-.443l-.006-.013l-.003-.005l-.001-.003c-.001-.001-.001-.002.893-.449l-.894.447a1 1 0 1 1 1.798-.88q.025.046.1.146c.098.13.26.317.496.506c.46.368 1.243.781 2.5.781s2.04-.413 2.5-.78a2.8 2.8 0 0 0 .497-.507a2 2 0 0 0 .114-.172a1 1 0 0 1 1.336-.436" clip-rule="evenodd"></svg:path></svg:g></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPopFaceSmilingCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPopFaceSmilingCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopFaceSmilingCircleOffIcon],svg[pepicons-pop-face-smiling-circle-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M13 20.5a7.5 7.5 0 1 0 0-15a7.5 7.5 0 0 0 0 15m0 2a9.5 9.5 0 1 0 0-19a9.5 9.5 0 0 0 0 19" clip-rule="evenodd"></svg:path><svg:path d="M11.5 10.25a1.25 1.25 0 1 1-2.5 0a1.25 1.25 0 0 1 2.5 0m5.5 0a1.25 1.25 0 1 1-2.5 0a1.25 1.25 0 0 1 2.5 0"></svg:path><svg:path fill-rule="evenodd" d="M17.447 15.106a1 1 0 0 1 .447 1.341L17 16l.894.448v.001l-.002.003l-.003.005l-.006.013a2 2 0 0 1-.077.135q-.073.122-.21.308a4.8 4.8 0 0 1-.846.868C15.96 18.413 14.743 19 13 19s-2.96-.587-3.75-1.22a4.8 4.8 0 0 1-.847-.867a4 4 0 0 1-.286-.443l-.006-.013l-.003-.005l-.001-.003c-.001-.001-.001-.002.893-.449l-.894.447a1 1 0 1 1 1.798-.88q.025.046.1.146c.098.13.26.317.496.506c.46.368 1.243.781 2.5.781s2.04-.413 2.5-.78a2.8 2.8 0 0 0 .497-.507a2 2 0 0 0 .114-.172a1 1 0 0 1 1.336-.436" clip-rule="evenodd"></svg:path><svg:path d="M4.293 5.707a1 1 0 0 1 1.414-1.414l16 16a1 1 0 0 1-1.414 1.414z"></svg:path><svg:path fill-rule="evenodd" d="M13 24c6.075 0 11-4.925 11-11S19.075 2 13 2S2 6.925 2 13s4.925 11 11 11m0 2c7.18 0 13-5.82 13-13S20.18 0 13 0S0 5.82 0 13s5.82 13 13 13" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPopFaceSmilingCircleOffIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopFaceSmilingOffIcon],svg[pepicons-pop-face-smiling-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M10 17.5a7.5 7.5 0 1 0 0-15a7.5 7.5 0 0 0 0 15m0 2a9.5 9.5 0 1 0 0-19a9.5 9.5 0 0 0 0 19" clip-rule="evenodd"></svg:path><svg:path d="M8.5 7.25a1.25 1.25 0 1 1-2.5 0a1.25 1.25 0 0 1 2.5 0m5.5 0a1.25 1.25 0 1 1-2.5 0a1.25 1.25 0 0 1 2.5 0"></svg:path><svg:path fill-rule="evenodd" d="M14.447 12.106a1 1 0 0 1 .447 1.341L14 13l.894.448v.001l-.002.003l-.003.005l-.006.013a2 2 0 0 1-.077.135q-.073.122-.21.307a4.8 4.8 0 0 1-.846.869C12.96 15.412 11.743 16 10 16s-2.96-.588-3.75-1.22a4.8 4.8 0 0 1-.847-.867a4 4 0 0 1-.286-.443l-.006-.013l-.003-.005l-.001-.003c-.001-.001-.001-.002.893-.449l-.894.447a1 1 0 1 1 1.798-.88q.025.046.1.146c.098.13.26.317.496.506c.46.369 1.243.781 2.5.781s2.04-.412 2.5-.78a2.8 2.8 0 0 0 .497-.508a2 2 0 0 0 .114-.17a1 1 0 0 1 1.336-.437" clip-rule="evenodd"></svg:path><svg:path d="M1.293 2.707a1 1 0 0 1 1.414-1.414l16 16a1 1 0 0 1-1.414 1.414z"></svg:path></svg:g>`,
})
export class PepiconsPopFaceSmilingOffIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopFastForwardIcon],svg[pepicons-pop-fast-forward-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M11.363 9.318a1 1 0 0 1 0 1.364l-4.632 4.963c-.62.664-1.731.226-1.731-.682V5.037c0-.908 1.112-1.346 1.731-.682z"></svg:path><svg:path fill-rule="evenodd" d="M9.264 10L7 7.574v4.852zm2.1.682a1 1 0 0 0 0-1.364L6.73 4.355C6.111 3.69 5 4.129 5 5.037v9.926c0 .908 1.112 1.346 1.731.682z" clip-rule="evenodd"></svg:path><svg:path d="M16.363 9.318a1 1 0 0 1 0 1.364l-4.632 4.963c-.62.664-1.731.226-1.731-.682V5.037c0-.908 1.112-1.346 1.731-.682z"></svg:path><svg:path fill-rule="evenodd" d="M14.264 10L12 7.574v4.852zm2.1.682a1 1 0 0 0 0-1.364L11.73 4.355c-.619-.665-1.73-.226-1.73.682v9.926c0 .908 1.112 1.346 1.731.682z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPopFastForwardIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopFastForwardCircleIcon],svg[pepicons-pop-fast-forward-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M14.363 12.318a1 1 0 0 1 0 1.364l-4.632 4.963c-.62.664-1.731.226-1.731-.682V8.037c0-.908 1.112-1.346 1.731-.682z"></svg:path><svg:path fill-rule="evenodd" d="M12.264 13L10 10.574v4.852zm2.1.682a1 1 0 0 0 0-1.364L9.73 7.355C9.111 6.69 8 7.129 8 8.037v9.926c0 .908 1.112 1.346 1.731.682z" clip-rule="evenodd"></svg:path><svg:path d="M19.363 12.318a1 1 0 0 1 0 1.364l-4.632 4.963c-.62.664-1.731.226-1.731-.682V8.037c0-.908 1.112-1.346 1.731-.682z"></svg:path><svg:path fill-rule="evenodd" d="M17.264 13L15 10.574v4.852zm2.1.682a1 1 0 0 0 0-1.364L14.73 7.355c-.619-.665-1.73-.226-1.73.682v9.926c0 .908 1.112 1.346 1.731.682z" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M13 24c6.075 0 11-4.925 11-11S19.075 2 13 2S2 6.925 2 13s4.925 11 11 11m0 2c7.18 0 13-5.82 13-13S20.18 0 13 0S0 5.82 0 13s5.82 13 13 13" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPopFastForwardCircleIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopFastForwardCircleFilledIcon],svg[pepicons-pop-fast-forward-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPopFastForwardCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:g fill="#000"><svg:path d="M14.363 12.318a1 1 0 0 1 0 1.364l-4.632 4.963c-.62.664-1.731.226-1.731-.682V8.037c0-.908 1.112-1.346 1.731-.682z"></svg:path><svg:path fill-rule="evenodd" d="M12.264 13L10 10.574v4.852zm2.1.682a1 1 0 0 0 0-1.364L9.73 7.355C9.111 6.69 8 7.129 8 8.037v9.926c0 .908 1.112 1.346 1.731.682z" clip-rule="evenodd"></svg:path><svg:path d="M19.363 12.318a1 1 0 0 1 0 1.364l-4.632 4.963c-.62.664-1.731.226-1.731-.682V8.037c0-.908 1.112-1.346 1.731-.682z"></svg:path><svg:path fill-rule="evenodd" d="M17.264 13L15 10.574v4.852zm2.1.682a1 1 0 0 0 0-1.364L14.73 7.355c-.619-.665-1.73-.226-1.73.682v9.926c0 .908 1.112 1.346 1.731.682z" clip-rule="evenodd"></svg:path></svg:g></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPopFastForwardCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPopFastForwardCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopFastForwardCircleOffIcon],svg[pepicons-pop-fast-forward-circle-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M14.363 12.318a1 1 0 0 1 0 1.364l-4.632 4.963c-.62.664-1.731.226-1.731-.682V8.037c0-.908 1.112-1.346 1.731-.682z"></svg:path><svg:path fill-rule="evenodd" d="M12.264 13L10 10.574v4.852zm2.1.682a1 1 0 0 0 0-1.364L9.73 7.355C9.111 6.69 8 7.129 8 8.037v9.926c0 .908 1.112 1.346 1.731.682z" clip-rule="evenodd"></svg:path><svg:path d="M19.363 12.318a1 1 0 0 1 0 1.364l-4.632 4.963c-.62.664-1.731.226-1.731-.682V8.037c0-.908 1.112-1.346 1.731-.682z"></svg:path><svg:path fill-rule="evenodd" d="M17.264 13L15 10.574v4.852zm2.1.682a1 1 0 0 0 0-1.364L14.73 7.355c-.619-.665-1.73-.226-1.73.682v9.926c0 .908 1.112 1.346 1.731.682z" clip-rule="evenodd"></svg:path><svg:path d="M4.293 5.707a1 1 0 0 1 1.414-1.414l16 16a1 1 0 0 1-1.414 1.414z"></svg:path><svg:path fill-rule="evenodd" d="M13 24c6.075 0 11-4.925 11-11S19.075 2 13 2S2 6.925 2 13s4.925 11 11 11m0 2c7.18 0 13-5.82 13-13S20.18 0 13 0S0 5.82 0 13s5.82 13 13 13" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPopFastForwardCircleOffIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopFastForwardOffIcon],svg[pepicons-pop-fast-forward-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M11.363 9.318a1 1 0 0 1 0 1.364l-4.632 4.963c-.62.664-1.731.226-1.731-.682V5.037c0-.908 1.112-1.346 1.731-.682z"></svg:path><svg:path fill-rule="evenodd" d="M9.264 10L7 7.574v4.852zm2.1.682a1 1 0 0 0 0-1.364L6.73 4.355C6.111 3.69 5 4.129 5 5.037v9.926c0 .908 1.112 1.346 1.731.682z" clip-rule="evenodd"></svg:path><svg:path d="M16.363 9.318a1 1 0 0 1 0 1.364l-4.632 4.963c-.62.664-1.731.226-1.731-.682V5.037c0-.908 1.112-1.346 1.731-.682z"></svg:path><svg:path fill-rule="evenodd" d="M14.264 10L12 7.574v4.852zm2.1.682a1 1 0 0 0 0-1.364L11.73 4.355c-.619-.665-1.73-.226-1.73.682v9.926c0 .908 1.112 1.346 1.731.682z" clip-rule="evenodd"></svg:path><svg:path d="M1.293 2.707a1 1 0 0 1 1.414-1.414l16 16a1 1 0 0 1-1.414 1.414z"></svg:path></svg:g>`,
})
export class PepiconsPopFastForwardOffIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopFileIcon],svg[pepicons-pop-file-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M5.75 11.5a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 0 1.5h-7a.75.75 0 0 1-.75-.75m0 3a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 0 1.5h-7a.75.75 0 0 1-.75-.75"></svg:path><svg:path d="M2.5 2.5c0-1.102.898-2 2-2h6.69c.562 0 1.092.238 1.465.631l.006.007l4.312 4.702c.359.383.527.884.527 1.36v10.3c0 1.102-.898 2-2 2h-11c-1.102 0-2-.898-2-2zm8.689 0H4.5v15h11V7.192l-4.296-4.685l-.003-.001z"></svg:path><svg:path d="M11.19.5a1 1 0 0 1 1 1v4.7h4.31a1 1 0 1 1 0 2h-5.31a1 1 0 0 1-1-1V1.5a1 1 0 0 1 1-1"></svg:path></svg:g>`,
})
export class PepiconsPopFileIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopFileCircleIcon],svg[pepicons-pop-file-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M8.75 14.5a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 0 1.5h-7a.75.75 0 0 1-.75-.75m0 3a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 0 1.5h-7a.75.75 0 0 1-.75-.75"></svg:path><svg:path d="M5.5 5.5c0-1.102.898-2 2-2h6.69c.562 0 1.092.238 1.465.631l.006.007l4.312 4.702c.359.383.527.884.527 1.36v10.3c0 1.102-.898 2-2 2h-11c-1.102 0-2-.898-2-2zm8.689 0H7.5v15h11V10.192l-4.296-4.685l-.003-.001z"></svg:path><svg:path d="M14.19 3.5a1 1 0 0 1 1 1v4.7h4.31a1 1 0 1 1 0 2h-5.31a1 1 0 0 1-1-1V4.5a1 1 0 0 1 1-1"></svg:path><svg:path d="M13 24c6.075 0 11-4.925 11-11S19.075 2 13 2S2 6.925 2 13s4.925 11 11 11m0 2c7.18 0 13-5.82 13-13S20.18 0 13 0S0 5.82 0 13s5.82 13 13 13"></svg:path></svg:g>`,
})
export class PepiconsPopFileCircleIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopFileCircleFilledIcon],svg[pepicons-pop-file-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPopFileCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:g fill="#000" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M8.75 14.5a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 0 1.5h-7a.75.75 0 0 1-.75-.75m0 3a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 0 1.5h-7a.75.75 0 0 1-.75-.75"></svg:path><svg:path d="M5.5 5.5c0-1.102.898-2 2-2h6.69c.562 0 1.092.238 1.465.631l.006.007l4.312 4.702c.359.383.527.884.527 1.36v10.3c0 1.102-.898 2-2 2h-11c-1.102 0-2-.898-2-2zm8.689 0H7.5v15h11V10.192l-4.296-4.685l-.003-.001z"></svg:path><svg:path d="M14.19 3.5a1 1 0 0 1 1 1v4.7h4.31a1 1 0 1 1 0 2h-5.31a1 1 0 0 1-1-1V4.5a1 1 0 0 1 1-1"></svg:path></svg:g></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPopFileCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPopFileCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopFileCircleOffIcon],svg[pepicons-pop-file-circle-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M8.75 14.5a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 0 1.5h-7a.75.75 0 0 1-.75-.75m0 3a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 0 1.5h-7a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M5.5 5.5c0-1.102.898-2 2-2h6.69c.562 0 1.092.238 1.465.631l.006.007l4.312 4.702c.359.383.527.884.527 1.36v10.3c0 1.102-.898 2-2 2h-11c-1.102 0-2-.898-2-2zm8.689 0H7.5v15h11V10.192l-4.296-4.685l-.003-.001z" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M14.19 3.5a1 1 0 0 1 1 1v4.7h4.31a1 1 0 1 1 0 2h-5.31a1 1 0 0 1-1-1V4.5a1 1 0 0 1 1-1" clip-rule="evenodd"></svg:path><svg:path d="M4.293 5.707a1 1 0 0 1 1.414-1.414l16 16a1 1 0 0 1-1.414 1.414z"></svg:path><svg:path fill-rule="evenodd" d="M13 24c6.075 0 11-4.925 11-11S19.075 2 13 2S2 6.925 2 13s4.925 11 11 11m0 2c7.18 0 13-5.82 13-13S20.18 0 13 0S0 5.82 0 13s5.82 13 13 13" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPopFileCircleOffIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopFileLoopIcon],svg[pepicons-pop-file-loop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M5 4a2.5 2.5 0 0 1 2.5-2.5h5.1a1 1 0 0 1 .702.288l4.4 4.333a1 1 0 0 1 .298.712V14a2.5 2.5 0 0 1-2.5 2.5H9a1 1 0 1 1 0-2h6.5a.5.5 0 0 0 .5-.5V7.833h-2.4a2 2 0 0 1-2-2V3.5H7.5A.5.5 0 0 0 7 4v1.5a1 1 0 0 1-2 0zm8.6.888l.96.945h-.96z"></svg:path><svg:path d="M8.049 8.678a2.193 2.193 0 1 0-2.058 3.873a2.193 2.193 0 0 0 2.058-3.873m-4.732-.031a4.193 4.193 0 1 1 2.674 6.033l-1.676 3.155a1 1 0 0 1-1.767-.938l1.677-3.155a4.195 4.195 0 0 1-.908-5.095"></svg:path></svg:g>`,
})
export class PepiconsPopFileLoopIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopFileLoopCircleIcon],svg[pepicons-pop-file-loop-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M8 7a2.5 2.5 0 0 1 2.5-2.5h5.1a1 1 0 0 1 .702.288l4.4 4.333a1 1 0 0 1 .298.712V17a2.5 2.5 0 0 1-2.5 2.5H12a1 1 0 1 1 0-2h6.5a.5.5 0 0 0 .5-.5v-6.167h-2.4a2 2 0 0 1-2-2V6.5h-4.1a.5.5 0 0 0-.5.5v1.5a1 1 0 0 1-2 0zm8.6.888l.96.945h-.96z"></svg:path><svg:path d="M11.049 11.678a2.193 2.193 0 1 0-2.058 3.873a2.193 2.193 0 0 0 2.058-3.873m-4.732-.031a4.193 4.193 0 1 1 2.674 6.033l-1.676 3.155a1 1 0 0 1-1.767-.938l1.677-3.155a4.195 4.195 0 0 1-.908-5.095"></svg:path><svg:path d="M13 24c6.075 0 11-4.925 11-11S19.075 2 13 2S2 6.925 2 13s4.925 11 11 11m0 2c7.18 0 13-5.82 13-13S20.18 0 13 0S0 5.82 0 13s5.82 13 13 13"></svg:path></svg:g>`,
})
export class PepiconsPopFileLoopCircleIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopFileLoopCircleFilledIcon],svg[pepicons-pop-file-loop-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPopFileLoopCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:g fill="#000" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M8 7a2.5 2.5 0 0 1 2.5-2.5h5.1a1 1 0 0 1 .702.288l4.4 4.333a1 1 0 0 1 .298.712V17a2.5 2.5 0 0 1-2.5 2.5H12a1 1 0 1 1 0-2h6.5a.5.5 0 0 0 .5-.5v-6.167h-2.4a2 2 0 0 1-2-2V6.5h-4.1a.5.5 0 0 0-.5.5v1.5a1 1 0 0 1-2 0zm8.6.888l.96.945h-.96z"></svg:path><svg:path d="M11.049 11.678a2.193 2.193 0 1 0-2.058 3.873a2.193 2.193 0 0 0 2.058-3.873m-4.732-.031a4.193 4.193 0 1 1 2.674 6.033l-1.676 3.155a1 1 0 0 1-1.767-.938l1.677-3.155a4.195 4.195 0 0 1-.908-5.095"></svg:path></svg:g></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPopFileLoopCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPopFileLoopCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopFileLoopCircleOffIcon],svg[pepicons-pop-file-loop-circle-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:g fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M8 7a2.5 2.5 0 0 1 2.5-2.5h5.1a1 1 0 0 1 .702.288l4.4 4.333a1 1 0 0 1 .298.712V17a2.5 2.5 0 0 1-2.5 2.5H12a1 1 0 1 1 0-2h6.5a.5.5 0 0 0 .5-.5v-6.167h-2.4a2 2 0 0 1-2-2V6.5h-4.1a.5.5 0 0 0-.5.5v1.5a1 1 0 0 1-2 0zm8.6.888l.96.945h-.96z"></svg:path><svg:path d="M11.049 11.678a2.193 2.193 0 1 0-2.058 3.873a2.193 2.193 0 0 0 2.058-3.873m-4.732-.031a4.193 4.193 0 1 1 2.674 6.033l-1.676 3.155a1 1 0 0 1-1.767-.938l1.677-3.155a4.195 4.195 0 0 1-.908-5.095"></svg:path></svg:g><svg:path d="M4.293 5.707a1 1 0 0 1 1.414-1.414l16 16a1 1 0 0 1-1.414 1.414z"></svg:path><svg:path fill-rule="evenodd" d="M13 24c6.075 0 11-4.925 11-11S19.075 2 13 2S2 6.925 2 13s4.925 11 11 11m0 2c7.18 0 13-5.82 13-13S20.18 0 13 0S0 5.82 0 13s5.82 13 13 13" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPopFileLoopCircleOffIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopFileLoopOffIcon],svg[pepicons-pop-file-loop-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:g fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M5 4a2.5 2.5 0 0 1 2.5-2.5h5.1a1 1 0 0 1 .702.288l4.4 4.333a1 1 0 0 1 .298.712V14a2.5 2.5 0 0 1-2.5 2.5H9a1 1 0 1 1 0-2h6.5a.5.5 0 0 0 .5-.5V7.833h-2.4a2 2 0 0 1-2-2V3.5H7.5A.5.5 0 0 0 7 4v1.5a1 1 0 0 1-2 0zm8.6.888l.96.945h-.96z"></svg:path><svg:path d="M8.049 8.678a2.193 2.193 0 1 0-2.058 3.873a2.193 2.193 0 0 0 2.058-3.873m-4.732-.031a4.193 4.193 0 1 1 2.674 6.033l-1.676 3.155a1 1 0 0 1-1.767-.938l1.677-3.155a4.195 4.195 0 0 1-.908-5.095"></svg:path></svg:g><svg:path d="M1.293 2.707a1 1 0 0 1 1.414-1.414l16 16a1 1 0 0 1-1.414 1.414z"></svg:path></svg:g>`,
})
export class PepiconsPopFileLoopOffIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopFileOffIcon],svg[pepicons-pop-file-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M5.75 11.5a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 0 1.5h-7a.75.75 0 0 1-.75-.75m0 3a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 0 1.5h-7a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M2.5 2.5c0-1.102.898-2 2-2h6.69c.562 0 1.092.238 1.465.631l.006.007l4.312 4.702c.359.383.527.884.527 1.36v10.3c0 1.102-.898 2-2 2h-11c-1.102 0-2-.898-2-2zm8.689 0H4.5v15h11V7.192l-4.296-4.685l-.003-.001z" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M11.19.5a1 1 0 0 1 1 1v4.7h4.31a1 1 0 1 1 0 2h-5.31a1 1 0 0 1-1-1V1.5a1 1 0 0 1 1-1" clip-rule="evenodd"></svg:path><svg:path d="M1.293 2.707a1 1 0 0 1 1.414-1.414l16 16a1 1 0 0 1-1.414 1.414z"></svg:path></svg:g>`,
})
export class PepiconsPopFileOffIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopFilmFrameIcon],svg[pepicons-pop-film-frame-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1.5 2.5a1 1 0 0 0-1 1v13a1 1 0 0 0 1 1h17a1 1 0 0 0 1-1v-13a1 1 0 0 0-1-1zm14 2h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1A.5.5 0 0 1 15 6V5a.5.5 0 0 1 .5-.5m1 3h-1a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1A.5.5 0 0 0 17 9V8a.5.5 0 0 0-.5-.5m-1 3h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5m1 3h-1a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5m-13-9h1A.5.5 0 0 1 5 5v1a.5.5 0 0 1-.5.5h-1A.5.5 0 0 1 3 6V5a.5.5 0 0 1 .5-.5m1 3h-1A.5.5 0 0 0 3 8v1a.5.5 0 0 0 .5.5h1A.5.5 0 0 0 5 9V8a.5.5 0 0 0-.5-.5m-1 3h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1A.5.5 0 0 1 3 12v-1a.5.5 0 0 1 .5-.5m1 3h-1a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1A.5.5 0 0 0 5 15v-1a.5.5 0 0 0-.5-.5m2 2v-11h7v11z" clip-rule="evenodd"></svg:path>`,
})
export class PepiconsPopFilmFrameIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopFilmFrameCircleIcon],svg[pepicons-pop-film-frame-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M4.5 5.5a1 1 0 0 0-1 1v13a1 1 0 0 0 1 1h17a1 1 0 0 0 1-1v-13a1 1 0 0 0-1-1zm14 2h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1A.5.5 0 0 1 18 9V8a.5.5 0 0 1 .5-.5m1 3h-1a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5m-1 3h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5m1 3h-1a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5m-13-9h1A.5.5 0 0 1 8 8v1a.5.5 0 0 1-.5.5h-1A.5.5 0 0 1 6 9V8a.5.5 0 0 1 .5-.5m1 3h-1a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1A.5.5 0 0 0 8 12v-1a.5.5 0 0 0-.5-.5m-1 3h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1A.5.5 0 0 1 6 15v-1a.5.5 0 0 1 .5-.5m1 3h-1a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1A.5.5 0 0 0 8 18v-1a.5.5 0 0 0-.5-.5m2 2v-11h7v11z"></svg:path><svg:path d="M13 24c6.075 0 11-4.925 11-11S19.075 2 13 2S2 6.925 2 13s4.925 11 11 11m0 2c7.18 0 13-5.82 13-13S20.18 0 13 0S0 5.82 0 13s5.82 13 13 13"></svg:path></svg:g>`,
})
export class PepiconsPopFilmFrameCircleIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopFilmFrameCircleFilledIcon],svg[pepicons-pop-film-frame-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPopFilmFrameCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:path fill="#000" fill-rule="evenodd" d="M4.5 5.5a1 1 0 0 0-1 1v13a1 1 0 0 0 1 1h17a1 1 0 0 0 1-1v-13a1 1 0 0 0-1-1zm14 2h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1A.5.5 0 0 1 18 9V8a.5.5 0 0 1 .5-.5m1 3h-1a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5m-1 3h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5m1 3h-1a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5m-13-9h1A.5.5 0 0 1 8 8v1a.5.5 0 0 1-.5.5h-1A.5.5 0 0 1 6 9V8a.5.5 0 0 1 .5-.5m1 3h-1a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1A.5.5 0 0 0 8 12v-1a.5.5 0 0 0-.5-.5m-1 3h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1A.5.5 0 0 1 6 15v-1a.5.5 0 0 1 .5-.5m1 3h-1a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1A.5.5 0 0 0 8 18v-1a.5.5 0 0 0-.5-.5m2 2v-11h7v11z" clip-rule="evenodd"></svg:path></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPopFilmFrameCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPopFilmFrameCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopFilmFrameCircleOffIcon],svg[pepicons-pop-film-frame-circle-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M4.5 5.5a1 1 0 0 0-1 1v13a1 1 0 0 0 1 1h17a1 1 0 0 0 1-1v-13a1 1 0 0 0-1-1zm14 2h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1A.5.5 0 0 1 18 9V8a.5.5 0 0 1 .5-.5m1 3h-1a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5m-1 3h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5m1 3h-1a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5m-13-9h1A.5.5 0 0 1 8 8v1a.5.5 0 0 1-.5.5h-1A.5.5 0 0 1 6 9V8a.5.5 0 0 1 .5-.5m1 3h-1a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1A.5.5 0 0 0 8 12v-1a.5.5 0 0 0-.5-.5m-1 3h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1A.5.5 0 0 1 6 15v-1a.5.5 0 0 1 .5-.5m1 3h-1a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1A.5.5 0 0 0 8 18v-1a.5.5 0 0 0-.5-.5m2 2v-11h7v11z" clip-rule="evenodd"></svg:path><svg:path d="M4.293 5.707a1 1 0 0 1 1.414-1.414l16 16a1 1 0 0 1-1.414 1.414z"></svg:path><svg:path fill-rule="evenodd" d="M13 24c6.075 0 11-4.925 11-11S19.075 2 13 2S2 6.925 2 13s4.925 11 11 11m0 2c7.18 0 13-5.82 13-13S20.18 0 13 0S0 5.82 0 13s5.82 13 13 13" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPopFilmFrameCircleOffIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopFilmFrameOffIcon],svg[pepicons-pop-film-frame-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M1.5 2.5a1 1 0 0 0-1 1v13a1 1 0 0 0 1 1h17a1 1 0 0 0 1-1v-13a1 1 0 0 0-1-1zm14 2h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1A.5.5 0 0 1 15 6V5a.5.5 0 0 1 .5-.5m1 3h-1a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1A.5.5 0 0 0 17 9V8a.5.5 0 0 0-.5-.5m-1 3h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5m1 3h-1a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5m-13-9h1A.5.5 0 0 1 5 5v1a.5.5 0 0 1-.5.5h-1A.5.5 0 0 1 3 6V5a.5.5 0 0 1 .5-.5m1 3h-1A.5.5 0 0 0 3 8v1a.5.5 0 0 0 .5.5h1A.5.5 0 0 0 5 9V8a.5.5 0 0 0-.5-.5m-1 3h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1A.5.5 0 0 1 3 12v-1a.5.5 0 0 1 .5-.5m1 3h-1a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1A.5.5 0 0 0 5 15v-1a.5.5 0 0 0-.5-.5m2 2v-11h7v11z" clip-rule="evenodd"></svg:path><svg:path d="M1.293 2.707a1 1 0 0 1 1.414-1.414l16 16a1 1 0 0 1-1.414 1.414z"></svg:path></svg:g>`,
})
export class PepiconsPopFilmFrameOffIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopFireIcon],svg[pepicons-pop-fire-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M6.96 13.1a.9.9 0 0 1 .9.9a2.14 2.14 0 0 0 4.28 0a.9.9 0 0 1 1.8 0a3.94 3.94 0 0 1-7.88 0a.9.9 0 0 1 .9-.9"></svg:path><svg:path d="M10.043 9.693a.9.9 0 0 1 1.223-.35c1.482.824 2.165 2 2.463 2.978c.146.482.199.91.215 1.223a4 4 0 0 1-.007.533l-.001.013v.005l-.001.002v.001L13.04 14l.895.1a.9.9 0 0 1-1.79-.192m0 0v-.005l.003-.047a3.3 3.3 0 0 0-.141-1.01c-.187-.612-.61-1.37-1.615-1.929a.9.9 0 0 1-.35-1.224m-1.192.524a.9.9 0 0 0-1.273-.025a4.95 4.95 0 0 0-1.417 2.561a5 5 0 0 0-.105 1.213l.006.087l.002.029l.001.01v.004l.001.002l.874-.096l-.874.097a.9.9 0 0 0 1.79-.191m0-.002v.002zm0-.004v.004l-.002-.03a3.2 3.2 0 0 1 .068-.75a3.15 3.15 0 0 1 .904-1.637a.9.9 0 0 0 .024-1.273m-.995 3.685"></svg:path><svg:path d="M7.63 10.145a.9.9 0 0 1 1.267.12l1.244 1.503a.9.9 0 0 1-1.387 1.147L7.51 11.412a.9.9 0 0 1 .12-1.267"></svg:path><svg:path d="M11.306 9.367a.9.9 0 0 1 .286 1.24L10.21 12.82a.9.9 0 0 1-1.526-.954l1.382-2.211a.9.9 0 0 1 1.24-.287"></svg:path><svg:path d="M3.5 10a1 1 0 0 1 1 1c0 3.09 2.437 5.568 5.498 5.568S15.5 14.088 15.5 11a1 1 0 1 1 2 0c0 4.166-3.309 7.568-7.502 7.568S2.5 15.166 2.5 11a1 1 0 0 1 1-1"></svg:path><svg:path d="M6.1 4.7a1 1 0 0 0-1.4.2C3.055 7.094 2.5 9.81 2.5 11a1 1 0 1 0 2 0c0-.81.445-3.094 1.8-4.9a1 1 0 0 0-.2-1.4m7.26-.968a1 1 0 0 1 1.408.128c1.372 1.646 2.052 3.421 2.39 4.772c.17.678.255 1.256.298 1.67a9 9 0 0 1 .043.635v.042l.001.013v.007l-1 .001h1a1 1 0 0 1-2 .003v-.02l-.004-.091a7 7 0 0 0-.03-.382a10 10 0 0 0-.249-1.392c-.287-1.15-.857-2.624-1.985-3.978a1 1 0 0 1 .128-1.408"></svg:path><svg:path d="M4.985 4.643a1 1 0 0 1 1.372.343l1.5 2.5a1 1 0 0 1-1.715 1.028l-1.5-2.5a1 1 0 0 1 .343-1.372m3.803-3.345a1 1 0 0 1 1.415-.009L9.5 2l.703-.712l.002.003l.004.004l.015.014l.053.054q.069.068.187.192c.155.162.368.39.599.652c.439.5 1.019 1.21 1.334 1.852c.255.516.518 1.178.712 1.69a38 38 0 0 1 .31.852l.02.053l.006.02a1 1 0 0 1-1.89.652l-.002-.004l-.004-.012l-.017-.048a33 33 0 0 0-.293-.804c-.19-.502-.426-1.09-.636-1.516c-.187-.381-.607-.92-1.043-1.415a19 19 0 0 0-.706-.758l-.044-.045l-.01-.01l-.002-.002a1 1 0 0 1-.01-1.415"></svg:path><svg:path d="M9.545 1.225c.57.08.966.605.886 1.174l-1.03-.144l1.03.144v.003l-.001.006l-.003.022l-.012.077q-.014.1-.044.275c-.038.23-.096.55-.171.905c-.144.676-.377 1.602-.716 2.263a22 22 0 0 1-.968 1.645a40 40 0 0 1-.517.788l-.033.049l-.012.017a1.04 1.04 0 0 1-1.718-1.172l.002-.003l.007-.01l.03-.045a31 31 0 0 0 .488-.744c.3-.47.644-1.032.87-1.473c.201-.392.39-1.077.532-1.748a20 20 0 0 0 .194-1.06l.01-.064l.002-.015V2.11a1.04 1.04 0 0 1 1.174-.886m4.97 2.419a1 1 0 0 0-1.372.343l-1.5 2.5a1 1 0 1 0 1.714 1.028l1.5-2.5a1 1 0 0 0-.342-1.372"></svg:path></svg:g>`,
})
export class PepiconsPopFireIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopFireCircleIcon],svg[pepicons-pop-fire-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M9.96 16.1a.9.9 0 0 1 .9.9a2.14 2.14 0 0 0 4.28 0a.9.9 0 0 1 1.8 0a3.94 3.94 0 0 1-7.88 0a.9.9 0 0 1 .9-.9"></svg:path><svg:path d="M13.043 12.693a.9.9 0 0 1 1.223-.35c1.482.824 2.165 2 2.463 2.978c.146.482.199.91.215 1.223a4 4 0 0 1-.007.533l-.001.013v.005l-.001.002v.001L16.04 17l.895.1a.9.9 0 0 1-1.79-.192m0 0v-.005l.003-.047a3.3 3.3 0 0 0-.141-1.01c-.187-.612-.61-1.37-1.615-1.929a.9.9 0 0 1-.35-1.224m-1.192.524a.9.9 0 0 0-1.273-.025a4.95 4.95 0 0 0-1.417 2.561a5 5 0 0 0-.105 1.213l.006.087l.002.029l.001.01v.004l.001.002l.874-.096l-.874.097a.9.9 0 0 0 1.79-.191m0-.002v.002zm0-.004v.004l-.002-.03a3.2 3.2 0 0 1 .069-.75a3.15 3.15 0 0 1 .903-1.637a.9.9 0 0 0 .024-1.273m-.995 3.685"></svg:path><svg:path d="M10.63 13.145a.9.9 0 0 1 1.267.12l1.244 1.503a.9.9 0 0 1-1.387 1.147l-1.244-1.503a.9.9 0 0 1 .12-1.267"></svg:path><svg:path d="M14.306 12.367a.9.9 0 0 1 .286 1.24L13.21 15.82a.9.9 0 0 1-1.526-.954l1.382-2.211a.9.9 0 0 1 1.24-.287"></svg:path><svg:path d="M6.5 13a1 1 0 0 1 1 1c0 3.09 2.437 5.568 5.498 5.568S18.5 17.088 18.5 14a1 1 0 1 1 2 0c0 4.166-3.309 7.568-7.502 7.568S5.5 18.166 5.5 14a1 1 0 0 1 1-1"></svg:path><svg:path d="M9.1 7.7a1 1 0 0 0-1.4.2c-1.645 2.194-2.2 4.91-2.2 6.1a1 1 0 1 0 2 0c0-.81.445-3.094 1.8-4.9a1 1 0 0 0-.2-1.4m7.26-.968a1 1 0 0 1 1.408.128c1.372 1.646 2.052 3.421 2.39 4.772c.17.678.255 1.256.298 1.67a9 9 0 0 1 .043.635v.042l.001.013v.007l-1 .001h1a1 1 0 0 1-2 .003v-.02l-.004-.091a7 7 0 0 0-.03-.382a10 10 0 0 0-.249-1.392c-.287-1.15-.857-2.624-1.985-3.978a1 1 0 0 1 .128-1.408"></svg:path><svg:path d="M7.985 7.643a1 1 0 0 1 1.372.343l1.5 2.5a1 1 0 0 1-1.715 1.028l-1.5-2.5a1 1 0 0 1 .343-1.371m3.803-3.346a1 1 0 0 1 1.415-.009L12.5 5l.703-.712l.002.003l.004.004l.015.014l.053.054q.069.068.187.192c.155.162.368.39.599.652c.439.5 1.019 1.21 1.334 1.852c.255.516.518 1.178.712 1.69a38 38 0 0 1 .31.852l.02.053l.006.02a1 1 0 0 1-1.89.652l-.002-.004l-.004-.012l-.017-.048a33 33 0 0 0-.293-.804c-.19-.502-.426-1.09-.636-1.516c-.187-.381-.607-.92-1.043-1.415a19 19 0 0 0-.706-.758l-.044-.045l-.01-.01l-.002-.002a1 1 0 0 1-.01-1.415"></svg:path><svg:path d="M12.545 4.225c.57.08.966.605.886 1.174l-1.03-.144l1.03.144v.003l-.001.006l-.003.022l-.012.077q-.014.1-.044.275c-.038.23-.096.55-.171.905c-.144.676-.377 1.602-.716 2.263a22 22 0 0 1-.968 1.645a40 40 0 0 1-.517.788l-.033.049l-.012.017a1.04 1.04 0 0 1-1.718-1.172l.002-.003l.007-.01l.03-.045a31 31 0 0 0 .488-.744c.3-.47.644-1.032.87-1.473c.201-.392.39-1.077.532-1.748a20 20 0 0 0 .194-1.06l.01-.064l.002-.015V5.11a1.04 1.04 0 0 1 1.174-.886m4.97 2.419a1 1 0 0 0-1.372.343l-1.5 2.5a1 1 0 1 0 1.715 1.028l1.5-2.5a1 1 0 0 0-.344-1.371"></svg:path><svg:path d="M13 24c6.075 0 11-4.925 11-11S19.075 2 13 2S2 6.925 2 13s4.925 11 11 11m0 2c7.18 0 13-5.82 13-13S20.18 0 13 0S0 5.82 0 13s5.82 13 13 13"></svg:path></svg:g>`,
})
export class PepiconsPopFireCircleIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopFireCircleFilledIcon],svg[pepicons-pop-fire-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPopFireCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:g fill="#000" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M9.96 16.1a.9.9 0 0 1 .9.9a2.14 2.14 0 0 0 4.28 0a.9.9 0 0 1 1.8 0a3.94 3.94 0 0 1-7.88 0a.9.9 0 0 1 .9-.9"></svg:path><svg:path d="M13.043 12.693a.9.9 0 0 1 1.223-.35c1.482.824 2.165 2 2.463 2.978c.146.482.199.91.215 1.223a4 4 0 0 1-.007.533l-.001.013v.005l-.001.002v.001L16.04 17l.895.1a.9.9 0 0 1-1.79-.192m0 0v-.005l.003-.047a3.3 3.3 0 0 0-.141-1.01c-.187-.612-.61-1.37-1.615-1.929a.9.9 0 0 1-.35-1.224m-1.192.524a.9.9 0 0 0-1.273-.025a4.95 4.95 0 0 0-1.417 2.561a5 5 0 0 0-.105 1.213l.006.087l.002.029l.001.01v.004l.001.002l.874-.096l-.874.097a.9.9 0 0 0 1.79-.191m0-.002v.002zm0-.004v.004l-.002-.03a3.2 3.2 0 0 1 .069-.75a3.15 3.15 0 0 1 .903-1.637a.9.9 0 0 0 .024-1.273m-.995 3.685"></svg:path><svg:path d="M10.63 13.145a.9.9 0 0 1 1.267.12l1.244 1.503a.9.9 0 0 1-1.387 1.147l-1.244-1.503a.9.9 0 0 1 .12-1.267"></svg:path><svg:path d="M14.306 12.367a.9.9 0 0 1 .286 1.24L13.21 15.82a.9.9 0 0 1-1.526-.954l1.382-2.211a.9.9 0 0 1 1.24-.287"></svg:path><svg:path d="M6.5 13a1 1 0 0 1 1 1c0 3.09 2.437 5.568 5.498 5.568S18.5 17.088 18.5 14a1 1 0 1 1 2 0c0 4.166-3.309 7.568-7.502 7.568S5.5 18.166 5.5 14a1 1 0 0 1 1-1"></svg:path><svg:path d="M9.1 7.7a1 1 0 0 0-1.4.2c-1.645 2.194-2.2 4.91-2.2 6.1a1 1 0 1 0 2 0c0-.81.445-3.094 1.8-4.9a1 1 0 0 0-.2-1.4m7.26-.968a1 1 0 0 1 1.408.128c1.372 1.646 2.052 3.421 2.39 4.772c.17.678.255 1.256.298 1.67a9 9 0 0 1 .043.635v.042l.001.013v.007l-1 .001h1a1 1 0 0 1-2 .003v-.02l-.004-.091a7 7 0 0 0-.03-.382a10 10 0 0 0-.249-1.392c-.287-1.15-.857-2.624-1.985-3.978a1 1 0 0 1 .128-1.408"></svg:path><svg:path d="M7.985 7.643a1 1 0 0 1 1.372.343l1.5 2.5a1 1 0 0 1-1.715 1.028l-1.5-2.5a1 1 0 0 1 .343-1.371m3.803-3.346a1 1 0 0 1 1.415-.009L12.5 5l.703-.712l.002.003l.004.004l.015.014l.053.054q.069.068.187.192c.155.162.368.39.599.652c.439.5 1.019 1.21 1.334 1.852c.255.516.518 1.178.712 1.69a38 38 0 0 1 .31.852l.02.053l.006.02a1 1 0 0 1-1.89.652l-.002-.004l-.004-.012l-.017-.048a33 33 0 0 0-.293-.804c-.19-.502-.426-1.09-.636-1.516c-.187-.381-.607-.92-1.043-1.415a19 19 0 0 0-.706-.758l-.044-.045l-.01-.01l-.002-.002a1 1 0 0 1-.01-1.415"></svg:path><svg:path d="M12.545 4.225c.57.08.966.605.886 1.174l-1.03-.144l1.03.144v.003l-.001.006l-.003.022l-.012.077q-.014.1-.044.275c-.038.23-.096.55-.171.905c-.144.676-.377 1.602-.716 2.263a22 22 0 0 1-.968 1.645a40 40 0 0 1-.517.788l-.033.049l-.012.017a1.04 1.04 0 0 1-1.718-1.172l.002-.003l.007-.01l.03-.045a31 31 0 0 0 .488-.744c.3-.47.644-1.032.87-1.473c.201-.392.39-1.077.532-1.748a20 20 0 0 0 .194-1.06l.01-.064l.002-.015V5.11a1.04 1.04 0 0 1 1.174-.886m4.97 2.419a1 1 0 0 0-1.372.343l-1.5 2.5a1 1 0 1 0 1.715 1.028l1.5-2.5a1 1 0 0 0-.344-1.371"></svg:path></svg:g></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPopFireCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPopFireCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopFireCircleOffIcon],svg[pepicons-pop-fire-circle-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M9.96 16.1a.9.9 0 0 1 .9.9a2.14 2.14 0 0 0 4.28 0a.9.9 0 0 1 1.8 0a3.94 3.94 0 0 1-7.88 0a.9.9 0 0 1 .9-.9" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M13.043 12.693a.9.9 0 0 1 1.223-.35c1.482.824 2.165 2 2.463 2.978c.146.482.199.91.215 1.223a4 4 0 0 1-.007.533l-.001.013v.005l-.001.002v.001L16.04 17l.895.1a.9.9 0 0 1-1.79-.192m0 0v-.005l.003-.047a3.3 3.3 0 0 0-.141-1.01c-.187-.612-.61-1.37-1.615-1.929a.9.9 0 0 1-.35-1.224m-1.192.524a.9.9 0 0 0-1.273-.025a4.95 4.95 0 0 0-1.417 2.561a5 5 0 0 0-.105 1.213l.006.087l.002.029l.001.01v.004l.001.002l.874-.096l-.874.097a.9.9 0 0 0 1.79-.191m0-.002v.002zm0-.004v.004l-.002-.03a3.2 3.2 0 0 1 .069-.75a3.15 3.15 0 0 1 .903-1.637a.9.9 0 0 0 .024-1.273m-.995 3.685" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M10.63 13.145a.9.9 0 0 1 1.267.12l1.244 1.503a.9.9 0 0 1-1.387 1.147l-1.244-1.503a.9.9 0 0 1 .12-1.267" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M14.306 12.367a.9.9 0 0 1 .286 1.24L13.21 15.82a.9.9 0 0 1-1.526-.954l1.382-2.211a.9.9 0 0 1 1.24-.287" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M6.5 13a1 1 0 0 1 1 1c0 3.09 2.437 5.568 5.498 5.568S18.5 17.088 18.5 14a1 1 0 1 1 2 0c0 4.166-3.309 7.568-7.502 7.568S5.5 18.166 5.5 14a1 1 0 0 1 1-1" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M9.1 7.7a1 1 0 0 0-1.4.2c-1.645 2.194-2.2 4.91-2.2 6.1a1 1 0 1 0 2 0c0-.81.445-3.094 1.8-4.9a1 1 0 0 0-.2-1.4m7.26-.968a1 1 0 0 1 1.408.128c1.372 1.646 2.052 3.421 2.39 4.772c.17.678.255 1.256.298 1.67a9 9 0 0 1 .043.635v.042l.001.013v.007l-1 .001h1a1 1 0 0 1-2 .003v-.02l-.004-.091a7 7 0 0 0-.03-.382a10 10 0 0 0-.249-1.392c-.287-1.15-.857-2.624-1.985-3.978a1 1 0 0 1 .128-1.408" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M7.985 7.643a1 1 0 0 1 1.372.343l1.5 2.5a1 1 0 0 1-1.715 1.028l-1.5-2.5a1 1 0 0 1 .343-1.371m3.803-3.346a1 1 0 0 1 1.415-.009L12.5 5l.703-.712l.002.003l.004.004l.015.014l.053.054q.069.068.187.192c.155.162.368.39.599.652c.439.5 1.019 1.21 1.334 1.852c.255.516.518 1.178.712 1.69a38 38 0 0 1 .31.852l.02.053l.006.02a1 1 0 0 1-1.89.652l-.002-.004l-.004-.012l-.017-.048a33 33 0 0 0-.293-.804c-.19-.502-.426-1.09-.636-1.516c-.187-.381-.607-.92-1.043-1.415a19 19 0 0 0-.706-.758l-.044-.045l-.01-.01l-.002-.002a1 1 0 0 1-.01-1.415" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M12.545 4.225c.57.08.966.605.886 1.174l-1.03-.144l1.03.144v.003l-.001.006l-.003.022l-.012.077q-.014.1-.044.275c-.038.23-.096.55-.171.905c-.144.676-.377 1.602-.716 2.263a22 22 0 0 1-.968 1.645a40 40 0 0 1-.517.788l-.033.049l-.012.017a1.04 1.04 0 0 1-1.718-1.172l.002-.003l.007-.01l.03-.045a31 31 0 0 0 .488-.744c.3-.47.644-1.032.87-1.473c.201-.392.39-1.077.532-1.748a20 20 0 0 0 .194-1.06l.01-.064l.002-.015V5.11a1.04 1.04 0 0 1 1.174-.886m4.97 2.419a1 1 0 0 0-1.372.343l-1.5 2.5a1 1 0 1 0 1.715 1.028l1.5-2.5a1 1 0 0 0-.344-1.371" clip-rule="evenodd"></svg:path><svg:path d="M4.293 5.707a1 1 0 0 1 1.414-1.414l16 16a1 1 0 0 1-1.414 1.414z"></svg:path><svg:path fill-rule="evenodd" d="M13 24c6.075 0 11-4.925 11-11S19.075 2 13 2S2 6.925 2 13s4.925 11 11 11m0 2c7.18 0 13-5.82 13-13S20.18 0 13 0S0 5.82 0 13s5.82 13 13 13" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPopFireCircleOffIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopFireOffIcon],svg[pepicons-pop-fire-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M6.96 13.1a.9.9 0 0 1 .9.9a2.14 2.14 0 0 0 4.28 0a.9.9 0 0 1 1.8 0a3.94 3.94 0 0 1-7.88 0a.9.9 0 0 1 .9-.9" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M10.043 9.693a.9.9 0 0 1 1.223-.35c1.482.824 2.165 2 2.463 2.978c.146.482.199.91.215 1.223a4 4 0 0 1-.007.533l-.001.013v.005l-.001.002v.001L13.04 14l.895.1a.9.9 0 0 1-1.79-.192m0 0v-.005l.003-.047a3.3 3.3 0 0 0-.141-1.01c-.187-.612-.61-1.37-1.615-1.929a.9.9 0 0 1-.35-1.224m-1.192.524a.9.9 0 0 0-1.273-.025a4.95 4.95 0 0 0-1.417 2.561a5 5 0 0 0-.105 1.213l.006.087l.002.029l.001.01v.004l.001.002l.874-.096l-.874.097a.9.9 0 0 0 1.79-.191m0-.002v.002zm0-.004v.004l-.002-.03a3.2 3.2 0 0 1 .068-.75a3.15 3.15 0 0 1 .904-1.637a.9.9 0 0 0 .024-1.273m-.995 3.685" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M7.63 10.145a.9.9 0 0 1 1.267.12l1.244 1.503a.9.9 0 0 1-1.387 1.147L7.51 11.412a.9.9 0 0 1 .12-1.267" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M11.306 9.367a.9.9 0 0 1 .286 1.24L10.21 12.82a.9.9 0 0 1-1.526-.954l1.382-2.211a.9.9 0 0 1 1.24-.287" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M3.5 10a1 1 0 0 1 1 1c0 3.09 2.437 5.568 5.498 5.568S15.5 14.088 15.5 11a1 1 0 1 1 2 0c0 4.166-3.309 7.568-7.502 7.568S2.5 15.166 2.5 11a1 1 0 0 1 1-1" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M6.1 4.7a1 1 0 0 0-1.4.2C3.055 7.094 2.5 9.81 2.5 11a1 1 0 1 0 2 0c0-.81.445-3.094 1.8-4.9a1 1 0 0 0-.2-1.4m7.26-.968a1 1 0 0 1 1.408.128c1.372 1.646 2.052 3.421 2.39 4.772c.17.678.255 1.256.298 1.67a9 9 0 0 1 .043.635v.042l.001.013v.007l-1 .001h1a1 1 0 0 1-2 .003v-.02l-.004-.091a7 7 0 0 0-.03-.382a10 10 0 0 0-.249-1.392c-.287-1.15-.857-2.624-1.985-3.978a1 1 0 0 1 .128-1.408" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M4.985 4.643a1 1 0 0 1 1.372.343l1.5 2.5a1 1 0 0 1-1.715 1.028l-1.5-2.5a1 1 0 0 1 .343-1.372m3.803-3.345a1 1 0 0 1 1.415-.009L9.5 2l.703-.712l.002.003l.004.004l.015.014l.053.054q.069.068.187.192c.155.162.368.39.599.652c.439.5 1.019 1.21 1.334 1.852c.255.516.518 1.178.712 1.69a38 38 0 0 1 .31.852l.02.053l.006.02a1 1 0 0 1-1.89.652l-.002-.004l-.004-.012l-.017-.048a33 33 0 0 0-.293-.804c-.19-.502-.426-1.09-.636-1.516c-.187-.381-.607-.92-1.043-1.415a19 19 0 0 0-.706-.758l-.044-.045l-.01-.01l-.002-.002a1 1 0 0 1-.01-1.415" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M9.545 1.225c.57.08.966.605.886 1.174l-1.03-.144l1.03.144v.003l-.001.006l-.003.022l-.012.077q-.014.1-.044.275c-.038.23-.096.55-.171.905c-.144.676-.377 1.602-.716 2.263a22 22 0 0 1-.968 1.645a40 40 0 0 1-.517.788l-.033.049l-.012.017a1.04 1.04 0 0 1-1.718-1.172l.002-.003l.007-.01l.03-.045a31 31 0 0 0 .488-.744c.3-.47.644-1.032.87-1.473c.201-.392.39-1.077.532-1.748a20 20 0 0 0 .194-1.06l.01-.064l.002-.015V2.11a1.04 1.04 0 0 1 1.174-.886m4.97 2.419a1 1 0 0 0-1.372.343l-1.5 2.5a1 1 0 1 0 1.714 1.028l1.5-2.5a1 1 0 0 0-.342-1.372" clip-rule="evenodd"></svg:path><svg:path d="M1.293 2.707a1 1 0 0 1 1.414-1.414l16 16a1 1 0 0 1-1.414 1.414z"></svg:path></svg:g>`,
})
export class PepiconsPopFireOffIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopFlagIcon],svg[pepicons-pop-flag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="m6.804 2.632l-.637.264A3.51 3.51 0 0 0 4 6.137v4.386a1.46 1.46 0 0 0 2.167 1.276l.227-.126a4 4 0 0 1 3.88 0l.453.251a4 4 0 0 0 3.88 0l.734-.407A3.22 3.22 0 0 0 17 8.7V4.638a1.605 1.605 0 0 0-2.07-1.534l-.893.272a4 4 0 0 1-2.693-.131l-1.482-.613a4 4 0 0 0-3.058 0m4.893 7.543l-.454-.251A6 6 0 0 0 6 9.644V6.136c0-.61.368-1.16.931-1.393l.638-.263a2 2 0 0 1 1.529 0l1.481.612a6 6 0 0 0 4.04.196L15 5.173V8.7c0 .444-.241.853-.63 1.068l-.733.407a2 2 0 0 1-1.94 0" clip-rule="evenodd"></svg:path><svg:rect width="2" height="16" x="4" y="2" rx="1"></svg:rect></svg:g>`,
})
export class PepiconsPopFlagIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopFlagCircleIcon],svg[pepicons-pop-flag-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:g transform="translate(3 3)"><svg:path fill-rule="evenodd" d="m6.804 2.632l-.637.264A3.51 3.51 0 0 0 4 6.137v4.386a1.46 1.46 0 0 0 2.167 1.276l.227-.126a4 4 0 0 1 3.88 0l.453.251a4 4 0 0 0 3.88 0l.734-.407A3.22 3.22 0 0 0 17 8.7V4.638a1.605 1.605 0 0 0-2.07-1.534l-.893.272a4 4 0 0 1-2.693-.131l-1.482-.613a4 4 0 0 0-3.058 0m4.893 7.543l-.454-.251A6 6 0 0 0 6 9.644V6.136c0-.61.368-1.16.931-1.393l.638-.263a2 2 0 0 1 1.529 0l1.481.612a6 6 0 0 0 4.04.196L15 5.173V8.7c0 .444-.241.853-.63 1.068l-.733.407a2 2 0 0 1-1.94 0" clip-rule="evenodd"></svg:path><svg:rect width="2" height="16" x="4" y="2" rx="1"></svg:rect></svg:g><svg:path fill-rule="evenodd" d="M13 24c6.075 0 11-4.925 11-11S19.075 2 13 2S2 6.925 2 13s4.925 11 11 11m0 2c7.18 0 13-5.82 13-13S20.18 0 13 0S0 5.82 0 13s5.82 13 13 13" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPopFlagCircleIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopFlagCircleFilledIcon],svg[pepicons-pop-flag-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPopFlagCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:g fill="#000" transform="translate(3 3)"><svg:path fill-rule="evenodd" d="m6.804 2.632l-.637.264A3.51 3.51 0 0 0 4 6.137v4.386a1.46 1.46 0 0 0 2.167 1.276l.227-.126a4 4 0 0 1 3.88 0l.453.251a4 4 0 0 0 3.88 0l.734-.407A3.22 3.22 0 0 0 17 8.7V4.638a1.605 1.605 0 0 0-2.07-1.534l-.893.272a4 4 0 0 1-2.693-.131l-1.482-.613a4 4 0 0 0-3.058 0m4.893 7.543l-.454-.251A6 6 0 0 0 6 9.644V6.136c0-.61.368-1.16.931-1.393l.638-.263a2 2 0 0 1 1.529 0l1.481.612a6 6 0 0 0 4.04.196L15 5.173V8.7c0 .444-.241.853-.63 1.068l-.733.407a2 2 0 0 1-1.94 0" clip-rule="evenodd"></svg:path><svg:rect width="2" height="16" x="4" y="2" rx="1"></svg:rect></svg:g></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPopFlagCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPopFlagCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopFlagCircleOffIcon],svg[pepicons-pop-flag-circle-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:g transform="translate(3 3)"><svg:path fill-rule="evenodd" d="m6.804 2.632l-.637.264A3.51 3.51 0 0 0 4 6.137v4.386a1.46 1.46 0 0 0 2.167 1.276l.227-.126a4 4 0 0 1 3.88 0l.453.251a4 4 0 0 0 3.88 0l.734-.407A3.22 3.22 0 0 0 17 8.7V4.638a1.605 1.605 0 0 0-2.07-1.534l-.893.272a4 4 0 0 1-2.693-.131l-1.482-.613a4 4 0 0 0-3.058 0m4.893 7.543l-.454-.251A6 6 0 0 0 6 9.644V6.136c0-.61.368-1.16.931-1.393l.638-.263a2 2 0 0 1 1.529 0l1.481.612a6 6 0 0 0 4.04.196L15 5.173V8.7c0 .444-.241.853-.63 1.068l-.733.407a2 2 0 0 1-1.94 0" clip-rule="evenodd"></svg:path><svg:rect width="2" height="16" x="4" y="2" rx="1"></svg:rect><svg:path d="M1.293 2.707a1 1 0 0 1 1.414-1.414l16 16a1 1 0 0 1-1.414 1.414z"></svg:path></svg:g><svg:path fill-rule="evenodd" d="M13 24c6.075 0 11-4.925 11-11S19.075 2 13 2S2 6.925 2 13s4.925 11 11 11m0 2c7.18 0 13-5.82 13-13S20.18 0 13 0S0 5.82 0 13s5.82 13 13 13" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPopFlagCircleOffIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopFlagOffIcon],svg[pepicons-pop-flag-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="m6.804 2.632l-.637.264A3.51 3.51 0 0 0 4 6.137v4.386a1.46 1.46 0 0 0 2.167 1.276l.227-.126a4 4 0 0 1 3.88 0l.453.251a4 4 0 0 0 3.88 0l.734-.407A3.22 3.22 0 0 0 17 8.7V4.638a1.605 1.605 0 0 0-2.07-1.534l-.893.272a4 4 0 0 1-2.693-.131l-1.482-.613a4 4 0 0 0-3.058 0m4.893 7.543l-.454-.251A6 6 0 0 0 6 9.644V6.136c0-.61.368-1.16.931-1.393l.638-.263a2 2 0 0 1 1.529 0l1.481.612a6 6 0 0 0 4.04.196L15 5.173V8.7c0 .444-.241.853-.63 1.068l-.733.407a2 2 0 0 1-1.94 0" clip-rule="evenodd"></svg:path><svg:rect width="2" height="16" x="4" y="2" rx="1"></svg:rect><svg:path d="M1.293 2.707a1 1 0 0 1 1.414-1.414l16 16a1 1 0 0 1-1.414 1.414z"></svg:path></svg:g>`,
})
export class PepiconsPopFlagOffIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopFlagStraightIcon],svg[pepicons-pop-flag-straight-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M4.5 4v6h10.159l-1.197-1.71a2.25 2.25 0 0 1 0-2.58L14.659 4zm-1-2a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h13.08a1 1 0 0 0 .819-1.573L15.1 7.143a.25.25 0 0 1 0-.286l2.3-3.284A1 1 0 0 0 16.579 2z"></svg:path><svg:path d="M3.5 3a1 1 0 0 1 1 1v13a1 1 0 1 1-2 0V4a1 1 0 0 1 1-1"></svg:path></svg:g>`,
})
export class PepiconsPopFlagStraightIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopFlagStraightCircleIcon],svg[pepicons-pop-flag-straight-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M7.5 7v6h10.159l-1.197-1.71a2.25 2.25 0 0 1 0-2.58L17.659 7zm-1-2a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h13.08a1 1 0 0 0 .819-1.573L18.1 10.143a.25.25 0 0 1 0-.286l2.3-3.284A1 1 0 0 0 19.579 5z"></svg:path><svg:path d="M6.5 6a1 1 0 0 1 1 1v13a1 1 0 1 1-2 0V7a1 1 0 0 1 1-1"></svg:path><svg:path d="M13 24c6.075 0 11-4.925 11-11S19.075 2 13 2S2 6.925 2 13s4.925 11 11 11m0 2c7.18 0 13-5.82 13-13S20.18 0 13 0S0 5.82 0 13s5.82 13 13 13"></svg:path></svg:g>`,
})
export class PepiconsPopFlagStraightCircleIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopFlagStraightCircleFilledIcon],svg[pepicons-pop-flag-straight-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPopFlagStraightCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:g fill="#000" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M7.5 7v6h10.159l-1.197-1.71a2.25 2.25 0 0 1 0-2.58L17.659 7zm-1-2a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h13.08a1 1 0 0 0 .819-1.573L18.1 10.143a.25.25 0 0 1 0-.286l2.3-3.284A1 1 0 0 0 19.579 5z"></svg:path><svg:path d="M6.5 6a1 1 0 0 1 1 1v13a1 1 0 1 1-2 0V7a1 1 0 0 1 1-1"></svg:path></svg:g></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPopFlagStraightCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPopFlagStraightCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopFlagStraightCircleOffIcon],svg[pepicons-pop-flag-straight-circle-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M7.5 7v6h10.159l-1.197-1.71a2.25 2.25 0 0 1 0-2.58L17.659 7zm-1-2a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h13.08a1 1 0 0 0 .819-1.573L18.1 10.143a.25.25 0 0 1 0-.286l2.3-3.284A1 1 0 0 0 19.579 5z" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M6.5 6a1 1 0 0 1 1 1v13a1 1 0 1 1-2 0V7a1 1 0 0 1 1-1" clip-rule="evenodd"></svg:path><svg:path d="M4.293 5.707a1 1 0 0 1 1.414-1.414l16 16a1 1 0 0 1-1.414 1.414z"></svg:path><svg:path fill-rule="evenodd" d="M13 24c6.075 0 11-4.925 11-11S19.075 2 13 2S2 6.925 2 13s4.925 11 11 11m0 2c7.18 0 13-5.82 13-13S20.18 0 13 0S0 5.82 0 13s5.82 13 13 13" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPopFlagStraightCircleOffIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopFlagStraightOffIcon],svg[pepicons-pop-flag-straight-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M4.5 4v6h10.159l-1.197-1.71a2.25 2.25 0 0 1 0-2.58L14.659 4zm-1-2a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h13.08a1 1 0 0 0 .819-1.573L15.1 7.143a.25.25 0 0 1 0-.286l2.3-3.284A1 1 0 0 0 16.579 2z" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M3.5 3a1 1 0 0 1 1 1v13a1 1 0 1 1-2 0V4a1 1 0 0 1 1-1" clip-rule="evenodd"></svg:path><svg:path d="M1.293 2.707a1 1 0 0 1 1.414-1.414l16 16a1 1 0 0 1-1.414 1.414z"></svg:path></svg:g>`,
})
export class PepiconsPopFlagStraightOffIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopFloppyDiskIcon],svg[pepicons-pop-floppy-disk-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M1.5 3.5a2 2 0 0 1 2-2h10.586a2 2 0 0 1 1.414.586L17.914 4.5a2 2 0 0 1 .586 1.414V16.5a2 2 0 0 1-2 2h-13a2 2 0 0 1-2-2zm2 0v13h13V5.914L14.086 3.5z"></svg:path><svg:path d="M5 11a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v7h-2v-7H7v7H5zm.5-6a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V3a1 1 0 1 0-2 0v2h-4V3a1 1 0 0 0-2 0z"></svg:path></svg:g>`,
})
export class PepiconsPopFloppyDiskIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopFloppyDiskCircleIcon],svg[pepicons-pop-floppy-disk-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M4.5 6.5a2 2 0 0 1 2-2h10.586a2 2 0 0 1 1.414.586L20.914 7.5a2 2 0 0 1 .586 1.414V19.5a2 2 0 0 1-2 2h-13a2 2 0 0 1-2-2zm2 0v13h13V8.914L17.086 6.5z"></svg:path><svg:path d="M8 14a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v7h-2v-7h-6v7H8zm.5-6a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V6a1 1 0 1 0-2 0v2h-4V6a1 1 0 0 0-2 0z"></svg:path><svg:path d="M13 24c6.075 0 11-4.925 11-11S19.075 2 13 2S2 6.925 2 13s4.925 11 11 11m0 2c7.18 0 13-5.82 13-13S20.18 0 13 0S0 5.82 0 13s5.82 13 13 13"></svg:path></svg:g>`,
})
export class PepiconsPopFloppyDiskCircleIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopFloppyDiskCircleFilledIcon],svg[pepicons-pop-floppy-disk-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPopFloppyDiskCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:g fill="#000" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M4.5 6.5a2 2 0 0 1 2-2h10.586a2 2 0 0 1 1.414.586L20.914 7.5a2 2 0 0 1 .586 1.414V19.5a2 2 0 0 1-2 2h-13a2 2 0 0 1-2-2zm2 0v13h13V8.914L17.086 6.5z"></svg:path><svg:path d="M8 14a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v7h-2v-7h-6v7H8zm.5-6a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V6a1 1 0 1 0-2 0v2h-4V6a1 1 0 0 0-2 0z"></svg:path></svg:g></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPopFloppyDiskCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPopFloppyDiskCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopFloppyDiskCircleOffIcon],svg[pepicons-pop-floppy-disk-circle-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M4.5 6.5a2 2 0 0 1 2-2h10.586a2 2 0 0 1 1.414.586L20.914 7.5a2 2 0 0 1 .586 1.414V19.5a2 2 0 0 1-2 2h-13a2 2 0 0 1-2-2zm2 0v13h13V8.914L17.086 6.5z" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M8 14a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v7h-2v-7h-6v7H8zm.5-6a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V6a1 1 0 1 0-2 0v2h-4V6a1 1 0 0 0-2 0z" clip-rule="evenodd"></svg:path><svg:path d="M4.293 5.707a1 1 0 0 1 1.414-1.414l16 16a1 1 0 0 1-1.414 1.414z"></svg:path><svg:path fill-rule="evenodd" d="M13 24c6.075 0 11-4.925 11-11S19.075 2 13 2S2 6.925 2 13s4.925 11 11 11m0 2c7.18 0 13-5.82 13-13S20.18 0 13 0S0 5.82 0 13s5.82 13 13 13" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPopFloppyDiskCircleOffIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopFloppyDiskOffIcon],svg[pepicons-pop-floppy-disk-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M1.5 3.5a2 2 0 0 1 2-2h10.586a2 2 0 0 1 1.414.586L17.914 4.5a2 2 0 0 1 .586 1.414V16.5a2 2 0 0 1-2 2h-13a2 2 0 0 1-2-2zm2 0v13h13V5.914L14.086 3.5z" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M5 11a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v7h-2v-7H7v7H5zm.5-6a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V3a1 1 0 1 0-2 0v2h-4V3a1 1 0 0 0-2 0z" clip-rule="evenodd"></svg:path><svg:path d="M1.293 2.707a1 1 0 0 1 1.414-1.414l16 16a1 1 0 0 1-1.414 1.414z"></svg:path></svg:g>`,
})
export class PepiconsPopFloppyDiskOffIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopFlowerIcon],svg[pepicons-pop-flower-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="m12.588 2.366l-.071.078a18 18 0 0 1-.28.3l-.148-.195c-.308-.4-.568-.694-.847-.929c-.382-.323-.78-.518-1.242-.518c-.25 0-.487.061-.71.17c-.488.236-.85.631-1.333 1.306l-.12.17q-.137-.134-.32-.327l-.067-.07c-.554-.582-.701-.73-.949-.932c-.234-.191-.445-.32-.705-.384a1.13 1.13 0 0 0-1.357.726A7.4 7.4 0 0 0 4 4.288C4 8.228 6.212 11 10 11s6-2.771 6-6.712a7.4 7.4 0 0 0-.44-2.527a1.13 1.13 0 0 0-1.36-.724c-.262.067-.47.199-.7.395c-.24.202-.375.346-.912.934M10 9C7.428 9 6 7.21 6 4.288q0-.27.025-.533l.047.048c.408.428.66.672.92.872c.648.496 1.304.689 1.904.003c.108-.123.214-.262.356-.463l.075-.108l.257-.365c.175-.246.322-.427.429-.54a5 5 0 0 1 .493.569c-.045-.058.55.737.7.907c.602.689 1.266.49 1.899-.01c.25-.2.492-.443.874-.86q.021.239.021.48C14 7.211 12.572 9 10 9" clip-rule="evenodd"></svg:path><svg:path d="M9 11a1 1 0 1 1 2 0v6.5a1 1 0 1 1-2 0z"></svg:path><svg:path fill-rule="evenodd" d="M11.767 13.015c-2.185 1.834-3.622 4.165-2.438 5.576c1.166 1.39 4.38.628 6.295-.98c1.868-1.567 2.72-3.835 1.556-5.222s-3.545-.942-5.413.626m-.847 4.328a.2.2 0 0 1-.036-.018l.018.03q.011.01.018-.012m3.418-1.264c-1.107.93-3.014 1.422-3.418 1.264l.007-.03c.038-.189.156-.457.348-.769c.404-.656 1.077-1.409 1.778-1.997c1.134-.952 2.339-1.177 2.595-.872s-.175 1.452-1.31 2.404" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M7.932 13.015c2.186 1.834 3.622 4.165 2.438 5.576c-1.166 1.39-4.379.628-6.294-.98c-1.869-1.567-2.72-3.835-1.556-5.222s3.544-.942 5.412.626m.848 4.328l.035-.018l-.018.03q-.011.01-.017-.012M5.36 16.08c1.108.93 3.015 1.422 3.419 1.264l-.007-.03c-.038-.189-.156-.457-.348-.769c-.405-.656-1.077-1.409-1.778-1.997c-1.135-.952-2.34-1.177-2.595-.872s.175 1.452 1.31 2.404" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPopFlowerIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopFlowerBudIcon],svg[pepicons-pop-flower-bud-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M16.49 13.714a4.003 4.003 0 0 0 0-7.427q.01-.143.01-.287A4 4 0 0 0 10 2.877a4 4 0 0 0-6.49 3.41a4.003 4.003 0 0 0 0 7.427q-.01.142-.01.286a4 4 0 0 0 6.5 3.123a4 4 0 0 0 6.49-3.41m-2.108-7.036a1 1 0 0 0 .835 1.334a2 2 0 0 1 0 3.976a1 1 0 0 0-.835 1.334q.117.324.118.678a2 2 0 0 1-3.667 1.105a1 1 0 0 0-1.666 0a2 2 0 0 1-3.55-1.783a1 1 0 0 0-.834-1.333a2 2 0 0 1 0-3.977a1 1 0 0 0 .835-1.334a2 2 0 0 1 3.55-1.783a1 1 0 0 0 1.665 0a2 2 0 0 1 3.55 1.783" clip-rule="evenodd"></svg:path><svg:path d="M13.5 10a3.5 3.5 0 1 1-7 0a3.5 3.5 0 0 1 7 0"></svg:path></svg:g>`,
})
export class PepiconsPopFlowerBudIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopFlowerBudCircleIcon],svg[pepicons-pop-flower-bud-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M19.49 16.714a4.003 4.003 0 0 0 0-7.427q.01-.143.01-.287A4 4 0 0 0 13 5.877a4 4 0 0 0-6.49 3.41a4.003 4.003 0 0 0 0 7.427q-.01.142-.01.286a4 4 0 0 0 6.5 3.123a4 4 0 0 0 6.49-3.41m-2.108-7.036a1 1 0 0 0 .835 1.334a2 2 0 0 1 0 3.976a1 1 0 0 0-.835 1.334q.117.324.118.678a2 2 0 0 1-3.667 1.105a1 1 0 0 0-1.666 0a2 2 0 0 1-3.55-1.783a1 1 0 0 0-.834-1.333a2 2 0 0 1 0-3.977a1 1 0 0 0 .835-1.334a2 2 0 0 1 3.55-1.783a1 1 0 0 0 1.665 0a2 2 0 0 1 3.55 1.783" clip-rule="evenodd"></svg:path><svg:path d="M16.5 13a3.5 3.5 0 1 1-7 0a3.5 3.5 0 0 1 7 0"></svg:path><svg:path fill-rule="evenodd" d="M13 24c6.075 0 11-4.925 11-11S19.075 2 13 2S2 6.925 2 13s4.925 11 11 11m0 2c7.18 0 13-5.82 13-13S20.18 0 13 0S0 5.82 0 13s5.82 13 13 13" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPopFlowerBudCircleIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopFlowerBudCircleFilledIcon],svg[pepicons-pop-flower-bud-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPopFlowerBudCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:g fill="#000"><svg:path fill-rule="evenodd" d="M19.49 16.714a4.003 4.003 0 0 0 0-7.427q.01-.143.01-.287A4 4 0 0 0 13 5.877a4 4 0 0 0-6.49 3.41a4.003 4.003 0 0 0 0 7.427q-.01.142-.01.286a4 4 0 0 0 6.5 3.123a4 4 0 0 0 6.49-3.41m-2.108-7.036a1 1 0 0 0 .835 1.334a2 2 0 0 1 0 3.976a1 1 0 0 0-.835 1.334q.117.324.118.678a2 2 0 0 1-3.667 1.105a1 1 0 0 0-1.666 0a2 2 0 0 1-3.55-1.783a1 1 0 0 0-.834-1.333a2 2 0 0 1 0-3.977a1 1 0 0 0 .835-1.334a2 2 0 0 1 3.55-1.783a1 1 0 0 0 1.665 0a2 2 0 0 1 3.55 1.783" clip-rule="evenodd"></svg:path><svg:path d="M16.5 13a3.5 3.5 0 1 1-7 0a3.5 3.5 0 0 1 7 0"></svg:path></svg:g></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPopFlowerBudCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPopFlowerBudCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopFlowerBudCircleOffIcon],svg[pepicons-pop-flower-bud-circle-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M19.49 16.714a4.003 4.003 0 0 0 0-7.427q.01-.143.01-.287A4 4 0 0 0 13 5.877a4 4 0 0 0-6.49 3.41a4.003 4.003 0 0 0 0 7.427q-.01.142-.01.286a4 4 0 0 0 6.5 3.123a4 4 0 0 0 6.49-3.41m-2.108-7.036a1 1 0 0 0 .835 1.334a2 2 0 0 1 0 3.976a1 1 0 0 0-.835 1.334q.117.324.118.678a2 2 0 0 1-3.667 1.105a1 1 0 0 0-1.666 0a2 2 0 0 1-3.55-1.783a1 1 0 0 0-.834-1.333a2 2 0 0 1 0-3.977a1 1 0 0 0 .835-1.334a2 2 0 0 1 3.55-1.783a1 1 0 0 0 1.665 0a2 2 0 0 1 3.55 1.783" clip-rule="evenodd"></svg:path><svg:path d="M16.5 13a3.5 3.5 0 1 1-7 0a3.5 3.5 0 0 1 7 0"></svg:path><svg:path d="M4.293 5.707a1 1 0 0 1 1.414-1.414l16 16a1 1 0 0 1-1.414 1.414z"></svg:path><svg:path fill-rule="evenodd" d="M13 24c6.075 0 11-4.925 11-11S19.075 2 13 2S2 6.925 2 13s4.925 11 11 11m0 2c7.18 0 13-5.82 13-13S20.18 0 13 0S0 5.82 0 13s5.82 13 13 13" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPopFlowerBudCircleOffIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopFlowerBudOffIcon],svg[pepicons-pop-flower-bud-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M16.49 13.714a4.003 4.003 0 0 0 0-7.427q.01-.143.01-.287A4 4 0 0 0 10 2.877a4 4 0 0 0-6.49 3.41a4.003 4.003 0 0 0 0 7.427q-.01.142-.01.286a4 4 0 0 0 6.5 3.123a4 4 0 0 0 6.49-3.41m-2.108-7.036a1 1 0 0 0 .835 1.334a2 2 0 0 1 0 3.976a1 1 0 0 0-.835 1.334q.117.324.118.678a2 2 0 0 1-3.667 1.105a1 1 0 0 0-1.666 0a2 2 0 0 1-3.55-1.783a1 1 0 0 0-.834-1.333a2 2 0 0 1 0-3.977a1 1 0 0 0 .835-1.334a2 2 0 0 1 3.55-1.783a1 1 0 0 0 1.665 0a2 2 0 0 1 3.55 1.783" clip-rule="evenodd"></svg:path><svg:path d="M13.5 10a3.5 3.5 0 1 1-7 0a3.5 3.5 0 0 1 7 0"></svg:path><svg:path d="M1.293 2.707a1 1 0 0 1 1.414-1.414l16 16a1 1 0 0 1-1.414 1.414z"></svg:path></svg:g>`,
})
export class PepiconsPopFlowerBudOffIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopFlowerCircleIcon],svg[pepicons-pop-flower-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="m15.588 5.366l-.071.078a18 18 0 0 1-.28.3l-.148-.195c-.308-.4-.568-.694-.847-.93c-.382-.322-.78-.517-1.242-.517c-.25 0-.487.061-.71.17c-.488.236-.85.631-1.333 1.306l-.12.17q-.137-.134-.32-.327l-.067-.07c-.554-.582-.701-.73-.949-.932c-.234-.191-.445-.32-.705-.384a1.13 1.13 0 0 0-1.357.726A7.4 7.4 0 0 0 7 7.288C7 11.228 9.212 14 13 14s6-2.771 6-6.712a7.4 7.4 0 0 0-.44-2.527a1.13 1.13 0 0 0-1.36-.724c-.262.067-.47.199-.7.395c-.24.202-.375.346-.912.934M13 12c-2.572 0-4-1.79-4-4.712q0-.27.025-.533l.047.048c.408.428.66.672.92.872c.648.496 1.304.689 1.904.003c.108-.123.214-.262.356-.463l.075-.108l.257-.365c.175-.246.322-.427.429-.54a5 5 0 0 1 .493.569c-.045-.058.55.737.7.907c.602.689 1.266.49 1.899-.01c.25-.2.492-.443.875-.86q.02.239.02.48C17 10.211 15.572 12 13 12" clip-rule="evenodd"></svg:path><svg:path d="M12 14a1 1 0 1 1 2 0v6.5a1 1 0 1 1-2 0z"></svg:path><svg:path fill-rule="evenodd" d="M14.767 16.015c-2.185 1.834-3.622 4.165-2.438 5.576c1.166 1.39 4.38.628 6.295-.98c1.868-1.567 2.72-3.835 1.556-5.222s-3.545-.942-5.413.626m-.847 4.328a.2.2 0 0 1-.036-.018l.018.03q.011.01.018-.012m3.418-1.264c-1.108.93-3.014 1.422-3.418 1.264l.007-.03c.038-.189.156-.457.348-.769c.404-.656 1.077-1.409 1.778-1.997c1.134-.952 2.339-1.177 2.595-.872s-.175 1.452-1.31 2.404" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M10.932 16.015c2.186 1.834 3.622 4.165 2.438 5.576c-1.166 1.39-4.379.628-6.294-.98c-1.869-1.567-2.72-3.835-1.556-5.222s3.544-.942 5.412.626m.848 4.328l.035-.018l-.018.03q-.011.01-.017-.012M8.36 19.08c1.108.93 3.015 1.422 3.419 1.264l-.007-.03c-.038-.189-.156-.457-.348-.769c-.405-.656-1.077-1.409-1.778-1.997c-1.135-.952-2.34-1.177-2.595-.872s.175 1.452 1.31 2.404" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M13 24c6.075 0 11-4.925 11-11S19.075 2 13 2S2 6.925 2 13s4.925 11 11 11m0 2c7.18 0 13-5.82 13-13S20.18 0 13 0S0 5.82 0 13s5.82 13 13 13" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPopFlowerCircleIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopFlowerCircleFilledIcon],svg[pepicons-pop-flower-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPopFlowerCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:g fill="#000"><svg:path fill-rule="evenodd" d="m15.588 5.366l-.071.078a18 18 0 0 1-.28.3l-.148-.195c-.308-.4-.568-.694-.847-.93c-.382-.322-.78-.517-1.242-.517c-.25 0-.487.061-.71.17c-.488.236-.85.631-1.333 1.306l-.12.17q-.137-.134-.32-.327l-.067-.07c-.554-.582-.701-.73-.949-.932c-.234-.191-.445-.32-.705-.384a1.13 1.13 0 0 0-1.357.726A7.4 7.4 0 0 0 7 7.288C7 11.228 9.212 14 13 14s6-2.771 6-6.712a7.4 7.4 0 0 0-.44-2.527a1.13 1.13 0 0 0-1.36-.724c-.262.067-.47.199-.7.395c-.24.202-.375.346-.912.934M13 12c-2.572 0-4-1.79-4-4.712q0-.27.025-.533l.047.048c.408.428.66.672.92.872c.648.496 1.304.689 1.904.003c.108-.123.214-.262.356-.463l.075-.108l.257-.365c.175-.246.322-.427.429-.54a5 5 0 0 1 .493.569c-.045-.058.55.737.7.907c.602.689 1.266.49 1.899-.01c.25-.2.492-.443.875-.86q.02.239.02.48C17 10.211 15.572 12 13 12" clip-rule="evenodd"></svg:path><svg:path d="M12 14a1 1 0 1 1 2 0v6.5a1 1 0 1 1-2 0z"></svg:path><svg:path fill-rule="evenodd" d="M14.767 16.015c-2.185 1.834-3.622 4.165-2.438 5.576c1.166 1.39 4.38.628 6.295-.98c1.868-1.567 2.72-3.835 1.556-5.222s-3.545-.942-5.413.626m-.847 4.328a.2.2 0 0 1-.036-.018l.018.03q.011.01.018-.012m3.418-1.264c-1.108.93-3.014 1.422-3.418 1.264l.007-.03c.038-.189.156-.457.348-.769c.404-.656 1.077-1.409 1.778-1.997c1.134-.952 2.339-1.177 2.595-.872s-.175 1.452-1.31 2.404" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M10.932 16.015c2.186 1.834 3.622 4.165 2.438 5.576c-1.166 1.39-4.379.628-6.294-.98c-1.869-1.567-2.72-3.835-1.556-5.222s3.544-.942 5.412.626m.848 4.328l.035-.018l-.018.03q-.011.01-.017-.012M8.36 19.08c1.108.93 3.015 1.422 3.419 1.264l-.007-.03c-.038-.189-.156-.457-.348-.769c-.405-.656-1.077-1.409-1.778-1.997c-1.135-.952-2.34-1.177-2.595-.872s.175 1.452 1.31 2.404" clip-rule="evenodd"></svg:path></svg:g></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPopFlowerCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPopFlowerCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopFlowerCircleOffIcon],svg[pepicons-pop-flower-circle-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="m15.588 5.366l-.071.078a18 18 0 0 1-.28.3l-.148-.195c-.308-.4-.568-.694-.847-.93c-.382-.322-.78-.517-1.242-.517c-.25 0-.487.061-.71.17c-.488.236-.85.631-1.333 1.306l-.12.17q-.137-.134-.32-.327l-.067-.07c-.554-.582-.701-.73-.949-.932c-.234-.191-.445-.32-.705-.384a1.13 1.13 0 0 0-1.357.726A7.4 7.4 0 0 0 7 7.288C7 11.228 9.212 14 13 14s6-2.771 6-6.712a7.4 7.4 0 0 0-.44-2.527a1.13 1.13 0 0 0-1.36-.724c-.262.067-.47.199-.7.395c-.24.202-.375.346-.912.934M13 12c-2.572 0-4-1.79-4-4.712q0-.27.025-.533l.047.048c.408.428.66.672.92.872c.648.496 1.304.689 1.904.003c.108-.123.214-.262.356-.463l.075-.108l.257-.365c.175-.246.322-.427.429-.54a5 5 0 0 1 .493.569c-.045-.058.55.737.7.907c.602.689 1.266.49 1.899-.01c.25-.2.492-.443.875-.86q.02.239.02.48C17 10.211 15.572 12 13 12" clip-rule="evenodd"></svg:path><svg:path d="M12 14a1 1 0 1 1 2 0v6.5a1 1 0 1 1-2 0z"></svg:path><svg:path fill-rule="evenodd" d="M14.767 16.015c-2.185 1.834-3.622 4.165-2.438 5.576c1.166 1.39 4.38.628 6.295-.98c1.868-1.567 2.72-3.835 1.556-5.222s-3.545-.942-5.413.626m-.847 4.328a.2.2 0 0 1-.036-.018l.018.03q.011.01.018-.012m3.418-1.264c-1.108.93-3.014 1.422-3.418 1.264l.007-.03c.038-.189.156-.457.348-.769c.404-.656 1.077-1.409 1.778-1.997c1.134-.952 2.339-1.177 2.595-.872s-.175 1.452-1.31 2.404" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M10.932 16.015c2.186 1.834 3.622 4.165 2.438 5.576c-1.166 1.39-4.379.628-6.294-.98c-1.869-1.567-2.72-3.835-1.556-5.222s3.544-.942 5.412.626m.848 4.328l.035-.018l-.018.03q-.011.01-.017-.012M8.36 19.08c1.108.93 3.015 1.422 3.419 1.264l-.007-.03c-.038-.189-.156-.457-.348-.769c-.405-.656-1.077-1.409-1.778-1.997c-1.135-.952-2.34-1.177-2.595-.872s.175 1.452 1.31 2.404" clip-rule="evenodd"></svg:path><svg:path d="M4.293 5.707a1 1 0 0 1 1.414-1.414l16 16a1 1 0 0 1-1.414 1.414z"></svg:path><svg:path fill-rule="evenodd" d="M13 24c6.075 0 11-4.925 11-11S19.075 2 13 2S2 6.925 2 13s4.925 11 11 11m0 2c7.18 0 13-5.82 13-13S20.18 0 13 0S0 5.82 0 13s5.82 13 13 13" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPopFlowerCircleOffIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopFlowerOffIcon],svg[pepicons-pop-flower-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="m12.588 2.366l-.071.078a18 18 0 0 1-.28.3l-.148-.195c-.308-.4-.568-.694-.847-.929c-.382-.323-.78-.518-1.242-.518c-.25 0-.487.061-.71.17c-.488.236-.85.631-1.333 1.306l-.12.17q-.137-.134-.32-.327l-.067-.07c-.554-.582-.701-.73-.949-.932c-.234-.191-.445-.32-.705-.384a1.13 1.13 0 0 0-1.357.726A7.4 7.4 0 0 0 4 4.288C4 8.228 6.212 11 10 11s6-2.771 6-6.712a7.4 7.4 0 0 0-.44-2.527a1.13 1.13 0 0 0-1.36-.724c-.262.067-.47.199-.7.395c-.24.202-.375.346-.912.934M10 9C7.428 9 6 7.21 6 4.288q0-.27.025-.533l.047.048c.408.428.66.672.92.872c.648.496 1.304.689 1.904.003c.108-.123.214-.262.356-.463l.075-.108l.257-.365c.175-.246.322-.427.429-.54a5 5 0 0 1 .493.569c-.045-.058.55.737.7.907c.602.689 1.266.49 1.899-.01c.25-.2.492-.443.874-.86q.021.239.021.48C14 7.211 12.572 9 10 9" clip-rule="evenodd"></svg:path><svg:path d="M9 11a1 1 0 1 1 2 0v6.5a1 1 0 1 1-2 0z"></svg:path><svg:path fill-rule="evenodd" d="M11.767 13.015c-2.185 1.834-3.622 4.165-2.438 5.576c1.166 1.39 4.38.628 6.295-.98c1.868-1.567 2.72-3.835 1.556-5.222s-3.545-.942-5.413.626m-.847 4.328a.2.2 0 0 1-.036-.018l.018.03q.011.01.018-.012m3.418-1.264c-1.107.93-3.014 1.422-3.418 1.264l.007-.03c.038-.189.156-.457.348-.769c.404-.656 1.077-1.409 1.778-1.997c1.134-.952 2.339-1.177 2.595-.872s-.175 1.452-1.31 2.404" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M7.932 13.015c2.186 1.834 3.622 4.165 2.438 5.576c-1.166 1.39-4.379.628-6.294-.98c-1.869-1.567-2.72-3.835-1.556-5.222s3.544-.942 5.412.626m.848 4.328l.035-.018l-.018.03q-.011.01-.017-.012M5.36 16.08c1.108.93 3.015 1.422 3.419 1.264l-.007-.03c-.038-.189-.156-.457-.348-.769c-.405-.656-1.077-1.409-1.778-1.997c-1.135-.952-2.34-1.177-2.595-.872s.175 1.452 1.31 2.404" clip-rule="evenodd"></svg:path><svg:path d="M1.293 2.707a1 1 0 0 1 1.414-1.414l16 16a1 1 0 0 1-1.414 1.414z"></svg:path></svg:g>`,
})
export class PepiconsPopFlowerOffIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopFolderIcon],svg[pepicons-pop-folder-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M15.5 5h-4.991l-.565-.988A3 3 0 0 0 7.34 2.5H4.5a3 3 0 0 0-3 3V15a3 3 0 0 0 3 3h11a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3m-11 11a1 1 0 0 1-1-1V5.5a1 1 0 0 1 1-1h2.84a1 1 0 0 1 .868.504l.852 1.492A1 1 0 0 0 9.93 7h5.57a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1z" clip-rule="evenodd"></svg:path>`,
})
export class PepiconsPopFolderIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopFolderCircleIcon],svg[pepicons-pop-folder-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M18.5 8h-4.991l-.565-.988A3 3 0 0 0 10.34 5.5H7.5a3 3 0 0 0-3 3V18a3 3 0 0 0 3 3h11a3 3 0 0 0 3-3v-7a3 3 0 0 0-3-3m-11 11a1 1 0 0 1-1-1V8.5a1 1 0 0 1 1-1h2.84a1 1 0 0 1 .868.504l.852 1.492a1 1 0 0 0 .869.504H18.5a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1z"></svg:path><svg:path d="M13 24c6.075 0 11-4.925 11-11S19.075 2 13 2S2 6.925 2 13s4.925 11 11 11m0 2c7.18 0 13-5.82 13-13S20.18 0 13 0S0 5.82 0 13s5.82 13 13 13"></svg:path></svg:g>`,
})
export class PepiconsPopFolderCircleIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopFolderCircleFilledIcon],svg[pepicons-pop-folder-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPopFolderCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:path fill="#000" fill-rule="evenodd" d="M18.5 8h-4.991l-.565-.988A3 3 0 0 0 10.34 5.5H7.5a3 3 0 0 0-3 3V18a3 3 0 0 0 3 3h11a3 3 0 0 0 3-3v-7a3 3 0 0 0-3-3m-11 11a1 1 0 0 1-1-1V8.5a1 1 0 0 1 1-1h2.84a1 1 0 0 1 .868.504l.852 1.492a1 1 0 0 0 .869.504H18.5a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1z" clip-rule="evenodd"></svg:path></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPopFolderCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPopFolderCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopFolderCircleOffIcon],svg[pepicons-pop-folder-circle-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M18.5 8h-4.991l-.565-.988A3 3 0 0 0 10.34 5.5H7.5a3 3 0 0 0-3 3V18a3 3 0 0 0 3 3h11a3 3 0 0 0 3-3v-7a3 3 0 0 0-3-3m-11 11a1 1 0 0 1-1-1V8.5a1 1 0 0 1 1-1h2.84a1 1 0 0 1 .868.504l.852 1.492a1 1 0 0 0 .869.504H18.5a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1z" clip-rule="evenodd"></svg:path><svg:path d="M4.293 5.707a1 1 0 0 1 1.414-1.414l16 16a1 1 0 0 1-1.414 1.414z"></svg:path><svg:path fill-rule="evenodd" d="M13 24c6.075 0 11-4.925 11-11S19.075 2 13 2S2 6.925 2 13s4.925 11 11 11m0 2c7.18 0 13-5.82 13-13S20.18 0 13 0S0 5.82 0 13s5.82 13 13 13" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPopFolderCircleOffIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopFolderOffIcon],svg[pepicons-pop-folder-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M15.5 5h-4.991l-.565-.988A3 3 0 0 0 7.34 2.5H4.5a3 3 0 0 0-3 3V15a3 3 0 0 0 3 3h11a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3m-11 11a1 1 0 0 1-1-1V5.5a1 1 0 0 1 1-1h2.84a1 1 0 0 1 .868.504l.852 1.492A1 1 0 0 0 9.93 7h5.57a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1z" clip-rule="evenodd"></svg:path><svg:path d="M1.293 2.707a1 1 0 0 1 1.414-1.414l16 16a1 1 0 0 1-1.414 1.414z"></svg:path></svg:g>`,
})
export class PepiconsPopFolderOffIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopFoldingStoolIcon],svg[pepicons-pop-folding-stool-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M3.5 11A1.5 1.5 0 0 1 5 9.5h10a1.5 1.5 0 0 1 0 3H5A1.5 1.5 0 0 1 3.5 11M6 1a1 1 0 0 1 1 1v5a1 1 0 0 1-2 0V2a1 1 0 0 1 1-1"></svg:path><svg:path d="M6 6a1 1 0 0 1 1 1v2.5a1 1 0 1 1-2 0V7a1 1 0 0 1 1-1m8 0a1 1 0 0 1 1 1v2.5a1 1 0 1 1-2 0V7a1 1 0 0 1 1-1"></svg:path><svg:path d="M14 1a1 1 0 0 1 1 1v5a1 1 0 1 1-2 0V2a1 1 0 0 1 1-1m1.825 17.565a1 1 0 0 1-1.39.26l-9.5-6.5a1 1 0 0 1 1.13-1.65l9.5 6.5a1 1 0 0 1 .26 1.39"></svg:path><svg:path d="M4.175 18.565a1 1 0 0 0 1.39.26l9.5-6.5a1 1 0 1 0-1.13-1.65l-9.5 6.5a1 1 0 0 0-.26 1.39M14 4H6V2h8zm0 3H6V5h8zM2 8a1 1 0 0 1 1-1h2a1 1 0 0 1 0 2H3a1 1 0 0 1-1-1m12 0a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2h-2a1 1 0 0 1-1-1"></svg:path></svg:g>`,
})
export class PepiconsPopFoldingStoolIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopFoldingStoolCircleIcon],svg[pepicons-pop-folding-stool-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M6.5 14A1.5 1.5 0 0 1 8 12.5h10a1.5 1.5 0 0 1 0 3H8A1.5 1.5 0 0 1 6.5 14M9 4a1 1 0 0 1 1 1v5a1 1 0 0 1-2 0V5a1 1 0 0 1 1-1"></svg:path><svg:path d="M9 9a1 1 0 0 1 1 1v2.5a1 1 0 1 1-2 0V10a1 1 0 0 1 1-1m8 0a1 1 0 0 1 1 1v2.5a1 1 0 1 1-2 0V10a1 1 0 0 1 1-1"></svg:path><svg:path d="M17 4a1 1 0 0 1 1 1v5a1 1 0 1 1-2 0V5a1 1 0 0 1 1-1m1.825 17.565a1 1 0 0 1-1.39.26l-9.5-6.5a1 1 0 0 1 1.13-1.65l9.5 6.5a1 1 0 0 1 .26 1.39"></svg:path><svg:path d="M7.175 21.565a1 1 0 0 0 1.39.26l9.5-6.5a1 1 0 1 0-1.13-1.65l-9.5 6.5a1 1 0 0 0-.26 1.39M17 7H9V5h8zm0 3H9V8h8zM5 11a1 1 0 0 1 1-1h2a1 1 0 0 1 0 2H6a1 1 0 0 1-1-1m12 0a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2h-2a1 1 0 0 1-1-1"></svg:path><svg:path d="M13 24c6.075 0 11-4.925 11-11S19.075 2 13 2S2 6.925 2 13s4.925 11 11 11m0 2c7.18 0 13-5.82 13-13S20.18 0 13 0S0 5.82 0 13s5.82 13 13 13"></svg:path></svg:g>`,
})
export class PepiconsPopFoldingStoolCircleIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopFoldingStoolCircleFilledIcon],svg[pepicons-pop-folding-stool-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPopFoldingStoolCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:g fill="#000" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M6.5 14A1.5 1.5 0 0 1 8 12.5h10a1.5 1.5 0 0 1 0 3H8A1.5 1.5 0 0 1 6.5 14M9 4a1 1 0 0 1 1 1v5a1 1 0 0 1-2 0V5a1 1 0 0 1 1-1"></svg:path><svg:path d="M9 9a1 1 0 0 1 1 1v2.5a1 1 0 1 1-2 0V10a1 1 0 0 1 1-1m8 0a1 1 0 0 1 1 1v2.5a1 1 0 1 1-2 0V10a1 1 0 0 1 1-1"></svg:path><svg:path d="M17 4a1 1 0 0 1 1 1v5a1 1 0 1 1-2 0V5a1 1 0 0 1 1-1m1.825 17.565a1 1 0 0 1-1.39.26l-9.5-6.5a1 1 0 0 1 1.13-1.65l9.5 6.5a1 1 0 0 1 .26 1.39"></svg:path><svg:path d="M7.175 21.565a1 1 0 0 0 1.39.26l9.5-6.5a1 1 0 1 0-1.13-1.65l-9.5 6.5a1 1 0 0 0-.26 1.39M17 7H9V5h8zm0 3H9V8h8zM5 11a1 1 0 0 1 1-1h2a1 1 0 0 1 0 2H6a1 1 0 0 1-1-1m12 0a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2h-2a1 1 0 0 1-1-1"></svg:path></svg:g></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPopFoldingStoolCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPopFoldingStoolCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopFoldingStoolCircleOffIcon],svg[pepicons-pop-folding-stool-circle-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M6.5 14A1.5 1.5 0 0 1 8 12.5h10a1.5 1.5 0 0 1 0 3H8A1.5 1.5 0 0 1 6.5 14M9 4a1 1 0 0 1 1 1v5a1 1 0 0 1-2 0V5a1 1 0 0 1 1-1" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M9 9a1 1 0 0 1 1 1v2.5a1 1 0 1 1-2 0V10a1 1 0 0 1 1-1m8 0a1 1 0 0 1 1 1v2.5a1 1 0 1 1-2 0V10a1 1 0 0 1 1-1" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M17 4a1 1 0 0 1 1 1v5a1 1 0 1 1-2 0V5a1 1 0 0 1 1-1m1.825 17.565a1 1 0 0 1-1.39.26l-9.5-6.5a1 1 0 0 1 1.13-1.65l9.5 6.5a1 1 0 0 1 .26 1.39" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M7.175 21.565a1 1 0 0 0 1.39.26l9.5-6.5a1 1 0 1 0-1.13-1.65l-9.5 6.5a1 1 0 0 0-.26 1.39M17 7H9V5h8zm0 3H9V8h8zM5 11a1 1 0 0 1 1-1h2a1 1 0 0 1 0 2H6a1 1 0 0 1-1-1m12 0a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2h-2a1 1 0 0 1-1-1" clip-rule="evenodd"></svg:path><svg:path d="M4.293 5.707a1 1 0 0 1 1.414-1.414l16 16a1 1 0 0 1-1.414 1.414z"></svg:path><svg:path fill-rule="evenodd" d="M13 24c6.075 0 11-4.925 11-11S19.075 2 13 2S2 6.925 2 13s4.925 11 11 11m0 2c7.18 0 13-5.82 13-13S20.18 0 13 0S0 5.82 0 13s5.82 13 13 13" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPopFoldingStoolCircleOffIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopFoldingStoolOffIcon],svg[pepicons-pop-folding-stool-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M3.5 11A1.5 1.5 0 0 1 5 9.5h10a1.5 1.5 0 0 1 0 3H5A1.5 1.5 0 0 1 3.5 11M6 1a1 1 0 0 1 1 1v5a1 1 0 0 1-2 0V2a1 1 0 0 1 1-1" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M6 6a1 1 0 0 1 1 1v2.5a1 1 0 1 1-2 0V7a1 1 0 0 1 1-1m8 0a1 1 0 0 1 1 1v2.5a1 1 0 1 1-2 0V7a1 1 0 0 1 1-1" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M14 1a1 1 0 0 1 1 1v5a1 1 0 1 1-2 0V2a1 1 0 0 1 1-1m1.825 17.565a1 1 0 0 1-1.39.26l-9.5-6.5a1 1 0 0 1 1.13-1.65l9.5 6.5a1 1 0 0 1 .26 1.39" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M4.175 18.565a1 1 0 0 0 1.39.26l9.5-6.5a1 1 0 1 0-1.13-1.65l-9.5 6.5a1 1 0 0 0-.26 1.39M14 4H6V2h8zm0 3H6V5h8zM2 8a1 1 0 0 1 1-1h2a1 1 0 0 1 0 2H3a1 1 0 0 1-1-1m12 0a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2h-2a1 1 0 0 1-1-1" clip-rule="evenodd"></svg:path><svg:path d="M1.293 2.707a1 1 0 0 1 1.414-1.414l16 16a1 1 0 0 1-1.414 1.414z"></svg:path></svg:g>`,
})
export class PepiconsPopFoldingStoolOffIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopGearIcon],svg[pepicons-pop-gear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M10 12a2 2 0 1 0 0-4a2 2 0 0 0 0 4m0 2a4 4 0 1 0 0-8a4 4 0 0 0 0 8m3.504-11.29a2 2 0 0 1 2.309.375l1.102 1.102a2 2 0 0 1 .375 2.309l-.385.77a1 1 0 1 1-1.789-.895l.385-.77L14.399 4.5l-.77.385a1 1 0 1 1-.894-1.789z"></svg:path><svg:path d="M15.644 5.888a1 1 0 0 1 1.297.564l.46 1.166a1 1 0 0 1-1.861.733l-.46-1.166a1 1 0 0 1 .564-1.297"></svg:path><svg:path d="M17.633 7.323A2 2 0 0 1 19 9.221v1.558a2 2 0 0 1-1.367 1.898l-.817.272a1 1 0 1 1-.632-1.898L17 10.78V9.221l-.816-.272a1 1 0 0 1 .632-1.898z"></svg:path><svg:path d="M16.899 11.083a1 1 0 0 1 .518 1.316l-.5 1.15a1 1 0 1 1-1.834-.798l.5-1.15a1 1 0 0 1 1.316-.518"></svg:path><svg:path d="M17.29 13.504a2 2 0 0 1-.375 2.309l-1.102 1.102a2 2 0 0 1-2.309.375l-.77-.385a1 1 0 1 1 .895-1.789l.77.385l1.102-1.102l-.385-.77a1 1 0 0 1 1.789-.894z"></svg:path><svg:path d="M14.112 15.644a1 1 0 0 1-.563 1.297l-1.167.46a1 1 0 1 1-.733-1.861l1.167-.46a1 1 0 0 1 1.296.564"></svg:path><svg:path d="M12.677 17.633A2 2 0 0 1 10.779 19H9.221a2 2 0 0 1-1.898-1.367l-.272-.817a1 1 0 0 1 1.898-.632L9.22 17h1.558l.272-.816a1 1 0 0 1 1.898.632z"></svg:path><svg:path d="M8.917 16.899a1 1 0 0 1-1.316.518l-1.15-.5a1 1 0 1 1 .798-1.834l1.15.5a1 1 0 0 1 .518 1.316"></svg:path><svg:path d="M6.496 17.29a2 2 0 0 1-2.309-.375l-1.102-1.102a2 2 0 0 1-.375-2.309l.385-.77a1 1 0 1 1 1.789.895l-.385.77L5.601 15.5l.77-.385a1 1 0 1 1 .894 1.789z"></svg:path><svg:path d="M4.356 14.112a1 1 0 0 1-1.297-.563l-.46-1.167a1 1 0 0 1 1.861-.733l.46 1.166a1 1 0 0 1-.564 1.297"></svg:path><svg:path d="M2.368 12.677A2 2 0 0 1 1 10.779V9.221a2 2 0 0 1 1.368-1.898l.816-.272a1 1 0 1 1 .632 1.898L3 9.22v1.558l.816.272a1 1 0 1 1-.632 1.898z"></svg:path><svg:path d="M3.101 8.917a1 1 0 0 1-.518-1.316l.5-1.15a1 1 0 0 1 1.834.798l-.5 1.15a1 1 0 0 1-1.316.518"></svg:path><svg:path d="M2.71 6.496a2 2 0 0 1 .375-2.309l1.102-1.102a2 2 0 0 1 2.309-.375l.77.385a1 1 0 1 1-.895 1.789l-.77-.385L4.5 5.601l.385.77a1 1 0 1 1-1.789.894z"></svg:path><svg:path d="M5.887 4.356a1 1 0 0 1 .564-1.297l1.167-.46a1 1 0 1 1 .733 1.861l-1.167.46a1 1 0 0 1-1.297-.564"></svg:path><svg:path d="M7.323 2.368A2 2 0 0 1 9.221 1h1.558a2 2 0 0 1 1.898 1.368l.272.816a1 1 0 0 1-1.898.632L10.78 3H9.221l-.272.816a1 1 0 0 1-1.898-.632z"></svg:path><svg:path d="M11.083 3.101a1 1 0 0 1 1.316-.518l1.15.5a1 1 0 0 1-.798 1.834l-1.15-.5a1 1 0 0 1-.518-1.316"></svg:path></svg:g>`,
})
export class PepiconsPopGearIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
